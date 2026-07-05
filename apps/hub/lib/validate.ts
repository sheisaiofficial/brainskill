export function isValidEmail(email: string): boolean {
  if (!email || email.length > 320) return false;
  // RFC-5322-ish but pragmatic. Good enough for a signup form.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB
