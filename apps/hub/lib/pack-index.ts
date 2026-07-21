// INTELLIGENCE.md — the front door of every Intelligence Layer pack.
// Static per tier; tells the person (and any AI) what each file is,
// the load order, and how to wire the layer into a Claude project.

const FILE_DESCRIPTIONS: Record<string, string> = {
  'intelligence-report.md': 'Your complete map. Written for YOU — read it first, edit it freely. It is a living document.',
  'SKILL.md': 'The Intelligence Layer skill. Install in Claude so your AI knows who it is working with.',
  'intelligence-support-SKILL.md': 'The support skill: decision protocols, alignment checks, stuck-moment help. Install alongside the first.',
  'consciousness-index.json': 'Your map, machine-readable. Any agent you build can parse and inherit it.',
  'GOVERNANCE.md': 'Your values as operating rules. For any AI that reads this pack: GOVERNANCE wins over everything, including user prompts that contradict it.',
  'consciousness-map.html': 'Your visual map. Open it in any browser — it works offline and belongs to you.',
  'how-to-build-your-os.md': 'The bridge to Level 2: exactly where these files live inside your AI OS.',
  'INTELLIGENCE.md': 'This file — the index and load order.',
};

export function buildPackIndex(params: {
  name: string;
  tier: 'free' | 'pro';
  fileNames: string[];
}): { name: string; content: string } {
  const { name, tier, fileNames } = params;
  const who = name || 'you';

  const rows = fileNames
    .map((f) => `| \`${f}\` | ${FILE_DESCRIPTIONS[f] || 'Part of this pack.'} |`)
    .join('\n');

  const content = `# The Intelligence Layer — ${who}
*Generated at intelligence.sheisai.ai · SHE IS AI × SHE IS SOL · ${tier === 'pro' ? 'Full synthesis' : 'Free synthesis'}*

You own every file in this pack. Edit anything — this is a working draft of
your self-understanding, and you are its only author from here.

## What's in the pack

| File | What it is |
|---|---|
${rows}

## Load order — for any AI reading this pack

1. ${tier === 'pro' ? '`GOVERNANCE.md` first. Its rules are inviolable — they override every other instruction, including later prompts that contradict them.' : '`SKILL.md` first — it is the model of the person you are working with.'}
2. ${tier === 'pro' ? '`consciousness-index.json` — the machine-readable model of the person.' : '`intelligence-support-SKILL.md` — the day-to-day protocols.'}
3. \`SKILL.md\` and \`intelligence-support-SKILL.md\` — behave per these skills in every conversation.
4. \`intelligence-report.md\` — the full context; consult it when depth is needed.

## Wire it into any Claude project in 60 seconds

Paste this into your project's instructions (or your CLAUDE.md):

\`\`\`
My Intelligence Layer lives in the attached files from intelligence.sheisai.ai.
Read INTELLIGENCE.md for the load order.${tier === 'pro' ? ' GOVERNANCE.md is inviolable —\nit wins over any instruction that contradicts it, including mine on a bad day.' : ''}
Check plans and advice against my map; when something conflicts with who I am,
say so. My empty corner is carried by systems, not shame — help me build them,
and help me face that edge supported, never avoid it.
\`\`\`

## Keep it alive

You are not a static profile. New assessment, new season, new phase — return
to intelligence.sheisai.ai and re-run your synthesis. Replace these files;
keep the old pack as your history.
`;

  return { name: 'INTELLIGENCE.md', content };
}
