export function isValidEmail(email: string): boolean {
  if (!email || email.length > 320) return false;
  // RFC-5322-ish but pragmatic. Good enough for a signup form.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export const PROFILE_TYPES = [
  'DivergenThinking card sort',
  'Gallup CliftonStrengths',
  'Working Genius',
  'HBDI',
  'MBTI',
  'Enneagram',
  'DISC',
  'Other / just my own writing',
] as const;

export type ProfileType = (typeof PROFILE_TYPES)[number];

export const MAX_TEXT_CHARS = 5000;
export const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB
