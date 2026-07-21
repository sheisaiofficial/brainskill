export function isValidEmail(email: string): boolean {
  if (!email || email.length > 320) return false;
  // RFC-5322-ish but pragmatic. Good enough for a signup form.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export const PROFILE_TYPES = [
  'My own writing about my life & week',
  'A typical-week description or calendar',
  'My Brain Skill file (SKILL.md)',
  'Journal or reflection excerpts',
  'A wellbeing or lifestyle assessment',
  'Other',
] as const;

export type ProfileType = (typeof PROFILE_TYPES)[number];

export const MAX_TEXT_CHARS = 5000;
export const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB
