import Anthropic from '@anthropic-ai/sdk';
import { FREE_SYSTEM_PROMPT, PRO_SYSTEM_PROMPT, buildUserMessage, LensInput } from './prompts';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const MODEL_FREE = 'claude-sonnet-4-6';
const MODEL_PRO = 'claude-opus-4-7';

export type SynthesisInput = {
  tier: 'free' | 'pro';
  name: string;
  birthDate?: string;
  birthTime?: string;
  birthPlace?: string;
  lenses: LensInput[];
};

export type SynthesisOutput = {
  raw: string;
  files: { name: string; content: string }[];
};

const FREE_FILE_NAMES = ['intelligence-report.md', 'SKILL.md', 'intelligence-support-SKILL.md'];
const PRO_FILE_NAMES = [...FREE_FILE_NAMES, 'consciousness-index.json', 'GOVERNANCE.md'];

export async function generateSynthesis(input: SynthesisInput): Promise<SynthesisOutput> {
  const isPro = input.tier === 'pro';

  const response = await client.messages.create({
    model: isPro ? MODEL_PRO : MODEL_FREE,
    max_tokens: isPro ? 16000 : 8000,
    system: isPro ? PRO_SYSTEM_PROMPT : FREE_SYSTEM_PROMPT,
    messages: [
      {
        role: 'user',
        content: buildUserMessage({
          name: input.name,
          birthDate: input.birthDate,
          birthTime: input.birthTime,
          birthPlace: input.birthPlace,
          lenses: input.lenses,
        }),
      },
    ],
  });

  const raw = response.content
    .filter((block): block is { type: 'text'; text: string } => block.type === 'text')
    .map((block) => block.text)
    .join('');

  if (!raw.trim()) {
    throw new Error('Anthropic returned an empty response.');
  }

  const expected = isPro ? PRO_FILE_NAMES : FREE_FILE_NAMES;
  const parts = raw.split(/^---FILE-BREAK---\s*$/m).map((p) => p.trim()).filter(Boolean);

  if (parts.length < expected.length) {
    // Defensive: ship what we got as the report so the user still gets value.
    return { raw, files: [{ name: 'intelligence-report.md', content: raw.trim() }] };
  }

  return {
    raw,
    files: parts.slice(0, expected.length).map((content, i) => ({
      name: expected[i],
      content,
    })),
  };
}
