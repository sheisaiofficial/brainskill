# SHE IS AI — Ethical Intelligent AI Layer
## Ecosystem architecture & plan of action

*Working draft — 3 July 2026. Lives in the brainskill repo for now because that's
where the first tool shipped; the plan below recommends where everything else lives.*

---

## 1. The idea in one paragraph

SHE IS AI becomes an ecosystem of small, focused AI tools that each understand one
layer of a person — self, systems, others — and a proprietary **intelligence layer**
that fuses those understandings into one coherent, portable "Conscious AI OS": a set
of files a person installs into Claude (or any AI) so their AI works with their
consciousness, their values, and their way of working — and can then be extended into
agents and whole systems that work *for* them. The hub at **intelligence.sheisai.ai**
is where it all comes together (the SHE IS AI equivalent of Nici Sweaney's
os.aiherway.com.au — but where she leads with data and structure, we lead with
ethics + consciousness + intelligence).

The organising principle (as said to Amanda): **first understand self, then understand
the systems and structures, then understand and build the agentic layer** — built up
like layers.

---

## 2. The map — every piece and which layer it belongs to

### Layer 1 — SELF (understand yourself)
| Piece | Status | What it does | What it emits |
|---|---|---|---|
| **She Is Sol — Consciousness Assessment** | To design & build | Custom assessment measuring consciousness across levels/modalities. The intake for everything else. | `consciousness-index.json` + Consciousness Map |
| **Brain Skill** (brainskill.sheisai.ai) | ✅ Live | Brain profile → personalised Claude skill ("how I work best") | `SKILL.md` (+ brand-reference, coo guide on Pro) |

### Layer 2 — SYSTEMS & OTHERS (understand structures, work with people better)
| Piece | Status | What it does | What it emits |
|---|---|---|---|
| **COO Tool** (coo.sheisai.ai) | ✅ Exists (separate repo) | Business operations / structure intelligence | ops skill / systems files |
| **Peace Skill** (peaceskill.sheisai.ai) | 🔨 To build next | Relational intelligence: how you communicate, handle conflict, collaborate, repair — so your AI helps you work with *others* better | `peace-skill/SKILL.md` + relational profile |
| **Governance generator** | To build (part of intelligence layer) | Turns your values + ethics into explicit AI guardrails | `GOVERNANCE.md` |

### Layer 3 — AGENTIC (build agents and systems that work for you)
| Piece | Status | What it does | What it emits |
|---|---|---|---|
| **Agent builder** | To build (hub feature) | Uses your full profile to generate agents (Claude Code subagent format) tuned to you and governed by your governance file | `agents/*.md` |
| **Conscious AI OS assembler** | To build (the proprietary core) | Fuses all tool outputs into one master OS | full file pack (below) |

### The layer that ties it together — THE INTELLIGENCE LAYER
The proprietary piece. Not a visible tool — an engine + data model:

1. **The SIA Profile Schema** — one canonical JSON schema describing a person across
   all layers (brain wiring, consciousness index, relational style, values,
   business context). Every tool reads from and writes to this. *This schema is the
   actual moat — tools are replicable, the unified model of a person is not.*
2. **The Synthesis Engine** — a Claude-powered process that takes everything a person
   has generated across the tools and produces the unified deliverables: the
   Intelligence Report, the visualization, the master OS file, agents.
3. **The Hub** (intelligence.sheisai.ai) — the app where a person sees their
   consciousness map, downloads their file pack, re-runs synthesis as they complete
   more tools, and builds agents.

---

## 3. What every person gets — the "Conscious AI OS" file pack

Standardise this now, before building anything else, so every tool emits compatible
pieces. Proposed pack (a zip they add to Claude / Claude Code):

```
sia-os/
  CLAUDE.md                    ← the Conscious AI OS master file: wires everything
                                  together, tells the AI how to use the rest
  GOVERNANCE.md                ← governance file: values, ethics, red lines,
                                  decision rights ("my AI may draft, never send")
  consciousness-index.json     ← machine-readable scores/map from She Is Sol
  CONSCIOUSNESS.md             ← human-readable consciousness map narrative
  skills/
    how-[name]-works-best/SKILL.md   ← from Brain Skill
    peace-skill/SKILL.md             ← from Peace Skill
    [business-os]/SKILL.md           ← from COO tool
  agents/
    *.md                       ← generated agent files (Claude subagent format)
  report/
    intelligence-report.md     ← the narrative Intelligence Report (PDF export too)
    consciousness-map.html     ← the visualization (self-contained, interactive)
```

