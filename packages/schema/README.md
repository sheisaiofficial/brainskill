# SIA Profile Schema (v0.1)

The canonical, machine-readable model of a person that every SHE IS AI tool
reads from and writes to. This is the contract of the intelligence layer —
tools are replicable; the unified model of a person is the moat.

- `sia-profile.schema.json` — JSON Schema (2020-12) for the profile shape.
- The hub's Pro synthesis emits `consciousness-index.json` conforming to the
  `lenses` / `convergences` / `tensions` / `golden_thread` portion.
- Tools contribute by layer: `self` (hub, brainskill), `others` (peaceskill),
  `systems` (coo), `agentic` (agent builder, later).

## Rules

1. **No invented scores.** This is an index of findings traced to inputs the
   person actually provided — not a measurement instrument.
2. **Person-owned.** Any file conforming to this schema belongs to the person
   it describes: exportable, editable, deletable.
3. **Versioned.** Breaking changes bump `sia_version`; tools must state which
   version they emit.
