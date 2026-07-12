// The Level 1 (Soul level) methodology registry.
// Each entry is one lens a person can bring to the intelligence layer.
// The journey works with ANY subset — more lenses, richer synthesis.

export type MethodologyCategory = 'mind' | 'energetic' | 'own-words';

export type Methodology = {
  id: string;
  name: string;
  category: MethodologyCategory;
  reveals: string;          // what this lens shows, in plain English
  getIt?: { label: string; url: string };  // where to take it if they haven't
  placeholder: string;      // textarea placeholder
};

export const CATEGORIES: Record<MethodologyCategory, { title: string; blurb: string }> = {
  mind: {
    title: 'Your mind & wiring',
    blurb: 'How you think, decide, and work best. Bring any assessments you have — each one adds detail.',
  },
  energetic: {
    title: 'Your energetic blueprint',
    blurb: 'The reflective lenses — chosen by you, read on your terms. Bring whichever ones speak to you.',
  },
  'own-words': {
    title: 'In your own words',
    blurb: 'The part no assessment can give us. Your journey, where you are now, and where you are going.',
  },
};

export const METHODOLOGIES: Methodology[] = [
  // ── Mind & wiring ──────────────────────────────────────────────
  {
    id: 'brain-profile',
    name: 'Brain profile',
    category: 'mind',
    reveals: 'How your brain works best — thinking style, strengths, triggers, motivators.',
    getIt: { label: 'Generate yours at brainskill.sheisai.ai', url: 'https://brainskill.sheisai.ai' },
    placeholder: 'Paste your Brain Skill SKILL.md, your DivergenThinking card-sort result, or any brain/thinking-style profile…',
  },
  {
    id: 'mbti',
    name: 'Myers-Briggs (MBTI)',
    category: 'mind',
    reveals: 'Your type across the four preference pairs — how you take in information and decide.',
    getIt: { label: 'Take it free at 16personalities.com', url: 'https://www.16personalities.com' },
    placeholder: 'Paste your MBTI / 16personalities result — your type and any report text…',
  },
  {
    id: 'disc',
    name: 'DISC profile',
    category: 'mind',
    reveals: 'Your behavioural style — how you act, communicate, and respond under pressure.',
    getIt: { label: 'Find a DISC assessment', url: 'https://www.discprofile.com' },
    placeholder: 'Paste your DISC result — your style blend and any report text…',
  },
  {
    id: 'gallup',
    name: 'Gallup CliftonStrengths',
    category: 'mind',
    reveals: 'Your top talent themes — what you naturally do best.',
    getIt: { label: 'Take it at gallup.com', url: 'https://www.gallup.com/cliftonstrengths' },
    placeholder: 'Paste your top 5 (or 34) CliftonStrengths themes and any report text…',
  },
  {
    id: 'enneagram',
    name: 'Enneagram',
    category: 'mind',
    reveals: 'Your core type, wing, and growth/stress lines — what drives you underneath.',
    getIt: { label: 'Take a free test', url: 'https://www.truity.com/test/enneagram-personality-test' },
    placeholder: 'Paste your Enneagram type, wing, and any report text…',
  },
  // ── Energetic blueprint ────────────────────────────────────────
  {
    id: 'human-design',
    name: 'Human Design',
    category: 'energetic',
    reveals: 'Your type, strategy, authority, profile, and centres — how your energy is designed to move.',
    getIt: { label: 'Get your free chart', url: 'https://www.jovianarchive.com/get_your_chart' },
    placeholder: 'Paste your Human Design details — type, strategy, authority, profile, defined/open centres, gates if you have them…',
  },
  {
    id: 'astrology',
    name: 'Tropical astrology',
    category: 'energetic',
    reveals: 'Your natal chart — sun, moon, rising, and placements as a reflective map.',
    getIt: { label: 'Free natal chart at astro.com', url: 'https://www.astro.com' },
    placeholder: 'Paste your natal chart summary — sun, moon, rising, key placements, or a full chart reading…',
  },
  {
    id: 'gene-keys',
    name: 'Gene Keys',
    category: 'energetic',
    reveals: 'Your golden path — life\'s work, evolution, radiance, purpose, and the gift/shadow spectrum of each key.',
    getIt: { label: 'Get your free profile at genekeys.com', url: 'https://genekeys.com/free-profile/' },
    placeholder: 'Paste your Gene Keys profile — Life\'s Work, Evolution, Radiance, Purpose, Pearl sequence, and any notes on your keys…',
  },
  {
    id: 'other-systems',
    name: 'Other systems',
    category: 'energetic',
    reveals: 'Chinese astrology, Ayurveda, Mayan, or any other system that speaks to you.',
    placeholder: 'Paste anything else — Chinese astrology (year/hour animals), Ayurvedic dosha, Mayan sign, or any other reading you work with…',
  },
  {
    id: 'numerology',
    name: 'Numerology & life path',
    category: 'energetic',
    reveals: 'Your life path number and core numbers — the cyclical arc of your journey.',
    getIt: { label: 'Calculate your life path', url: 'https://www.tokenrock.com/numerology/life_path/' },
    placeholder: 'Paste your life path number and any numerology reading — or just your full birth name and date and we\'ll note the basics…',
  },
  // ── In your own words ──────────────────────────────────────────
  {
    id: 'soul-interview',
    name: 'The Soul-Led Interview',
    category: 'own-words',
    reveals: 'The anchor lens — your own recognised truth, from the deep interview you run with your Claude.',
    getIt: { label: 'Run the Soul-Led Intelligence Interview', url: '/interview' },
    placeholder: 'Paste your soul-interview.md — the file Claude handed you at the end of the Soul-Led Intelligence Interview…',
  },
  {
    id: 'journey',
    name: 'Your journey & current state',
    category: 'own-words',
    reveals: 'Where you\'ve been, your baseline, and where you are right now.',
    placeholder: 'Write freely: the chapters of your journey so far, what your baseline looks like, what season you\'re in right now, what\'s shifting…',
  },
  {
    id: 'goals-drivers',
    name: 'Goals, drivers & vision',
    category: 'own-words',
    reveals: 'What you\'re building, what drives you, and what the next phase looks like.',
    placeholder: 'What are you working toward? What actually drives you? What does the next phase of your life and work look like if it goes right?…',
  },
];

export function methodologyById(id: string): Methodology | undefined {
  return METHODOLOGIES.find((m) => m.id === id);
}

// How many lenses we need before synthesis is worth running.
export const MIN_INPUTS = 2;
export const MAX_INPUT_CHARS = 8000;   // per lens
export const MAX_TOTAL_CHARS = 45000;  // across all lenses