Design rules for the pack:
- Every file works standalone (someone with only Brain Skill still gets full value)
  but declares itself in shared frontmatter (`sia_layer: self|systems|others|agentic`,
  `sia_version`, `generated_from`) so the assembler can fuse them.
- The pack must be **portable and vendor-open**: works in Claude.ai projects, Claude
  Code, and degrades gracefully elsewhere. Ethics point: the user owns their model
  of themselves; we never hold it hostage.

---

## 4. Repos — the direct answer

**Question asked: does this go in the brainskill repo, does each tool need its own
repo, or can there be one "intelligence layer" repo?**

**Recommendation: one new monorepo for everything new. Brainskill and COO stay where
they are for now.**

- ❌ **Not inside the brainskill repo.** It's a live, deployed product with its own
  Stripe webhooks and Vercel project. Mixing four unbuilt products into it couples
  experiments to production and confuses deploys. (This planning doc living here is
  fine; the code shouldn't.)
- ❌ **Not one repo per tool.** Brainskill's stack (Next.js + Vercel + Stripe +
  Flodesk + Anthropic + the file-packaging code) is ~80% of what Peace Skill, Sol,
  and the hub each need. Five repos = five copies of the same billing, email, UI,
  and generation code drifting apart.
- ✅ **One monorepo — suggested name `sheisai-os` (or `intelligence-layer`):**

```
sheisai-os/
  apps/
    hub/            → intelligence.sheisai.ai   (Next.js)
    peaceskill/     → peaceskill.sheisai.ai     (Next.js)
    sol/            → sol.sheisai.ai            (assessment app)
  packages/
    schema/         → the SIA Profile Schema + validators (the moat, versioned)
    core/           → synthesis engine, prompt library, file-pack assembler
    ui/             → shared design system (extract from brainskill's components/)
    billing/        → Stripe helpers (lift from brainskill lib/stripe.ts)
    email/          → Flodesk helpers (lift from lib/flodesk.ts)
    db/             → shared Postgres schema + client
  docs/             → this plan, the ethics framework, the schema spec
```

Why this works mechanically: **Vercel natively deploys multiple projects from one
monorepo**, each app keeping its own subdomain, env vars, and deploy pipeline.
Turborepo (or plain npm workspaces) handles the shared packages.

**Brainskill and COO:** leave them in their own repos short-term; integrate them with
the intelligence layer via the schema — each tool POSTs its output to the hub's
profile API (with user consent) rather than being rebuilt. Once `packages/` is
stable, optionally migrate them into the monorepo as `apps/brainskill` and
`apps/coo`. Migration is mechanical; don't block on it.

---

## 5. The hard problems to decide early (these shape everything)

1. **Identity & accounts.** Brainskill has no accounts — just an email and a
   one-shot generation. The intelligence layer *requires* a persistent identity so
   Sol results + Brain Skill + Peace Skill can be fused for the same person.
   → Add auth at the hub (Clerk or NextAuth, email-magic-link keeps it simple),
   and have every tool offer "save this to my SHE IS AI profile" at the end.
2. **Consent-first persistence.** Brainskill's schema has a deliberate rule:
   *"profile content is NEVER persisted."* The intelligence layer inverts that — it
   only works if content persists. Resolve this ethically, and loudly:
   - Persistence is **opt-in per artifact** ("Add this to my Consciousness Profile?").
   - One-click **export everything** and **delete everything** from day one.
   - Publish the data policy as part of the ethics framework — this *is* the
     "highly ethical" positioning, made concrete. Nici leads with data & structure;
     SHE IS AI leads with "your inner data belongs to you."
3. **The assessment is content before it is code.** She Is Sol needs the actual
   instrument designed: what dimensions of consciousness, how many items, what
   scoring model, what the map visualizes. No amount of engineering substitutes for
   this — it's the piece only Amanda (± a psychometrics collaborator) can create.
