---
title: "An open NZ seed-funding directory + matching agent, with a vouched-connection layer"
domain: "grant-access"
issue: "#<fill in after opening the Ideate issue>"
based_on:
  - "research/findings/grant-access/nz-startup-funding-access-attribution.md"
  - "research/findings/grant-access/nz-micro-cheque-funding-pathways.md"
  - "research/findings/grant-access/overseas-founder-investor-connection-models.md"
  - "research/findings/grant-access/nz-investor-open-format-directory-participation.md"
  - "research/findings/grant-access/who-is-locked-out-nz-angel-seed.md"
  - "research/findings/grant-access/kaupapa-maori-pasifika-investment.md"
  - "research/findings/grant-access/warm-network-barrier-quantification.md"
feasibility: "High"
author: "<your name or handle>"
agent: "claude"
model: "<fill in the model you used>"
date: "2026-07-03"
---

# An open NZ seed-funding directory + matching agent, with a vouched-connection layer

## The problem it addresses

Stream #110's research (synthesis:
`streams/110-early-stage-nz-founders-can-t-reach-angel-seed-fun.md`) established
that NZ's early-stage funding problem is an *access and matching* problem layered on
a capital problem: angel groups deployed ~$14m across 167 deals in 2025, yet no
mechanism lets a founder match by cheque size, stage or region; warm introductions
are roughly 13× more effective than cold outreach, which structurally excludes
founders without networks; female-only teams received ~2.9% of VC in 2024 and
Māori/Pasifika founders are ~27% of the population but ~4% of funded teams; and
nobody in NZ even counts how many startups try and fail to raise, or why.

## The idea

Three layers, built in public, cheapest-first — designed around the synthesis's
key tension (an open marketplace vs. evidence favouring curated, vouched
connections). The answer is *both*: open data for discovery, vouching for
connection.

1. **Open directory (`funders.json`)** — one entry per NZ early-stage funder:
   type, stage range, region/coverage, cheque size, founder-focus tags (women /
   Māori / Pasifika / student), how to apply, and — non-negotiable — a source URL
   and verified date per entry. CC BY 4.0 so anyone (incubators, EDAs, uni
   programmes) can reuse it. Directly implements the synthesis's "curated
   directory of funding pathways with transparency on stage, region and status".
2. **Matching agent** — takes a founder profile (stage, amount, region, sector,
   focus) and returns ranked, explained matches; optionally an LLM-generated,
   directory-grounded funding plan (sequencing grants → angels → funds, what to
   prepare, realistic timelines). A working prototype of layers 1+2 exists (CLI,
   zero dependencies) and would land at `projects/nz-seed-access/`.
3. **Vouched-connection layer (the human bit)** — because the research says warm
   beats cold ~13×, discovery alone isn't enough. Pair the directory with (a)
   named "open doors" per funder — people who've agreed to take a first meeting
   or make an intro without a paid gate — and (b) open-format founder-investor
   events (all founders and all investors in one room, not top-5 pitch nights),
   run with regional partners, testing the willingness the
   `nz-investor-open-format-directory-participation` finding probed. This layer
   is deliberately scoped as an experiment: run one event, measure connections
   made, publish the result.

## Who it helps, and how much

Founders raising below the ~$250k visibility line — first-timers,
out-of-main-centre, women, Māori and Pasifika founders — who lack the warm
networks that currently substitute for public information (see
`who-is-locked-out-nz-angel-seed.md` and `warm-network-barrier-quantification.md`);
plus the mentors, regional EDAs and incubators who advise them. The micro-cheque
segment ($10k–$200k) is the primary target market
(`nz-micro-cheque-funding-pathways.md`).

## Feasibility for a small team

Layers 1–2 are data curation plus a small program — ideal for volunteers with AI
tooling; the dataset is the moat and the maintenance burden, the code is trivial
on purpose. Layer 3 needs one motivated human organiser and a venue partner
(e.g. a regional EDA or hub) per event.

- **Smallest useful version:** the CLI + a directory of ~25 verified funders
  covering every funder type and all main regions. (Exists as a prototype.)
- **Time to first useful result:** already usable; a founder gets a shortlist in
  under a minute. First open event: one region, ~8 weeks of organising.
- **Skills / data / access needed:** web research + citation discipline for the
  dataset; Node for the agent; event organising + investor relationships for
  layer 3 — no privileged data access, everything from public sources.

## Risks & ethics

- **Stale or wrong data harms founders** (wasted approaches, missed windows).
  Safeguard: source URL + verified date per entry, freshness flagging, "confirm on
  the funder's site before applying" in every output.
- **Implied endorsement.** The directory describes, it doesn't recommend; the
  matcher explains *why* something matched. No pay-to-list, ever — pay-to-play is
  the problem this exists to solve.
- **Vouching can recreate gatekeeping.** The "open doors" layer must have
  transparent criteria and turnover, or it becomes another closed club with
  better branding. Publish how door-openers are chosen.
- **LLM hallucination.** The plan generator is constrained to funders in the
  verified directory and told to invent nothing.
- **Equity.** If the directory over-represents Auckland/Wellington it amplifies
  the regional gap; Māori/Pasifika and regional coverage is a first-class
  curation goal (`kaupapa-maori-pasifika-investment.md`), not an afterthought.
- No personal data is collected or stored; profiles are ephemeral input.

## How we'd know it worked

- Founders/advisors actually using it (repo traffic, incubators linking it).
- External contributions: funder corrections/additions via PR from strangers.
- Layer 3: connections made per event (count founder-investor conversations and
  follow-up meetings, not attendance) — feeding the measurement gap the synthesis
  flagged ("nobody counts").
- Qualitative: a founder reports finding a funder — or getting a first meeting —
  they had no path to before, especially outside Auckland.

## Next step

Open a Build issue linking this solution; submit the prototype under
`projects/nz-seed-access/` via PR, then scope the first open event as a separate
follow-up issue.
