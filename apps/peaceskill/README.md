# peaceskill.sheisai.ai

A SHE IS AI tool. Takes what a person shares about their life, routines, and
weeks, runs it through Claude, and returns a personalised **Peace Skill** —
a Claude skill that supports their mindfulness, self-care routines, weekly
rhythm, and work-life balance.

- **Free tier** → `SKILL.md` (Sonnet, single file, emailed via Flodesk)
- **Pro tier ($47)** → `.zip` with `SKILL.md` + `wellbeing-reference.md` +
  `how-to-use-with-brain-skill-and-coo.md` (Opus, three files)

Same architecture as brainskill.sheisai.ai (this app was cloned from it):
Next.js 14 (App Router) · TypeScript · Tailwind · Vercel · Vercel Postgres ·
Stripe · Anthropic · Flodesk.

## Local dev

```bash
cd apps/peaceskill
npm install
cp .env.example .env.local   # paste in real keys
npm run dev                  # → http://localhost:3000
```

The free flow works end-to-end with just `ANTHROPIC_API_KEY` set.

## Vercel setup (new project)

1. Vercel → Add New Project → import this repo.
2. **Root Directory: `apps/peaceskill`** (critical — this is a multi-app repo).
3. Add env vars (same names as brainskill — see `.env.example`), with:
   - `NEXT_PUBLIC_APP_URL=https://peaceskill.sheisai.ai`
   - A **new** Stripe product/price for Peace Skill Pro → `STRIPE_PRICE_ID_PRO`
   - New Flodesk segments ("Peace Skill - Free" / "Peace Skill - Pro")
4. Storage → link a Postgres DB → run `db/schema.sql` once.
5. Stripe webhook endpoint: `https://peaceskill.sheisai.ai/api/stripe/webhook`
   (events: `checkout.session.completed`, `charge.refunded`) → paste signing
   secret as `STRIPE_WEBHOOK_SECRET`.
6. Domains → add `peaceskill.sheisai.ai` (CNAME → `cname.vercel-dns.com`).

## What's different from brainskill

| File | Change |
|---|---|
| `lib/prompts.ts` | Peace Skill prompts (mindfulness / self-care / weekly rhythm / balance) |
| `lib/validate.ts` | Input-source types (own writing, typical week, Brain Skill file, journal) |
| `lib/anthropic.ts` | Pro file names |
| `app/page.tsx`, `app/about/` | Peace Skill landing + about copy |
| everything else | Identical architecture — fix bugs in both places until shared packages are extracted |
