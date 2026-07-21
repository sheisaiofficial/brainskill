import { sql } from '@vercel/postgres';

export type GenerationRow = {
  email: string;
  name?: string | null;
  tier: 'free' | 'pro';
  stripe_id?: string | null;
  profile_type?: string | null;
};

export async function logGeneration(row: GenerationRow): Promise<void> {
  try {
    await sql`
      INSERT INTO generations (email, name, tier, stripe_id, profile_type)
      VALUES (
        ${row.email},
        ${row.name ?? null},
        ${row.tier},
        ${row.stripe_id ?? null},
        ${row.profile_type ?? null}
      )
    `;
  } catch (err) {
    // Logging is best-effort — never block the user's download on a DB hiccup.
    console.error('[db] logGeneration failed:', err);
  }
}

// Best-effort daily counter for free-tier rate limiting. Returns 0 when the
// DB is unavailable so the limiter fails open, never blocking real users.
export async function countRecentGenerations(email: string): Promise<number> {
  try {
    const r = await sql`
      SELECT COUNT(*)::int AS n FROM generations
      WHERE email = ${email} AND generated_at > now() - interval '1 day'
    `;
    return r.rows[0]?.n ?? 0;
  } catch {
    return 0;
  }
}

export async function markRefunded(stripeId: string): Promise<void> {
  try {
    await sql`
      UPDATE generations
      SET refunded_at = now()
      WHERE stripe_id = ${stripeId}
    `;
  } catch (err) {
    console.error('[db] markRefunded failed:', err);
  }
}
