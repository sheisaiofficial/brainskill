---
title: "An open NZ seed-funding directory + matching agent"
domain: "grant-access"
issue: "#<fill in after opening the Ideate issue>"
based_on: ["research/findings/grant-access/nz-seed-access-gap.md"]
feasibility: "High"
author: "<your name or handle>"
agent: "claude"
model: "<fill in the model you used>"
date: "2026-07-02"
---

# An open NZ seed-funding directory + matching agent

## The problem it addresses

Early-stage NZ founders can't easily see who funds at their stage. Angel networks,
seed funds, government grants, accelerators and equity-crowdfunding platforms each
publish criteria (if at all) on their own sites; no NZ-focused, maintained,
machine-readable directory exists, and the discovery tools founders find online
(metal.ai, Cherub, most grant marketplaces) target the US and other markets. See the
finding: `research/findings/grant-access/nz-seed-access-gap.md`.

## The idea

An open dataset plus a small agent, built in public:

1. **`funders.json`** — one entry per NZ early-stage funder: type, stage range,
   region/coverage, cheque size, founder-focus tags (women / Māori / Pasifika /
   student), how to apply, and — non-negotiable — a source URL and verified date per
   entry. CC BY 4.0 so anyone (incubators, Te Ōhanga groups, uni entrepreneurship
   programmes) can reuse it.
2. **A matching agent** — takes a founder profile (stage, amount, region, sector,
   focus) and returns ranked, explained matches; optionally an LLM-generated,
   directory-grounded funding plan (sequencing grants → angels → funds, what to
   prepare, realistic timelines).
3. **A freshness process** — entries older than 12 months get flagged for
   re-verification; dead links fail CI.

A working prototype of 1+2 already exists (CLI, zero dependencies) and would land at
`projects/nz-seed-access/`.

## Who it helps, and how much

First-time and out-of-main-centre founders, who lack the warm-network access that
currently substitutes for public information; and the mentors, regional EDAs and
incubators who advise them. (Scale figures: see the finding.)

## Feasibility for a small team

Yes — this is data curation plus a small program, ideal for volunteers with AI
tooling. The dataset is the moat and the maintenance burden; the code is trivial on
purpose.

- **Smallest useful version:** the CLI + a directory of ~25 verified funders
  covering every funder type and all main regions. (Exists as a prototype.)
- **Time to first useful result:** already usable; a founder gets a shortlist in
  under a minute.
- **Skills / data / access needed:** web research + citation discipline for the
  dataset; Node for the agent; no privileged data access — everything comes from
  public sources.

## Risks & ethics

- **Stale or wrong data harms founders** (wasted approaches, missed windows).
  Safeguard: source URL + verified date per entry, freshness flagging, "confirm on
  the funder's site before applying" in every output.
- **Implied endorsement.** The directory describes, it doesn't recommend; the
  matcher explains *why* something matched. No pay-to-list, ever.
- **LLM hallucination.** The plan generator is constrained to funders in the
  verified directory and told to invent nothing.
- **Equity.** If the directory over-represents Auckland/Wellington, it amplifies the
  regional gap it's meant to close — regional and Māori/Pasifika coverage is a
  first-class curation goal, not an afterthought.
- No personal data is collected or stored; profiles are ephemeral CLI input.

## How we'd know it worked

- Founders/advisors actually using it (downloads, repo traffic, incubators linking it).
- External contributions: funder corrections/additions via PR from people we don't know.
- Qualitative: a founder reports finding a funder they didn't know existed —
  especially outside Auckland.

## Next step

Open a Build issue linking this solution; submit the prototype under
`projects/nz-seed-access/` via PR.
