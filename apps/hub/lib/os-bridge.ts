// Static file appended to every Pro pack: the bridge from Level 1 (Soul —
// this synthesis) into Level 2 (Mind — building your AI OS).
// Kept in code, not model-generated, so every customer gets the same
// correct instructions.

export const OS_BRIDGE_FILENAME = 'how-to-build-your-os.md';

export const OS_BRIDGE_MD = `# From Intelligence Layer to AI OS
*Level 1 → Level 2 · SHE IS AI × SHE IS SOL*

You've finished Level 1: you have your Intelligence Layer — the files in this
zip. Level 2 is where you build your **AI Operating System**: the folder
structure, context files, agents, and skills that run your work. SHE IS AI
teaches this build (the full "Build Your Own AI OS" prompt comes with the
program); this file tells you — and your Claude — exactly how your
Intelligence Layer plugs in, so everything you build inherits who you are.

## Where these files live in your AI OS

| File in this zip | Where it goes | Why |
|---|---|---|
| \`intelligence-report.md\` | \`AI-HQ/memory/intelligence-layer/\` | Your map — reference memory at the org level |
| \`consciousness-index.json\` | \`AI-HQ/memory/intelligence-layer/\` | The machine-readable version agents can parse |
| \`SKILL.md\` | \`AI-HQ/skills/<your-name>-intelligence-layer/SKILL.md\` | An authored skill — your AI's model of you |
| \`intelligence-support-SKILL.md\` | \`AI-HQ/skills/<your-name>-intelligence-support/SKILL.md\` | An authored skill — your day-to-day protocols |
| \`GOVERNANCE.md\` | Merge into \`AI-HQ/governance.md\` | Your values become the Auto / Ask / Never rules |

Then add one line to your \`AI-HQ/CLAUDE.md\`:

> My Intelligence Layer lives in \`memory/intelligence-layer/\` — read it to
> know who you're working with. My governance rules in \`governance.md\` are
> inviolable and every agent inherits them.

## The instruction to give Claude during your OS build

When you run the AI OS build prompt, paste this in when Claude asks about
existing files (or at Phase 0):

> I have my Intelligence Layer from intelligence.sheisai.ai — 5 files:
> intelligence-report.md, SKILL.md, intelligence-support-SKILL.md,
> consciousness-index.json, GOVERNANCE.md. Install them:
> 1. Create \`AI-HQ/memory/intelligence-layer/\` and file the report + index there.
> 2. Install both skills under \`AI-HQ/skills/\` in their own folders (the
>    loader looks for the exact filename \`SKILL.md\`, so rename
>    intelligence-support-SKILL.md → SKILL.md inside its folder).
> 3. Merge GOVERNANCE.md into \`AI-HQ/governance.md\` — my values are the
>    top layer of the Auto / Ask / Never framework; nothing below may
>    override them.
> 4. Reference the layer from \`AI-HQ/CLAUDE.md\` (link, don't duplicate).
> 5. Every agent CLAUDE.md you write from now on inherits governance.md and
>    may consult consciousness-index.json to fit its behaviour to me —
>    especially my empty corner: agents carry what I don't natively finish.

## Why this order matters

Your OS without a soul is a filing cabinet. Built this way, every agent knows
your drivers, plans around your working style, defends your governance, and
systematically covers your empty corner — the structure carries you.

*Level 3 (Body) is where the OS meets the world: your business and your AI
systems executing for real. One level at a time.*
`;
