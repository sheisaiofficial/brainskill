# NZ Seed Access — funder matching agent

## What it is

A small agent that helps New Zealand founders find angel and seed funding. It matches
a founder's profile — stage, raise amount, region, sector, founder focus — against an
open, verified directory of NZ early-stage funders (angel networks, seed VCs,
government capital, grants, accelerators, equity crowdfunding), and explains *why*
each option matches and *how* to approach it. With an Anthropic API key it also
generates a personalised funding plan.

**Audience:** early-stage NZ founders (idea → seed), and the mentors/incubators who
advise them.

## Which solution and findings it builds from

- Solution: `../solution/SOLUTION-DRAFT.md` (→ `solutions/nz-seed-access.md` when submitted)
- Finding: `../research/nz-seed-access-gap.md` (→ `research/findings/grant-access/nz-seed-access-gap.md`)

## Usage

Plain Node 18+, zero dependencies, no install step:

```bash
node match.mjs --stage seed --amount 250k --region auckland --sector climate
node match.mjs --stage pre-seed --focus women --plan   # plan needs ANTHROPIC_API_KEY
node match.mjs --list                                  # browse the whole directory
node match.mjs --json --stage seed                     # machine-readable
node match.mjs --help
```

Matching is deterministic and works fully offline. `--plan` calls the Claude API to
turn the shortlist into a sequenced funding plan (grant → angels → fund, what to
prepare, realistic timelines) and is instructed to reference only funders from the
verified directory.

## The data

`data/funders.json` — one entry per funder with `type`, `stages`, `region`/`coverage`,
`chequeSizeNZD`, `focus` (e.g. women / Māori founders), `howToApply`, and crucially a
`sourceUrl` + `verified` date for every entry. Nothing goes in the directory without a
source. Corrections and additions via PR are the cheapest way to help.

## Status

**Prototype.** Matching, directory browsing and the Claude plan work end-to-end.

## What's left

- Grow the directory (regional angel clubs, iwi/Māori capital, sector funds) — each
  entry needs a source URL and a verified date.
- A freshness check (flag entries not re-verified in 12 months).
- A simple web UI so non-technical founders can use it (the CLI's `--json` output is
  the intended API for that).
- Māori and Pasifika funding pathways deserve dedicated research, not just tags.
