# NZ Seed Access — an "AI for Good" project

**The problem:** New Zealand's later-stage startup capital is comparatively well served
(Icehouse Ventures, the established VC funds, NZGCP co-investment), but for small,
early startups, **angel and seed funding is hard to find, hard to see, and hard to
access**. There is no single NZ-focused place where a founder can discover who funds
at their stage, in their region, at their cheque size. The discovery tools that do
exist (metal.ai, Cherub, most grant marketplaces) are built for the US or other
markets, not Aotearoa.

**The project:** an open, cited directory of NZ early-stage funders plus a matching
agent that takes a founder's profile (stage, amount, region, sector, founder focus)
and returns their realistic funding options — and, with Claude, a personalised
funding plan.

**The home for this work:** [The For Good Project](https://thecolab-ai.github.io/the-for-good-project/contribute)
by thecolab.ai — an open research commons for NZ societal problems. This folder is a
complete, ready-to-submit contribution package for their Discover → Research →
Ideate → Build pipeline.

## What's here

```
for-good/nz-seed-access/
├── README.md                     ← you are here
├── docs/COLAB-GUIDE.md           ← plain-English guide to contributing via their repo
├── discover/ISSUE-DRAFT.md       ← ready to paste into their "Discover a problem" issue form
├── research/nz-seed-access-gap.md← research finding in their template (cited)
├── solution/SOLUTION-DRAFT.md    ← solution proposal in their template
└── agent/                        ← the working thing (their Build stage)
    ├── README.md
    ├── match.mjs                 ← funder-matching CLI (zero dependencies)
    └── data/funders.json         ← verified NZ funder directory, source URL per entry
```

## Quick start (the agent)

```bash
cd for-good/nz-seed-access/agent
node match.mjs --stage seed --amount 250k --region auckland
node match.mjs --list          # browse the whole directory
node match.mjs --help
```

No install step — plain Node 18+. Set `ANTHROPIC_API_KEY` and add `--plan` for a
personalised Claude-generated funding plan.

## Status

Prototype. The funder dataset is seeded with verified entries (each carries a
`sourceUrl` and a `verified` date) but is not yet exhaustive — adding funders is the
easiest way to contribute. See `docs/COLAB-GUIDE.md` for how to take each piece into
The For Good Project's repo.

## Licence

Matching their conventions: code MIT, content CC BY 4.0.