4. **What Peace Skill actually assesses.** Proposed scope (to confirm): communication
   style, conflict pattern, repair style, boundaries, collaboration preferences,
   triggers-with-others — mirrored against the Brain Skill profile ("your brain
   works like X, so under pressure with others you tend to Y").
5. **Pricing & packaging.** Suggested shape: each tool keeps a free tier + one-off
   Pro (the brainskill $47 pattern), and the hub introduces a membership
   (monthly/annual) that includes synthesis, the full OS pack, re-runs, and the
   agent builder. Tools are the funnel; the hub is the recurring revenue.

---

## 6. Peace Skill — build spec (the next concrete build)

Clone the brainskill architecture wholesale — it's proven:

- **Flow:** landing → input (either paste/upload something about how you relate —
  or answer a short guided reflection form, ~8–12 questions) → Claude generates →
  free tier gets `SKILL.md`, Pro gets the fuller pack.
- **Output — free:** `peace-skill/SKILL.md`, first-person, trigger words like
  "help me reply to", "I'm frustrated with", "before this meeting", "this message
  reads as", "I need to have a hard conversation".
- **Output — Pro:** + `relational-reference.md` (their patterns explained),
  `how-to-use-with-brain-skill.md` (cross-sell + genuine integration),
  and the relational slice of `consciousness-index.json`.
- **Prompt principles carry over from brainskill verbatim** (strengths-based,
  wiring-not-disorder, person stays in charge) plus new ones: never assign blame to
  the other party; never coach manipulation; de-escalation over winning; the skill
  helps you *be understood and understand*, not manage people.
- **Stack:** same (Next.js 14 / Vercel / Stripe / Flodesk / Anthropic) — but built
  as the **first app in the new monorepo**, forcing the extraction of shared
  packages while the surface area is still small. That's the real reason to build
  Peace Skill second: it bootstraps the monorepo cheaply.

---

## 7. Plan of action — phased

### Phase 0 — Foundations (1–2 weeks, mostly decisions + writing)
- [ ] Confirm names/subdomains: `peaceskill.`, `sol.` (or assessment inside hub?), `intelligence.`
- [ ] Draft **SIA Profile Schema v0.1** (JSON) + the file-pack spec (§3)
- [ ] Write the **Ethics & Governance framework** (public doc: data ownership,
      consent, no-manipulation, export/delete rights) — the brand differentiator
- [ ] Amanda: begin She Is Sol assessment design (dimensions, items, scoring)
- [ ] Get the COO repo added to a session so it can be mapped into the schema

### Phase 1 — Peace Skill MVP (2–3 weeks of build)
- [ ] Create `sheisai-os` monorepo; extract `ui`, `billing`, `email`, `core` from brainskill
- [ ] Build Peace Skill per §6; ship to peaceskill.sheisai.ai
- [ ] Both skills carry the shared frontmatter so they're fuse-ready

### Phase 2 — She Is Sol assessment (build once instrument exists)
- [ ] Assessment engine app: questionnaire → scoring → `consciousness-index.json`
      + Consciousness Map narrative + first visualization
- [ ] This is the front door of the ecosystem — design the "what you'll get" arc

### Phase 3 — Intelligence layer + accounts
- [ ] Auth at the hub (magic link); "save to my profile" added to every tool
- [ ] Profile store (consent-first, export/delete built in on day one)
- [ ] **Synthesis Engine v1:** all saved artifacts → Intelligence Report +
      master `CLAUDE.md` + assembled OS pack zip

### Phase 4 — The Hub (intelligence.sheisai.ai)
- [ ] Dashboard: consciousness map visualization, layer-completion status
      (self ✓ / systems ✓ / others ✓ / agentic —), file pack downloads
- [ ] Membership billing; brainskill + COO integrate via the profile API

### Phase 5 — Agentic layer
- [ ] Agent builder: pick a role → agent generated from *their* profile, governed
      by *their* GOVERNANCE.md → added to their pack
- [ ] Agent teams / whole-system templates (the "systems that work for you" promise)

---

## 8. What's needed from Amanda to unblock each phase

| Needed | Unblocks |
|---|---|
| She Is Sol assessment content (dimensions, questions, scoring) | Phase 2 |
| Decision: what Peace Skill assesses + its input method (upload vs guided form) | Phase 1 |
| Access to the COO repo (add_repo in a session) | schema mapping, Phase 3–4 |
| Naming + DNS for new subdomains | Phase 1–4 |
| Pricing decision (per-tool one-offs vs hub membership vs both) | Phase 3–4 |
| The ethics framework reviewed/approved in her voice | Phase 0 |
| Anthropic/Stripe/Flodesk keys for new Vercel projects | each launch |
