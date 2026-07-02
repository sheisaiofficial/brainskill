#!/usr/bin/env node
/**
 * NZ Seed Access — funder matching agent.
 *
 * Matches a founder's profile against a verified dataset of New Zealand
 * angel networks, seed funds, grants, accelerators and equity-crowdfunding
 * platforms (data/funders.json — every entry carries a source URL).
 *
 * Zero dependencies. Deterministic matching always works offline; if
 * ANTHROPIC_API_KEY is set, a personalised funding plan is generated on top.
 *
 * Usage:
 *   node match.mjs --stage seed --amount 250000 --region auckland --sector climate
 *   node match.mjs --stage pre-seed --focus women --plan
 *   node match.mjs --list            # print the whole directory
 *   node match.mjs --help
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const FUNDERS = JSON.parse(readFileSync(join(here, "data", "funders.json"), "utf8"));

// ---------- CLI parsing ----------

function parseArgs(argv) {
  const args = { focus: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const next = () => argv[++i];
    switch (a) {
      case "--stage": args.stage = next()?.toLowerCase(); break;
      case "--amount": args.amount = Number(String(next()).replace(/[^0-9.]/g, "")); break;
      case "--region": args.region = next()?.toLowerCase(); break;
      case "--sector": args.sector = next()?.toLowerCase(); break;
      case "--focus": args.focus.push(next()?.toLowerCase()); break;
      case "--type": args.type = next()?.toLowerCase(); break;
      case "--plan": args.plan = true; break;
      case "--list": args.list = true; break;
      case "--json": args.json = true; break;
      case "--help": case "-h": args.help = true; break;
      default:
        console.error(`Unknown flag: ${a} (see --help)`);
        process.exit(1);
    }
  }
  return args;
}

const HELP = `
NZ Seed Access — find angel & seed funding options for your NZ startup.

Flags (all optional — fewer flags, broader results):
  --stage <s>     idea | pre-seed | seed | series-a
  --amount <n>    how much you're raising, NZD (e.g. 250000 or 250k)
  --region <r>    your region (e.g. auckland, wellington, canterbury, otago,
                  bay-of-plenty, taranaki, marlborough) — national funders
                  always match
  --sector <s>    e.g. saas, climate, health, deeptech, agritech, consumer
  --focus <f>     repeatable: women | maori | pasifika | student | social
  --type <t>      only: angel-network | vc | government | grant | accelerator
                  | crowdfunding
  --plan          also generate a personalised funding plan with Claude
                  (needs ANTHROPIC_API_KEY)
  --list          print the entire funder directory
  --json          machine-readable output

Examples:
  node match.mjs --stage seed --amount 300k --region canterbury
  node match.mjs --stage pre-seed --sector agritech --focus maori --plan
`;

// ---------- Matching ----------

function amountFits(f, amount) {
  if (!amount || !f.chequeSizeNZD) return true; // unknown = don't exclude
  const { min, max } = f.chequeSizeNZD;
  if (min != null && amount < min * 0.5) return false; // way below their floor
  if (max != null && amount > max * 4) return false;   // they could still be part of a round
  return true;
}

function score(f, q) {
  let s = 0;
  const reasons = [];

  if (q.stage) {
    if (f.stages.includes(q.stage)) { s += 3; reasons.push(`invests at ${q.stage}`); }
    else return null; // stage is a hard filter when given
  }
  if (q.type && f.type !== q.type) return null;

  if (q.region) {
    if (f.coverage === "national") { s += 1; reasons.push("operates nationally"); }
    else if (f.region?.toLowerCase().includes(q.region)) { s += 3; reasons.push(`local to ${f.region}`); }
    else return null; // regional funder, wrong region
  }

  if (q.sector) {
    const sectors = f.sectors.map((x) => x.toLowerCase());
    if (sectors.includes("generalist")) { s += 1; }
    else if (sectors.some((x) => x.includes(q.sector) || q.sector.includes(x))) {
      s += 3; reasons.push(`focuses on ${q.sector}`);
    } else return null;
  }

  for (const foc of q.focus) {
    if ((f.focus ?? []).includes(foc)) { s += 2; reasons.push(`dedicated ${foc}-founder focus`); }
  }

  if (!amountFits(f, q.amount)) return null;
  if (q.amount && f.chequeSizeNZD) { s += 1; reasons.push("cheque size in range"); }

  return { funder: f, score: s, reasons };
}

// ---------- Output ----------

const TYPE_LABEL = {
  "angel-network": "Angel network",
  vc: "VC fund",
  government: "Government capital",
  grant: "Grant / non-dilutive",
  accelerator: "Accelerator / incubator",
  crowdfunding: "Equity crowdfunding",
};

function fmtCheque(c) {
  if (!c) return "cheque size not published";
  const fmt = (n) => (n >= 1e6 ? `$${n / 1e6}m` : `$${Math.round(n / 1e3)}k`);
  if (c.min != null && c.max != null) return `${fmt(c.min)}–${fmt(c.max)} NZD`;
  if (c.max != null) return `up to ${fmt(c.max)} NZD`;
  return `from ${fmt(c.min)} NZD`;
}

function printFunder(f, reasons) {
  console.log(`\n  ${f.name}  —  ${TYPE_LABEL[f.type] ?? f.type}`);
  console.log(`  ${f.stages.join(" / ")} · ${fmtCheque(f.chequeSizeNZD)} · ${f.coverage === "national" ? "NZ-wide" : f.region}`);
  if (reasons?.length) console.log(`  why: ${reasons.join("; ")}`);
  console.log(`  how: ${f.howToApply}`);
  console.log(`  ${f.url}`);
}

// ---------- Optional Claude plan ----------

async function generatePlan(matches, q) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    console.error("\n--plan needs ANTHROPIC_API_KEY set; skipping the plan.");
    return;
  }
  const profile = JSON.stringify(q);
  const shortlist = matches.slice(0, 10).map(({ funder: f }) => ({
    name: f.name, type: f.type, stages: f.stages, cheque: f.chequeSizeNZD,
    how: f.howToApply, url: f.url, notes: f.notes,
  }));
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.ANTHROPIC_MODEL || "claude-sonnet-5",
      max_tokens: 1500,
      messages: [{
        role: "user",
        content:
`You are a pragmatic NZ startup funding advisor. A founder has this profile: ${profile}.
Their matched funding options (from a verified directory) are:
${JSON.stringify(shortlist, null, 2)}

Write a short, concrete funding plan: (1) the 2–3 options to pursue first and why,
(2) realistic sequencing (e.g. grant → angel round), (3) what to prepare before
approaching each, (4) honest expectations on timelines. Only reference the funders
listed above — do not invent others. Plain language, NZ context.`,
      }],
    }),
  });
  if (!res.ok) {
    console.error(`\nClaude API error ${res.status}: ${await res.text()}`);
    return;
  }
  const data = await res.json();
  console.log("\n────────── Personalised funding plan ──────────\n");
  console.log(data.content?.map((b) => b.text ?? "").join("\n"));
}

// ---------- Main ----------

const q = parseArgs(process.argv.slice(2));
if (q.help) { console.log(HELP); process.exit(0); }

if (q.list) {
  const rows = q.json ? FUNDERS : null;
  if (rows) { console.log(JSON.stringify(rows, null, 2)); process.exit(0); }
  for (const f of FUNDERS) printFunder(f);
  console.log(`\n${FUNDERS.length} funders in directory. Every entry has a source URL in data/funders.json.\n`);
  process.exit(0);
}

const matches = FUNDERS.map((f) => score(f, q)).filter(Boolean)
  .sort((a, b) => b.score - a.score);

if (q.json) {
  console.log(JSON.stringify(matches.map(({ funder, score: s, reasons }) => ({ id: funder.id, score: s, reasons })), null, 2));
  process.exit(0);
}

if (!matches.length) {
  console.log("\nNo direct matches — try fewer filters, or run --list to browse the full directory.");
  process.exit(0);
}

console.log(`\nFound ${matches.length} funding option${matches.length === 1 ? "" : "s"} for your profile:`);
for (const m of matches) printFunder(m.funder, m.reasons);
console.log(`\nData last verified: see "verified" dates in agent/data/funders.json — always confirm current criteria on the funder's own site before applying.\n`);

if (q.plan) await generatePlan(matches, q);
