# Level 1 build — what exists now, and how it feeds the AI OS

*3 July 2026. Companion to `INTELLIGENCE-LAYER-PLAN.md` (which this supersedes in
part — the plan doc's "Peace Skill = relational" guess is corrected here: Peace
Skill is mindfulness / self-care / weekly rhythm / work-life balance, per Amanda.)*

## The three levels (locked)

| Level | Plane | What happens | Where |
|---|---|---|---|
| **1** | Soul — understand yourself | Every methodology lens → synthesis → Intelligence Layer files | intelligence.sheisai.ai (built) |
| **2** | Mind — understand the machine | Teach AI itself: infrastructure, architecture, skills, agents, automation. The AI OS is built here, with Level 1 files as ingredients | Course / program (out of code scope for now) |
| **3** | Body — physical manifestation | Person + business + AI systems executing in the real world | Later |

## What's built in this repo now

```
apps/hub/         → intelligence.sheisai.ai  (Level 1 journey → Intelligence Layer pack)
apps/peaceskill/  → peaceskill.sheisai.ai    (self-care / weekly rhythm / balance skill)
packages/schema/  → SIA Profile Schema v0.1  (the machine-readable contract)
docs/             → plans + this doc
(repo root)       → brainskill.sheisai.ai    (live, untouched)
```

**Hub journey** (`/journey`): About you (+ optional birth details) → Mind & wiring
(brain profile, MBTI, DISC, Gallup, Enneagram) → Energetic blueprint (Human Design,
tropical astrology, numerology) → In your own words (journey/baseline/current state,
goals/drivers) → synthesis.
Free (Sonnet): `intelligence-report.md`, `SKILL.md`, `intelligence-support-SKILL.md`.
Pro $97 placeholder (Opus): + `consciousness-index.json`, `GOVERNANCE.md`.
Each lens card links to where to take the assessment if they don't have it.

## Is the AI OS prompt approach right? (Amanda's question)

**Yes — and it's the ethically correct architecture, not just a workable one.**
The pattern:

1. Level 1 (here) produces the person's files. They own them; we delete content.
2. The person runs the **AI OS prompt inside their own Claude**, giving it their
   Level 1 files + business material. The OS is assembled *in their environment,
   from their files* — their inner data never has to live on our servers for the
   OS to be deeply personal. The intelligence layer is baked in because the OS
   builder *consumes* our files, not because we hold anything.
3. Everything downstream (agents, systems) inherits it, because the OS prompt
   makes `GOVERNANCE.md` + the consciousness index part of the OS's root context.

Two contracts make the infusion reliable rather than vibes:
- **`consciousness-index.json`** (Pro) conforms to `packages/schema/` — the OS
  prompt can *parse* it, not just read prose.
- The AI OS prompt should include an explicit **ingestion step**: "Look for
  `intelligence-report.md`, `SKILL.md`, `intelligence-support-SKILL.md`,
  `consciousness-index.json`, `GOVERNANCE.md`. Load governance as inviolable root
  rules; load the index as the user model; install the skills." Once we have the
  current AI OS prompt, we add this block so Level 1 → Level 2 is a clean handoff.

## What's needed from Amanda (maps to her questions)

1. **Laura's report — RECEIVED & DONE.** The synthesis prompts are calibrated to
   its house style: confirmed-vs-converged provenance, the four-corner quadrant
   model with an honestly named empty corner, instrument-vs-driver corrections,
   cost-of-the-gift framing, working-style blocks, and a "Still to Confirm"
   section. Gene Keys and other-systems (Chinese astrology / Ayurveda) lenses
   added to the registry to match.
2. **The AI OS prompt — RECEIVED & DONE.** Two artifacts: every Pro pack now
   ships `how-to-build-your-os.md` (static, in `apps/hub/lib/os-bridge.ts`)
   with the exact filing map into the OS tree; and
   `docs/ai-os/BUILD-YOUR-AI-OS-PROMPT.md` is the full OS build prompt with
   `[IL]`-marked additions (Phase 0 Q9, Phase 2.5 install, governance-merge
   rules, never-edit-the-layer safety rule).
3. **Keys & config to go live:** for each of the two new Vercel projects —
   `ANTHROPIC_API_KEY`, Stripe product+price (Peace Skill Pro $47; Intelligence
   Layer Pro — confirm $97), webhook secrets, Flodesk segments, Postgres link,
   and the two domains pointed (`peaceskill.` and `intelligence.` → Vercel).
4. **Pro pricing** — Amanda says $27–$97; copy currently shows $97. Pick the number, set the Stripe price, adjust copy if not $97.
5. **COO repo access** when ready, so COO can read the schema files.
