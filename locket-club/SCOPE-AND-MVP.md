# Locket Club — Scope & MVP

*Working title: **Locket Club** (locketclub.com) — "your people, where you are."*
*A community app for people living abroad. Pay → join → get auto-routed into a local cohort →
get AI-matched to the right humans → DM, connect, and meet up.*

Prepared for Amanda · v1 · 2026-06-06

---

## 0. TL;DR (read this if you read nothing else)

**The problem she's solving:** Big "living abroad" Facebook/WhatsApp groups have 6,000+ people
and zero structure. You can't find the three people in your city, your life stage, with kids
your kids' age, who you'd actually become friends with. The signal is buried in the noise.

**The product:** A paid mobile app that does the matching *for* you.
1. You pay and join.
2. You're **automatically routed into a cohort** for your local area + life stage (age band,
   parent/not, kids' ages, interests).
3. An **AI matching layer** surfaces the handful of people you should actually meet — and
   **prompts both of you** to connect ("You and Sara are both in Lisbon, both have a 3-year-old,
   both moved from the US in the last year — say hi 👋").
4. You can **DM** each other and there's a **forum** scoped to your cohort/region for events,
   asks, and updates.

**Think:** Skool/Heartbeat (paid cohort communities) **+** Cherub/Metal-style AI matching,
but tuned for *expats / people living abroad* organized by *place + life stage*.

**Recommendation:** Build the MVP as a **cross-platform mobile app (Expo / React Native)** with a
managed backend, ship to **iOS + Android (+ a thin web fallback)** in ~**12–16 weeks** with a
small team. Start with **one launch region** (e.g. Lisbon or Dubai expats) to prove the matching
loop before scaling to many cohorts. Don't build a Facebook clone — build the *matching loop*.

---

## 1. Vision & the core insight

The defensible idea here is **not** "another community platform." It's the **matching loop**:

> Remove the work of figuring out *who* to connect with in a giant group, and instead
> deliver each member a small, high-relevance set of people + a reason and a nudge to reach out —
> scoped to their actual city and life stage.

Everything else (forum, DMs, events) is table stakes that exists to *support* that loop. The AI
matching + auto-cohorting is the wedge and the moat. We design the whole product around making
that loop work and feel magical.

**One-line positioning:** *"Skool for expats, with an AI that introduces you to the right people
in your city."*

---

## 2. Who it's for (personas)

| Persona | Situation | What they want | "Aha" moment |
|---|---|---|---|
| **New-arrival parent** | Just moved to Lisbon with a 3-yr-old, knows no one | Other parents nearby, same-age kids, playdates | Gets matched to 3 local parents in week 1 |
| **Settled expat connector** | Been abroad 4 yrs, well-networked | To help newcomers, host meetups, stay central | Becomes a cohort host / gets intro requests |
| **Solo mover (no kids)** | 28, moved for work, wants a social circle | Friends in same age band + interests | Matched into a "new in town, 25–35" sub-cohort |
| **Trailing partner** | Followed a spouse abroad, isolated | Community, purpose, local know-how | Forum answers + 1:1 matches reduce isolation |

**Primary MVP persona: the new-arrival parent.** Highest pain, clearest matching signal (city +
kids' ages + arrival date), most willing to pay. We optimize the first launch cohort around them.

---

## 3. Competitive landscape & differentiation

| Product | What it is | What we take | What we do differently |
|---|---|---|---|
| **Skool** | Paid courses + community, gamified | Paid-to-join, simple feed, cohorts | Place-based auto-cohorting + AI 1:1 matching |
| **Heartbeat** | Cohort community OS (events, channels, payments) | Events, threads, member payments | We're vertical (expats) + matching-first, mobile-first |
| **Cherub** | AI matching for founders/angels | The "AI introduces you to the right person" UX | Tuned for life-stage + locality, not deals |
| **Metal / AI investor matching** | Embeddings-based people matching | Vector matching + "why you match" rationale | Community wrapper + recurring local cohorts |
| **Facebook/WhatsApp expat groups** | The status quo we're replacing | The audience already lives here | Structure, privacy, matching, no 6k-person noise |
| **Bumble BFF / Meetup** | Friend-finding / events | Discovery UX | Curated, paid, vetted cohorts vs open swiping |

**Our wedge:** *vertical (living abroad) + place-based cohorts + AI member-matching with a reason &
a nudge.* Horizontal community tools don't auto-introduce you to the right people; friend-finding
apps aren't community/cohort-based or vetted. We're the intersection.

---

## 4. Scope — features

Legend: 🟢 MVP (v1, must-have) · 🟡 Fast-follow (v1.1–1.2) · 🔵 Later / Phase 2

### 4.1 Onboarding & profile
- 🟢 Sign up (Apple / Google / email), accept guidelines
- 🟢 **Structured profile**: current city + neighborhood, home country, arrival date, age band,
  household (partner? kids? kids' ages), languages, work, **interests/tags**, what they're looking
  for (friends / playdates / professional / activity partners)
- 🟢 **Voice intake** ("voice into AI matching"): record a 30–60s voice note answering a couple of
  prompts ("What brought you here? What are you hoping to find?"). Transcribed + summarized by AI
  into structured matching signals + a profile blurb. *Typed fallback always available.*
- 🟡 Photo + short bio, verification badge (selfie/ID light-touch for trust & safety)
- 🔵 Calendar of availability, "open to host" toggle

### 4.2 Cohort auto-routing (the "club" mechanic)
- 🟢 On join, member is **automatically placed** into a cohort by rules:
  `region/city` → then segmented by `life stage` (has-kids vs not, kids' age band, member age band).
  e.g. *"Lisbon · Parents · kids 0–5"*, *"Dubai · 25–35 · no kids"*.
- 🟢 Cohort home: member list, forum, events, "people to meet" matches
- 🟡 Sub-cohorts / neighborhoods within a city as density grows
- 🟡 Cohort hosts/ambassadors (community-led), join-request approvals
- 🔵 Member can request a transfer / belong to 2 cohorts (e.g. moved cities)

### 4.3 AI member matching (the wedge) 🟢
- 🟢 Nightly/however-frequent batch + on-join **matching engine** that, for each member, surfaces
  the top N people in their cohort to meet, each with a **plain-language "why you match"** rationale.
- 🟢 **AI connection prompts / nudges**: push + in-app prompts to *both* sides
  ("You + Sara both have a 3-yr-old and moved from the US this year — want an intro?").
- 🟢 Lightweight **double opt-in intro**: tap "Connect" → if both interested, opens a DM with an
  AI-suggested icebreaker. (Reduces cold-DM awkwardness; raises reply rates.)
- 🟡 Feedback loop: "was this a good match?" 👍/👎 to tune ranking
- 🟡 Weekly "3 people to meet this week" digest
- 🔵 Group/triad matching ("4 parents near you for a coffee"), event-based matching

### 4.4 Messaging 🟢
- 🟢 **1:1 DMs** (text, images), real-time, push notifications
- 🟢 AI-suggested icebreakers / reply prompts
- 🟡 Group DMs, read receipts, typing indicators
- 🔵 Voice notes in chat, translation (expat-relevant)

### 4.5 Forum / feed 🟢
- 🟢 **Cohort-scoped forum**: post, comment, react; categories (Ask, Recommendations, Meetups,
  For Sale, Updates). This is where "deliver the local region their updates" lives.
- 🟡 Regional (city-wide, across cohorts) channel for broad asks
- 🟡 Pinned resources / wiki per city (visa, schools, doctors)
- 🔵 Rich event RSVPs, polls

### 4.6 Events & meetups
- 🟡 Create/RSVP local events within a cohort/region; calendar; reminders
- 🔵 Ticketed events, recurring meetups, host tools

### 4.7 Payments / membership 🟢
- 🟢 **Paid membership to join** (subscription — monthly + annual). RevenueCat + Stripe (web) /
  Apple & Google IAP (mobile). Free trial or free read-only preview to reduce friction.
- 🟡 Founding-member / launch pricing, referral credit
- 🔵 Regional pricing (PPP), gifting, host revenue share

### 4.8 Trust, safety & moderation 🟢 (non-negotiable for a community of strangers meeting IRL)
- 🟢 Report/block, guidelines, AI + human moderation queue, profile verification (light)
- 🟢 Privacy controls (what's shown, who can DM)
- 🟡 Safety center, meet-in-public guidance, panic/share-location for meetups
- 🔵 Background-check integration partner (optional, region-dependent)

### 4.9 Admin / operator console 🟢
- 🟢 Web admin for Amanda's team: see members, cohorts, override routing, moderate, refund,
  view matching health, send announcements.

---

## 5. The matching engine (how it actually works)

This is the heart, so here's a concrete, buildable approach. Start simple, get smarter over time.

**Stage 0 — Eligibility/cohorting (deterministic rules).**
Filter to same cohort (city + life-stage band). Cheap, transparent, no ML needed.

**Stage 1 — Candidate scoring (rules + similarity).**
For each member, score every cohort-mate on weighted signals:
- Kids' age proximity, member age proximity, arrival-date proximity (newcomers ↔ newcomers and
  newcomers ↔ settled hosts), shared interests/tags, shared languages, complementary "looking for",
  neighborhood proximity, mutual availability.
- This alone produces good matches and is fully explainable.

**Stage 2 — Semantic similarity (embeddings).**
Embed each member's profile blurb + voice-intake summary + interests into a vector
(e.g. via an embeddings model). Use vector similarity to catch "these two just *vibe*" signal that
rules miss. Store vectors in **pgvector** (Postgres extension) — no separate vector DB needed at our
scale.

**Stage 3 — Rationale + nudge generation (LLM).**
For the top candidates, an LLM (Claude) writes the **human-readable "why you match"** and the
**icebreaker**, grounded *only* in the structured profile facts we pass it (no hallucinated facts).
This is where the magic/warmth comes from and it's cheap (only run for top N per member).

**Stage 4 — Feedback loop.**
👍/👎 on matches + whether a DM actually started + whether they met → tune the Stage 1 weights over
time. Don't over-engineer ML up front; weighted rules + embeddings + good copy beats a fancy model
with no data. Revisit a learned ranker once there's usage data.

> **Key design principle:** every match must come with *a reason and a next action*. "Here are 3
> people" is a directory. "Here are 3 people, here's why, tap to say hi" is the product.

**Cadence:** run matching on join, on profile change, and on a schedule (e.g. weekly "people to
meet" drop) to create a recurring reason to open the app.

---

## 6. Data model (core entities)

```
User            id, auth, name, photo, email, verification_status, created_at
Profile         user_id, city, neighborhood, home_country, arrival_date, age_band,
                household_type, kids_ages[], languages[], work, interests[],
                looking_for[], bio, voice_summary, embedding (vector), privacy_settings
Cohort          id, region/city, segment (life-stage key), name, member_count, host_user_id
Membership      user_id, cohort_id, status, role (member/host), joined_at
Subscription    user_id, plan, status, provider (stripe/apple/google), renews_at
Match           id, user_a, user_b, cohort_id, score, rationale, status
                (suggested/a_accepted/connected/dismissed), created_at
Thread/DM       id, participant_ids[], created_at  +  Message(thread_id, sender, body, media)
Connection      user_a, user_b, state (pending/connected/blocked)
Post            id, cohort_id, author, category, body, media           (forum)
Comment         id, post_id, author, body  +  Reaction
Event           id, cohort_id, host, title, when, location, rsvps[]    (fast-follow)
Report          reporter, target_type, target_id, reason, status       (moderation)
```

---

## 7. Tech stack & architecture — "she wants an app, not a website"

She's explicit: **native mobile app**, on people's phones, with push notifications. Here's the
pragmatic stack to ship fast without a huge team.

### 7.1 Recommended stack
- **Mobile app: Expo + React Native (TypeScript).** One codebase → iOS + App Store **and** Android
  + Play Store. Best speed-to-market for a small team; real native app (push, camera, mic for voice
  intake) — not a wrapped website. OTA updates via EAS.
- **Backend: managed BaaS to start — Supabase** (Postgres + Auth + Realtime + Storage + Edge
  Functions) **or** Firebase. Recommend **Supabase**: it's Postgres, so we get **pgvector** for
  matching for free, plus row-level security, realtime for DMs, and we own the data. Avoids
  building a lot of plumbing.
- **Realtime DMs:** Supabase Realtime (or Stream Chat if we want chat as a turnkey SDK — faster but
  $$). MVP recommendation: Supabase Realtime to control cost; revisit Stream if chat gets heavy.
- **Push:** Expo Push Notifications (wraps APNs/FCM).
- **AI layer:** Claude (Anthropic) for voice-intake summarization, match rationale, icebreakers;
  an embeddings model for vectors; Whisper-class speech-to-text for voice notes. Runs in backend
  functions, *never* with keys in the app.
- **Payments:** **RevenueCat** in front of Apple IAP / Google Play Billing (required for in-app
  subscriptions) + Stripe for any web checkout. RevenueCat normalizes entitlements across stores.
- **Admin console:** a small **Next.js** web app (we already have a Next.js footprint in this org)
  hitting the same Supabase DB — for Amanda's team to moderate/route/announce.
- **Infra/analytics:** Vercel (admin web) · Supabase (backend) · EAS (mobile builds) · PostHog or
  Amplitude (product analytics) · Sentry (crash/error).

### 7.2 Why this stack
- Fastest path to a *real* app on both stores with a 1–3 person eng team.
- Postgres + pgvector means the matching engine and the app share one source of truth.
- Managed services minimize DevOps so budget goes into the matching UX, not plumbing.
- All AI keys stay server-side (Edge Functions); the app never holds secrets.

### 7.3 Alternatives considered (and when to pick them)
- **Flutter** instead of RN: great too; pick if the team already knows Dart. RN/Expo wins here for
  ecosystem + our existing TS/React skills.
- **Fully native (Swift + Kotlin)**: best polish, ~2x the build cost/time. Not worth it for MVP.
- **PWA / wrapped website**: cheapest, but she explicitly wants an app and we'd lose push/mic/app-
  store presence and "feel." Rejected for v1.
- **Custom Node/Postgres backend** instead of Supabase: more control, more to build/maintain.
  Recommend starting on Supabase and extracting services later only if we hit its limits.

### 7.4 High-level architecture
```
[Expo App: iOS / Android]
   │  auth, realtime, REST/RPC, push
   ▼
[Supabase]  Postgres(+pgvector) · Auth · Realtime · Storage · Edge Functions
   │                                   │
   │ (Edge Functions call out)         └── Realtime → DMs, live forum
   ▼
[AI services]  Claude (summaries/rationale/icebreakers) · Embeddings · Speech-to-text
[RevenueCat] ↔ Apple IAP / Google Play / Stripe        [Expo Push] → APNs/FCM
[Next.js Admin] ──────────► same Supabase (service role)
```

---

## 8. MVP — the cut for v1

**Goal of v1:** prove the *matching loop* works in **one launch region**, end to end, with paying
members. If a new parent joins on Monday and has a real coffee with a matched parent by the
following weekend, we've validated the thing. Everything else can wait.

**In v1 (ship):**
1. Auth + structured profile + **voice intake → AI summary**
2. **Auto-cohorting** into one launch region's cohorts (rules-based)
3. **Matching engine** (rules + embeddings + Claude rationale) → "people to meet" with reasons
4. **AI connection nudges** + double opt-in intro → opens DM with icebreaker
5. **1:1 DMs** (realtime + push)
6. **Cohort forum** (post/comment/react, core categories)
7. **Paid membership** (subscription via RevenueCat/IAP) + free trial
8. **Trust & safety basics** (report/block, guidelines, light verification, mod queue)
9. **Admin console** (members, cohorts, moderation, announcements, routing override)
10. Push notifications + basic analytics + crash reporting

**Explicitly NOT in v1** (fast-follow / Phase 2):
- Events/RSVP system, group chats, sub-cohorts/neighborhoods, multi-cohort membership,
  learned ML ranker, translation, ticketed events, host revenue share, background checks,
  regional/PPP pricing, web consumer app (admin web only in v1).

**Single launch region** (pick 1: e.g. Lisbon, Dubai, Mexico City, Bali). Seed it before opening —
matching needs density. **Don't open 50 cities to 5 people each.**

---

## 9. Build plan & timeline (~12–16 weeks to a public v1)

Assumes a small team (see §10). Overlap where possible.

| Phase | Weeks | What ships |
|---|---|---|
| **0. Foundations** | 1–2 | Product spec sign-off, designs for core flows, Supabase schema + pgvector, Expo app skeleton, auth, CI/CD (EAS), analytics/Sentry |
| **1. Profile + onboarding** | 2–4 | Structured profile, voice intake → speech-to-text → Claude summary, image upload, guidelines/consent |
| **2. Cohorting + forum** | 4–6 | Auto-routing rules, cohort home, forum (posts/comments/reactions), admin console v1 |
| **3. Matching + nudges** | 6–9 | Scoring + embeddings + Claude rationale, "people to meet," AI nudges, double opt-in intro, push |
| **4. DMs** | 8–10 | Realtime 1:1 chat, icebreakers, notifications, blocking |
| **5. Payments + T&S** | 10–12 | RevenueCat subscriptions + trial, report/moderation, verification, privacy settings |
| **6. Closed beta** | 12–14 | Seed the launch region (50–150 invited members), tune matching on real feedback, fix |
| **7. Store launch** | 14–16 | App Store + Play review, public launch in region 1, monitor metrics |

*Faster is possible by cutting voice-intake (typed only) and forum from v1, but voice intake and the
matching loop are the differentiators — keep them.*

---

## 10. What we need (team, accounts, money)

### 10.1 People (lean MVP team)
- **1 product/founder lead** (Amanda) — vision, community seeding, launch-region recruiting, copy
- **1–2 full-stack mobile engineers** (Expo/RN + Supabase/TS) — the core build
- **1 designer** (part-time) — onboarding, matching UX, brand (the "feel" matters a lot here)
- **AI/backend** — can be one of the engineers; matching engine + prompts
- **Community/moderation** (part-time, grows post-launch) — seed cohorts, moderate, host events
- Optional: fractional iOS/Android specialist for store submission polish

### 10.2 Accounts / services to set up
- Apple Developer Program ($99/yr) + Google Play Console ($25 one-time) — **start early, review
  takes time**
- Supabase, Expo/EAS, RevenueCat, Stripe, Anthropic (Claude), speech-to-text provider,
  PostHog/Amplitude, Sentry, a transactional email/SMS (e.g. Resend/Twilio)
- Domain: locketclub.com (landing + deep links/universal links), App Store listing assets
- Legal: Terms, Privacy Policy, community guidelines, data-processing (GDPR — expats = EU users),
  age gate, IAP-compliant subscription disclosures

### 10.3 Rough budget signal (directional, not a quote)
- **Build (12–16 wks):** dominated by eng+design time. Plan for a focused small team.
- **Ongoing/month at small scale:** Supabase (~$25–$100+), RevenueCat (free under threshold),
  AI/Claude + embeddings + STT (usage-based, modest at MVP volumes — matching runs are cheap because
  we only LLM the top-N), push (free), analytics/Sentry (free–low tiers), stores ($99/yr + $25).
- AI cost control: cohort + rules filtering happens before any AI call, so we only spend tokens on
  the small set of top candidates — keeps per-member matching cost very low.

---

## 11. Monetization

- **Primary: paid membership subscription** (the "pay and join" she described). Monthly + discounted
  annual. **Free trial** (e.g. 7 days) or read-only preview so people see value before paying.
- **Launch pricing / founding members** to seed early regions; **referral credits** to drive growth.
- Later: ticketed/premium events, host/ambassador revenue share, regional (PPP) pricing, brand/
  partner placements relevant to expats (banks, relocation, insurance) — *only if it doesn't cheapen
  the experience.*
- Note: Apple/Google take ~15–30% of IAP subscriptions — price with that in mind; web/Stripe
  checkout where store rules allow.

---

## 12. Risks & mitigations

| Risk | Why it matters | Mitigation |
|---|---|---|
| **Cold-start / density** | Matching needs enough people per cohort or it feels empty | Launch ONE region, seed 50–150 first, gate openings on density |
| **Matching feels generic** | Kills the whole value prop | Invest in rationale copy + voice intake signal; tight feedback loop; human-curate early matches |
| **Trust & safety (IRL meetups)** | Strangers meeting; safety + brand risk | Verification, report/block, guidelines, public-meet guidance from day 1 |
| **Privacy/GDPR** | Expats are EU users; sensitive data (kids, location) | Data minimization, RLS, clear consent, EU-friendly hosting |
| **Store review** | IAP rules, UGC moderation requirements | Build moderation + report/block before submitting; budget review time |
| **Churn after first match** | People get value then leave | Recurring "people to meet" drops, forum, events to retain |
| **AI cost/quality** | Tokens + hallucinated facts | Filter before AI; ground LLM strictly in profile facts; cache |
| **Scope creep** | "Build a whole social network" | Hold the line on §8 MVP cut; matching loop first |

---

## 13. Success metrics (what "working" looks like)

- **Activation:** % of joiners who complete profile + voice intake
- **Match → connect rate:** % of suggested matches where a DM starts
- **First-week connection:** % of new members with ≥1 accepted connection in 7 days *(north star)*
- **IRL conversion (survey):** % who actually met someone offline
- **Forum engagement:** posts/comments per active member
- **Retention:** W1/W4 retention; subscription renewal rate; trial→paid conversion
- **NPS / "would you recommend"** within a cohort

---

## 14. Open questions for Amanda (to finalize scope)

1. **Launch region & persona** — which city first, and lead with parents or general expats?
2. **Pricing** — target price point + trial vs paywalled preview?
3. **"App only" strictness** — OK with a web *admin* console + marketing site, app for members? Or
   members on web too eventually?
4. **Voice intake** — must-have for v1, or fast-follow (ship typed-only first to save 1–2 weeks)?
5. **Hosts/ambassadors** — community-led cohorts from day 1, or team-run first?
6. **Verification level** — light (selfie) vs heavier (ID) for the trust/safety bar?
7. **Brand** — is "Locket Club" final, and is locketclub.com secured?
8. **Budget & timeline** — confirms team size and how aggressively we cut v1.

---

## 15. Suggested immediate next steps

1. **Decide the launch region + price** (questions 1–2 above) — unblocks everything.
2. **Lock the v1 scope** against §8; defer the rest in writing.
3. **Stand up accounts** (Apple/Google early!, Supabase, RevenueCat, Anthropic, Expo).
4. **Design the 3 hero flows**: onboarding+voice intake, "people to meet"+nudge, DM+icebreaker.
5. **Build a clickable prototype** of the matching loop and test it on 10 real target users before
   writing the bulk of the code.
6. **Start the seed list** for region 1 in parallel (community work is the hardest part, start now).

> If helpful, the natural follow-on to this doc is: (a) a clickable Figma of the 3 hero flows, and
> (b) the Supabase schema + Expo app skeleton scaffolded as a starting repo. Say the word and I can
> draft either.

---

*Prepared as a build-ready scope. The one thing to protect through every trade-off: the **matching
loop** — auto-cohort → AI match with a reason → nudge → DM. That's the product; the rest is support.*
