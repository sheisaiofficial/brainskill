# brainskill.sheisai.ai

A SHE IS AI tool, in partnership with DivergenThinking. Takes a person's brain
profile (text / PDF / image), runs it through Claude, returns a personalised
Claude skill they can install.

- **Free tier** → `SKILL.md` (Sonnet 4.5, single file, emailed to Flodesk free segment)
- **Pro tier ($47)** → `.zip` with `SKILL.md` + `brand-reference.md` + `how-to-use-with-coo.md`
  (Opus 4.7, three files, Flodesk pro segment)

Stack: Next.js 14 (App Router) · TypeScript · Tailwind · Vercel · Vercel Postgres · Stripe · Anthropic · Flodesk.

---

## Local dev (5 min)

```bash
# 1. Install
npm install

# 2. Set up env
cp .env.example .env.local
# Then paste in real keys — see "Env vars" below

# 3. Run
npm run dev
# → http://localhost:3000
```

The free flow works end-to-end with just `ANTHROPIC_API_KEY` set (Stripe / Flodesk / Postgres
are best-effort — failures are logged but don't block the user).

---

## What Amanda needs to paste into Vercel before going live

### Env vars (Project Settings → Environment Variables)

| Key | Where it comes from |
|---|---|
| `ANTHROPIC_API_KEY` | console.anthropic.com → API keys (still needed — not yet provided) |
| `STRIPE_SECRET_KEY` | dashboard.stripe.com → Developers → API keys → `sk_live_...` |
| `STRIPE_PUBLISHABLE_KEY` | same place → `pk_live_...` |
| `STRIPE_PRICE_ID_PRO` | dashboard.stripe.com → Products → Brain Skill Pro → pricing → `price_...` |
| `STRIPE_WEBHOOK_SECRET` | Set after deploy — see "Stripe webhook" below |
| `FLODESK_API_KEY_FREE` | ✅ supplied (`fd_key_01e664...`) |
| `FLODESK_API_KEY_PRO` | ✅ supplied (`fd_key_3f35da...`) |
| `FLODESK_SEGMENT_FREE` | Flodesk → Audience → Segments → "Brain Skill - Free" → copy ID from URL |
| `FLODESK_SEGMENT_PRO` | Same, for "Brain Skill - Pro" segment |
| `NEXT_PUBLIC_APP_URL` | `https://brainskill.sheisai.ai` |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | `brainskill.sheisai.ai` (optional — remove script if no Plausible) |
| `POSTGRES_*` | Auto-populated when you link Vercel Postgres (see "Database") |

> **About the two Flodesk keys**: the brief assumes one Flodesk account with two segments,
> but two API keys suggests two separate accounts. The code routes each tier to its own key,
> so either model works. Just make sure each key has the corresponding segment ID set.

### Database

1. In your Vercel project, **Storage → Create Database → Postgres**.
2. Once it's linked, all `POSTGRES_*` env vars auto-populate.
3. Run the schema once. Either:
   - Vercel dashboard → Postgres → Query → paste contents of `db/schema.sql`, or
   - locally: `psql $POSTGRES_URL_NON_POOLING -f db/schema.sql`

### Stripe webhook

1. Deploy the app to Vercel.
2. Stripe dashboard → Developers → Webhooks → **Add endpoint**.
3. Endpoint URL: `https://brainskill.sheisai.ai/api/stripe/webhook`
4. Events to send:
   - `checkout.session.completed`
   - `charge.refunded`
5. Save → copy the **Signing secret** (`whsec_...`) → paste into Vercel env vars as `STRIPE_WEBHOOK_SECRET`.
6. Redeploy.

### Domain

DNS is already set up: `brainskill.sheisai.ai` → CNAME `cname.vercel-dns.com`.

In Vercel → Project → Settings → Domains → Add `brainskill.sheisai.ai`. Vercel will detect
the CNAME and issue the certificate.

---

## Models

| Tier | Model | Max tokens |
|---|---|---|
| Free | `claude-sonnet-4-5` | 4000 |
| Pro | `claude-opus-4-7` | 8000 |

Change in `lib/anthropic.ts` if you want to pin or upgrade.

---

## Routes

| Route | What it does |
|---|---|
| `/` | Landing page (copy verbatim from brief #2) |
| `/generate` | Free flow form |
| `/generate?upgrade=1` | Free page with "go to Stripe Checkout" banner |
| `/generate/pro?session_id=...` | Pro form (requires paid Stripe session) |
| `/how-to-install` | Install guide (from brief #3) |
| `/privacy`, `/terms`, `/about` | Static pages |
| `POST /api/generate` | Calls Anthropic, returns skill + data-URL download |
| `POST /api/checkout` | Creates Stripe Checkout session |
| `GET /api/checkout?email=...` | Same, but as a redirect (used by upsell button) |
| `POST /api/stripe/webhook` | Logs payments, marks refunds |
| `POST /api/flodesk-subscribe` | Internal helper (also called from /api/generate) |

---

## Go-live checklist

- [ ] Paste all real env vars in Vercel (production)
- [ ] Link Vercel Postgres + run `db/schema.sql`
- [ ] Add `brainskill.sheisai.ai` as a domain in Vercel
- [ ] Set up Stripe webhook → copy secret → paste in env vars → redeploy
- [ ] Test the **free flow** end-to-end on the production URL (use your own email — should land in Flodesk free segment)
- [ ] Test the **Pro flow** in Stripe **test mode** first (toggle to test keys)
- [ ] Once happy, switch to live Stripe keys
- [ ] Buy one Pro skill yourself, refund it, confirm webhook marks it refunded in Postgres
- [ ] Ship 🚢 *(I won't put that in the copy. Promise.)*

---

## What's deliberately not built (per brief, Phase 2)

- User accounts / login
- Skill history / re-download past skills
- Multiple profiles per person
- DivergenThinking affiliate links
- Team / org bulk purchases
- Multi-language UI

Add when there's real usage.

---

## File map

```
app/
  layout.tsx           ← global shell, header/footer
  page.tsx             ← landing page
  globals.css          ← Tailwind + design tokens
  generate/
    page.tsx           ← free flow
    UpgradeRedirect.tsx
    pro/page.tsx       ← Pro flow (verifies Stripe session)
  how-to-install/, privacy/, terms/, about/   ← static
  api/
    generate/route.ts             ← Anthropic call + Flodesk + DB
    checkout/route.ts             ← Stripe Checkout session
    stripe/webhook/route.ts       ← refunds + session.completed
    flodesk-subscribe/route.ts    ← internal/manual subscribe

components/
  Header.tsx, Footer.tsx, Button.tsx, LogoLockup.tsx
  GenerateForm.tsx     ← the actual form, client-side

lib/
  anthropic.ts         ← model selection, Pro file split
  prompts.ts           ← system prompts (verbatim from brief)
  stripe.ts            ← checkout + session verify
  flodesk.ts           ← per-tier API key routing
  db.ts                ← @vercel/postgres helpers
  zip.ts               ← JSZip wrapper
  pdf.ts               ← pdf-parse wrapper
  validate.ts          ← email + size limits

db/
  schema.sql           ← run once after linking Postgres
```

---

Email anything weird to Amanda.
