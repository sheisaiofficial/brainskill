# Roadmap v2 — finishing intelligence.sheisai.ai and what comes after

*Written for the strategy + pricing review with Laura and Wayne. Verdict first:
we have enough to build everything discussed — including teams, which Wayne
already spec'd (the Amanda+Wayne doc's parked appendix contains the data
model, the gap-detection logic, and both views).*

## The three gold standards (all received)

| Artifact | Calibrates |
|---|---|
| Laura's Intelligence Layer | Individual synthesis — done, encoded in the prompts |
| Amanda's Intelligence Layer | Confirms the house style generalises (TO CONFIRM discipline, Gene Keys spine, gap-beside-the-gap) |
| Amanda + Wayne Combined Layer | **Team synthesis** — overlap map, shared-fire warning, coverage table, clash map, operating rules, decide-together protocol |

The combined doc's appendix is, verbatim, the team app spec: person records
(drivers/strengths/overuses/covers/gaps), capabilities list, businesses as
clusters, and rules — no owner = red, one owner = amber, 3+ owners = blue —
rendered as (1) a living force-graph brain map and (2) a coverage heatmap.

## Phase A — finish v1 of the hub (small, do before launch)

**Config (no code):** 2 Vercel projects (root dirs `apps/hub`, `apps/peaceskill`),
domains, `ANTHROPIC_API_KEY`, Stripe products (+price decision $27–97),
webhook secrets, Flodesk segments, Postgres, one end-to-end paid test.

**Code (each ~a session or less):**
1. **`INTELLIGENCE.md` pack index** — a root file in every zip: what each file
   is, load order for any AI ("read GOVERNANCE first, it wins"), plus a
   ready-to-paste **CLAUDE.md block** so a person can wire the layer into any
   Claude project in 60 seconds. (Amanda's "intelligence.md" idea — as the
   pack's front door.)
2. **`consciousness-map.html` — the visual, in the zip.** A self-contained
   interactive page generated from `consciousness-index.json`: quadrant map
   with the empty corner glowing, strengths ring, drivers/drains, golden
   thread, gap map. No server, works offline, private by construction —
   and it's the shareable "wow" artifact people screenshot.
3. **Email delivery honesty** — copy currently says "emailed to you"; the zip
   is download-only (Flodesk adds them to a segment but doesn't attach files).
   Either wire real delivery (Flodesk automation linking to a re-download, or
   drop the claim) — small, but launch-blocking for trust.
4. **Rate limiting on /api/generate** — free tier calls Sonnet with big
   contexts; add a simple per-email/IP daily cap before the URL is public.

## Phase B — TEAMS (the flagship, and the revenue line)

**"Combine your team's intelligence layers"** — exactly Wayne's spec:

- **v1 is stateless (no accounts needed, consistent with our privacy stance):**
  upload 2–6 `consciousness-index.json` files → the team synthesis engine
  (calibrated on the Amanda+Wayne doc) produces:
  - `team-report.md` — overlap map, true complements, the glaring gap,
    coverage table, clash map, decide-together protocol, operating rules
  - `team-index.json` — the combined machine-readable layer
  - `team-map.html` — the living mind map: people as nodes, capabilities as
    connecting nodes, red/amber/blue gap logic, hover for provenance
- The demo IS the family: Wayne + Laura + Amanda — shared Inspirational #1,
  Finisher empty for all three, Connector split by register, the Amanda–Laura
  GK43/GK23 crossed axis. One screenshot of that map sells the product.
- Pricing: this is a separate, higher tier ($197–$497 per team) and the
  door into B2B (leadership teams, agencies, masterminds).
- Requires Wayne's own full assessment to complete the demo (his side is
  still WAYNE'S READ, not confirmed — flagged in the doc itself).

## Phase C — the Intelligence OS Builder (Level 2 front door)

The guided walkthrough (à la ai-os-builder.vercel.app): a wizard that takes
their Level 1 pack + business context and assembles the AI OS scaffold —
folder tree, CLAUDE.md files, governance merged, skills installed — either as
a downloadable zip or as copy-paste steps for Claude Code. We already have
every ingredient (the OS prompt, the filing map, the pack); this productises
the walkthrough. Build after teams — it monetises Level 2, but teams
differentiates harder right now.

## Phase D — adapters & the living layer

- **Obsidian**: the pack is already markdown — add an `obsidian/` variant with
  wikilinks + a generated `.canvas` file (the map as a native Obsidian canvas).
- **Notion**: import instructions page (markdown imports cleanly) — docs, not code.
- **The living layer**: versioned re-synthesis ("your layer, v2") + a
  quarterly re-run ritual — the retention/membership hook.
- **Practitioner channel**: SHE IS SOL practitioners licensed to run the
  Soul-Led Interview with clients — B2B2C distribution.

## Competitive framing (for the review)

HD-marketing-department and HD-money tools are single-lens, single-use.
Ours: multi-lens synthesis with provenance discipline + a proprietary
interview + soul-level governance + a team layer + the OS bridge — and the
person owns every file. The moat is the schema + the anchor lens + the
family's own confirmed maps as living proof.

## Wayne's principle — now encoded

"The tools face the resistance, they don't avoid it." Added to the synthesis
engine as FACE THE RESISTANCE: every gap is delivered with both halves — the
system that carries the load AND the invitation to grow at the edge, in the
person's own awareness, decision-making, and self-responsibility.

## Grains from the bespoke-department model (the HD marketing example)

Studied: a done-for-you "personalised AI marketing department" — collaborative
extraction up front (positioning, voice, offers, ideal clients, HD as one
diagnostic layer), then custom context/skills/agents the client keeps using.

**Take:**
1. **A measurable outcome promise.** They sell "~80% less content workload."
   We sell understanding — add one operational promise per product ("your AI
   stops giving you generic advice, permanently"; "never re-explain yourself
   to your AI again").
2. **The independence arc, said out loud.** "You never need us again — the
   files are yours" is a selling line, not just an ethic.
3. **A business lens in the journey.** Their diagnostic covers offers, voice,
   ideal clients, how the person naturally sells. Our journey is person-deep
   but business-light — add one "Your work & business" lens (the schema
   already reserves the `business` lens id) so the synthesis can connect
   wiring → work. Small build, Phase A/B.
4. **A done-with-you tier on top.** Their model proves the high-touch price
   point. Ours stacks: self-serve ($27–97) → teams ($197–497) → practitioner
   /done-with-you build ($1–5k) using our own tools — the peer's whole
   business is our top tier.
5. **Make Level 2/3 feel like a department, not files.** The OS builder should
   ship at least one working agent template so people experience "systems
   trained to see like me," not just markdown.

**Don't take:** done-for-you as the core model (doesn't scale; we're
product-led); single-lens HD diagnostics (we synthesise many, with
provenance); marketing-only scope (we're the foundation everything sits on).

**Positioning line:** they hand-build a department around one person; we built
the engine that lets anyone generate that foundation themselves — and the
hands-on version sits on top as our premium tier, not our business model.

## Decisions needed at the review

1. Hub Pro price ($27–97) · 2. Teams tier price · 3. Free-tier depth (hold the
structured profile block for Pro?) · 4. Wayne's assessment (unblocks the team
demo) · 5. Go-live keys/config (Phase A list) · 6. Build order: A → B → C → D
as above, or swap B/C.
