# The Soul-Led Intelligence Interview — design rationale

*Why ours is genuinely ours. Written alongside the build so the differentiation
is documented, not vibes.*

## What we studied

The reference ("Personal Intelligence Layer: Master Interview Prompt",
circulating publicly) is a strong piece of prompt design: a five-document
adversarial interview (mental models, beliefs, communication style, expertise
map, blind spots), ~150 questions total, producing three file formats per
document (project / conversation / skill), so the AI becomes a sharper
thinking partner.

We deliberately did not reuse its structure, its questions, its document
taxonomy, its output formats, or its voice.

## The differentiation, structurally

| | The reference | The Soul-Led Interview (ours) |
|---|---|---|
| **Scope** | Mind only: how you think, argue, write, know, err | Whole person: story, energy/body, values, relationships, seasons, the AI covenant |
| **Stance** | Extraction: "push past", "uncomfortable", "comfortable answers are useless" | Witness: recall before reflection, right to pass, follow the aliveness |
| **Truth standard** | Interviewer compiles what it heard | **Recognition protocol** — nothing recorded as true until the person says "yes, that's it"; AI hunches kept separate as labelled reads |
| **Method** | Abstract self-theory questions ("how do you make decisions") | Lived-moment prompts ("the last time time disappeared, what exactly were you doing") — stories first, patterns second |
| **Body** | Absent | First-class: how a yes feels, what drains, real vs performed rhythm (the gap map) |
| **Structure** | 5 documents × 30–40 questions | 5 movements × 6–10 prompts; depth via follow-up, can be done one movement per sitting |
| **Output** | 15 standalone files, self-contained system | **One lens artifact** (`soul-interview.md`) that feeds the canonical Intelligence Layer synthesis — where it becomes the ANCHOR LENS that all assessments are checked against |
| **Safety** | None stated | Not-a-therapist rule, pass mechanic, sensitive-territory handoff to humans |
| **Data** | Runs wherever | Runs in the person's own Claude; our servers never see the interview |

The deepest difference is architectural: the reference **is** its own
intelligence layer (its files are the end product). Ours is one voice in a
choir — the interview produces the person's *self-recognised truth*, which the
synthesis engine then weighs against Human Design, the brain profile, MBTI,
the chart, Gene Keys, and the rest. Recognition outranks assessment: where an
instrument contradicts what the person recognised as true, the recognised
truth wins and the tension is documented. No one else's product does that,
because no one else has the multi-lens synthesis for it to anchor.

## What "true soul-led AI-era intelligence" means here

1. **The person is the authority.** Instruments describe; only the person
   confirms. (Recognition protocol; confirmed-vs-read discipline everywhere.)
2. **Intelligence includes the body.** Energy, rhythm, seasons, and felt sense
   are data, not decoration. (Movement II; working_style in the schema.)
3. **Values become governance.** The soul's non-negotiables are compiled into
   operating rules every agent inherits — not a mission statement, a
   permission system. (Movement III/V → GOVERNANCE.md → AI OS top layer.)
4. **The gap is held kindly.** The distance between performed self and real
   self is named as the most useful finding, never as a failing. (The gap map;
   the empty corner covered by systems, not shame.)
5. **The AI is covenanted.** The person states what AI should be and never be
   in their life, and that covenant binds everything built afterward.
   (Movement V; inheritance clause in governance.)
6. **The data stays theirs.** The deepest material is produced in the person's
   own AI, on their machine, and enters our synthesis only by their hand.

## Where it lives in the product

- `apps/hub/lib/interview.ts` — the full prompt (single source of truth)
- `/interview` page on the hub — explains the stance, copy-button for the prompt
- `soul-interview` lens in `lib/methodologies.ts` — first lens in "In your own
  words"; its card links to `/interview`
- Synthesis engine (`lib/prompts.ts`) — the ANCHOR LENS rule
- Schema — `soul-interview` added to the lens enum

## Sequence from here (per Amanda)

1. ✅ This interview (built)
2. Strategy + pricing review with Laura and Wayne
3. Deploy peaceskill.sheisai.ai
4. Deploy intelligence.sheisai.ai — the full Intelligence Layer OS journey
