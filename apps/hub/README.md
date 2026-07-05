# intelligence.sheisai.ai

The SHE IS AI Intelligence Layer hub — Level 1 (Soul level) of the three-level
journey: **understand yourself → understand the machine → bring it into the world.**

A person steps through the Level 1 journey (`/journey`), bringing any subset of
lenses — brain profile, MBTI, DISC, Gallup, Enneagram, Human Design, tropical
astrology, numerology, and their own words (journey/current state,
goals/drivers). Claude synthesises everything into their **Intelligence Layer**:

- **Free** (Sonnet) → `.zip` with `intelligence-report.md` + `SKILL.md` +
  `intelligence-support-SKILL.md`
- **Pro ($97)** (Opus) → the same at full depth, plus
  `consciousness-index.json` (conforms to `packages/schema/sia-profile.schema.json`)
  and `GOVERNANCE.md`

Cloned from the brainskill architecture: Next.js 14 · TypeScript · Tailwind ·
Vercel · Vercel Postgres · Stripe · Anthropic · Flodesk.

## Key files

| File | What it is |
|---|---|
| `lib/methodologies.ts` | The Level 1 lens registry — add/edit methodologies here |
| `lib/prompts.ts` | The synthesis engine prompts (free = 3 files, pro = 5) |
| `components/JourneyForm.tsx` | The step-through journey wizard |
| `app/journey/` | Free flow + Stripe-verified pro flow |

## Local dev

```bash
cd apps/hub
npm install
cp .env.example .env.local   # ANTHROPIC_API_KEY is enough for the free flow
npm run dev
```

## Vercel setup (new project)

1. Vercel → Add New Project → import this repo.
2. **Root Directory: `apps/hub`** (critical — multi-app repo).
3. Env vars per `.env.example`, with `NEXT_PUBLIC_APP_URL=https://intelligence.sheisai.ai`
   and a new Stripe product "Intelligence Layer Pro" ($97) → `STRIPE_PRICE_ID_PRO`.
4. Link Postgres, run `db/schema.sql` once.
5. Stripe webhook → `https://intelligence.sheisai.ai/api/stripe/webhook`.
6. Domains → `intelligence.sheisai.ai`.

## Notes

- The $97 Pro price is a placeholder decision — change the copy in
  `app/page.tsx`, `components/JourneyForm.tsx`, and `app/journey/UpgradeRedirect.tsx`
  plus the Stripe price if it changes.
- The synthesis prompt should be calibrated against Laura's full intelligence
  report (the gold-standard example) — see `docs/INTELLIGENCE-LAYER-PLAN.md`.
