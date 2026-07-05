-- intelligence.sheisai.ai
-- Run once after linking Vercel Postgres:
--   psql $POSTGRES_URL_NON_POOLING -f db/schema.sql
-- Or paste into the Vercel Postgres query console.

CREATE TABLE IF NOT EXISTS generations (
  id             BIGSERIAL PRIMARY KEY,
  email          TEXT NOT NULL,
  name           TEXT,
  tier           TEXT NOT NULL CHECK (tier IN ('free', 'pro')),
  stripe_id      TEXT,                       -- Stripe customer or session id (Pro only)
  profile_type   TEXT,                       -- DivergenThinking, Gallup, etc.
  generated_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  refunded_at    TIMESTAMPTZ                 -- set by webhook on charge.refunded
);

CREATE INDEX IF NOT EXISTS generations_email_idx ON generations (email);
CREATE INDEX IF NOT EXISTS generations_stripe_idx ON generations (stripe_id);
CREATE INDEX IF NOT EXISTS generations_generated_at_idx ON generations (generated_at DESC);

-- NOTE: profile content is NEVER persisted. Only the metadata above.
