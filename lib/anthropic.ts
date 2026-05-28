import Anthropic from '@anthropic-ai/sdk';
import { FREE_SYSTEM_PROMPT, PRO_SYSTEM_PROMPT, buildUserMessage } from './prompts';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Models per brief #4 section 3, updated to latest 4.x family.
// Pro uses Opus 4.7 (deeper, longer context), free uses Sonnet 4.6 (fast + capable).
const MODEL_FREE = 'claude-sonnet-4-6';
const MODEL_PRO = 'claude-opus-4-7';

export type GenerateInput = {
  tier: 'free' | 'pro';
  name: string;
  profileType?: string;
  profileText?: string;        // pasted text OR extracted PDF text
  imageBase64?: string;        // PNG/JPG/HEIC — passed as Claude vision input
  imageMediaType?: 'image/png' | 'image/jpeg' | 'image/webp';
};

export type GenerateOutput = {
  raw: string;                 // full text returned by Claude
  files: { name: string; content: string }[];  // 1 file for free, 3 for pro
};

const PRO_FILE_NAMES = ['SKILL.md', 'brand-reference.md', 'how-to-use-with-coo.md'];

export async function generateSkill(input: GenerateInput): Promise<GenerateOutput> {
  const isPro = input.tier === 'pro';
  const system = isPro ? PRO_SYSTEM_PROMPT : FREE_SYSTEM_PROMPT;

  // Build the user message — text content + optional image.
  const userBlocks: Anthropic.Messages.ContentBlockParam[] = [];

  if (input.imageBase64 && input.imageMediaType) {
    userBlocks.push({
      type: 'image',
      source: {
        type: 'base64',
        media_type: input.imageMediaType,
        data: input.imageBase64,
      },
    });
  }

  userBlocks.push({
    type: 'text',
    text: buildUserMessage({
      name: input.name,
      profileType: input.profileType,
      profileText: input.profileText || '(profile provided as an image — read it from the attached image)',
    }),
  });

  const response = await client.messages.create({
    model: isPro ? MODEL_PRO : MODEL_FREE,
    max_tokens: isPro ? 8000 : 4000,
    system,
    messages: [{ role: 'user', content: userBlocks }],
  });

  const raw = response.content
    .filter((block): block is Anthropic.Messages.TextBlock => block.type === 'text')
    .map((block) => block.text)
    .join('');

  if (!raw.trim()) {
    throw new Error('Anthropic returned an empty response.');
  }

  if (!isPro) {
    return { raw, files: [{ name: 'SKILL.md', content: raw.trim() }] };
  }

  // Pro: split on "---FILE-BREAK---" markers.
  const parts = raw.split(/^---FILE-BREAK---\s*$/m).map((p) => p.trim()).filter(Boolean);

  if (parts.length < 3) {
    // Defensive: if the model didn't emit breaks, ship a single-file zip
    // with the whole thing so the user still gets a usable skill.
    return {
      raw,
      files: [{ name: 'SKILL.md', content: raw.trim() }],
    };
  }

  return {
    raw,
    files: parts.slice(0, 3).map((content, i) => ({
      name: PRO_FILE_NAMES[i],
      content,
    })),
  };
}
