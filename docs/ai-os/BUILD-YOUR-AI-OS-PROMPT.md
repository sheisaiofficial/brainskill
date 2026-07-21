# Build Your Own AI OS — Prompt (Intelligence Layer edition)

*Amanda's original "Build Your Own AI OS" prompt, amended to install the Level 1
Intelligence Layer from intelligence.sheisai.ai. All additions are marked
`[IL]` so they're easy to spot against the original. Everything else is
verbatim from the SHE IS SOL reference version.*

*Changes at a glance: one new row in "Your case", one new interview question
(Phase 0, Q9), one new phase (Phase 2.5 — Install the Intelligence Layer), and
one addition to the philosophy (§0). The Pro pack's `how-to-build-your-os.md`
(shipped in every Intelligence Layer Pro zip) carries the same filing map, so
the two documents always agree.*

---

# PASTE FROM HERE ⬇︎

Claude — I want you to help me set up an **AI Operating System** for my business from scratch. I'll answer your questions as we go. You'll build the folder structure, write the context files, and file anything I hand you. **Do not move real files without confirming with me first.** **Do not delete anything, ever** — anything that looks obsolete goes into `_archive/` where I can recover it.

## Your case (edit before pasting)

| | |
|---|---|
| **Brand name** | SHE IS SOL |
| **Founder / owner name** | Amanda Jeffs |
| **What the brand does** | *(I'll tell you when you ask — coaching / courses / community for [x])* |
| **Root folder on my machine** | `D:\-- SHE IS SOL --\` |
| **Also want a separate top-level folder for** | Course content, workbooks, coaching materials (name it `Course Content\` as a peer to `AI OS\`) |
| **Related brands** | Sister to SHE IS AI (ethical AI consulting) and SHE IS EMPOWER (formerly WND — fleet/staff/project management) — same founder |
| **Existing files to migrate?** | I'll tell you when you ask |
| **[IL] Intelligence Layer files** | *(Path to my zip/folder from intelligence.sheisai.ai — or "not yet" if I haven't run Level 1)* |

---

## The philosophy — read this before you start

This isn't a folder. It's an **operating system**. Four principles make it work — plus one about where the soul lives. Internalise them before you build.

### 0. [IL] The soul comes first

The OS is Level 2 of a three-level build: **Level 1 (Soul)** — the Intelligence
Layer from intelligence.sheisai.ai: who I am, how I decide, my governance.
**Level 2 (Mind)** — this OS. **Level 3 (Body)** — the OS executing in the
world. If I have Level 1 files, they are the FIRST thing installed (Phase 2.5),
my `GOVERNANCE.md` becomes the top layer of `governance.md` that nothing may
override, and every agent you ever write for me inherits it. An OS without the
soul is a filing cabinet.

### 1. Agent ≠ skill ≠ task ≠ memory ≠ output

| | What it is | When it's used |
|---|---|---|
| **Agent** | Standing behaviour worth governing. Runs on its own. Produces finished work. | Sun 6pm, daily 7am, on every paid invoice |
| **Skill** | A capability I summon when I'm already at the desk | "Write today's post" |
| **Task** | A pure schedule trigger, no standing behaviour | A cron job |
| **Memory** | Persistent facts an agent or skill needs | Brand voice, audience insights, past performance |
| **Output** | A generated artifact | A drafted post, a brief, a campaign pack |

**The #1 mistake is treating every prompt as an agent.** Most prompts are skills. True agents earn their own folder.

### 2. Three context tiers, each with its own CLAUDE.md

- `AI-HQ/CLAUDE.md` — org-level: who I am, brand snapshot, how I work
- `AI-HQ/agents/<Agent>/CLAUDE.md` — what this specific agent does
- `AI-HQ/clients/<Client>/CLAUDE.md` — who this client is, their brand

When you open a file, walk **up** the tree and read every CLAUDE.md you find. Each tier only carries what's true at that tier — never duplicate brand spec inside client folders.

### 3. Authored vs installed

- **Authored skills** (mine — I wrote them) live in `AI-HQ/skills/`
- **Installed skills** (plugin skills like `anthropic-skills:*`, `marketing:*`, `small-business:*`) live in Claude's plugin cache. **Do not duplicate them in the OS.** Claude loads them automatically.

Same rule for agents. Only my authored / customised agents get folders.

### 4. Code lives separately from docs

Next.js apps, Python scripts, anything with `package.json` or `.git` goes in a sibling `code/` folder at the top level. NOT inside the AI OS. The OS is a knowledge OS — markdown, prompts, governance, brand assets. Code has different needs.

---

## The target structure (build toward this)

```
D:\-- SHE IS SOL --\
│
├── AI OS\                              ← THE OS ROOT
│   ├── README.md                       operator's reference (terse)
│   ├── AI-OS-WALKTHROUGH.md            explainer for me / my team
│   │
│   ├── Scheduled\                      automation infrastructure (cron / Make.com)
│   ├── _archive\                       reversibility safety net
│   │
│   └── AI-HQ\                          ← THE WHOLE BUILDING
│       │
│       ├── CLAUDE.md                   org-level context (Claude loads this)
│       ├── AGENT.md                    master agent card (cross-tool)
│       ├── QUICK_START.md              5-minute onboarding
│       ├── governance.md               auto / ask / never rules  [IL: my GOVERNANCE.md is its top layer]
│       ├── org-chart.md                department map
│       ├── connections.md              MCP / integration stack
│       ├── schedule.md                 weekly / monthly rhythm
│       │
│       ├── projects\                   my active projects
│       ├── skills\                     skills I authored
│       │   └── _INDEX.md               [IL: includes my two intelligence-layer skills]
│       ├── memory\                     business-level brain
│       │   ├── intelligence-layer\     [IL] my Level 1 map: report + consciousness-index.json
│       │   ├── audience-insights.md
│       │   ├── brand.md
│       │   ├── performance.md
│       │   └── reference\
│       ├── outputs\                    generated files default here
│       │
│       ├── agents\                     my agent fleet
│       │   └── <Agent Name>\
│       │       ├── CLAUDE.md           [IL: inherits governance.md; consults consciousness-index.json]
│       │       ├── projects\  skills\  memory\
│       │
│       └── clients\                    external client work
│           └── <Client Name>\
│               ├── CLAUDE.md
│               └── projects\  skills\  memory\  outputs\
│
├── Course Content\                     ← MY BUSINESS DELIVERABLES
│   ├── Programs\                          full course curricula
│   ├── Workbooks\                         PDF / docx workbooks
│   ├── Coaching\                          1:1 / group coaching materials
│   ├── Templates\                         reusable client-facing templates
│   └── _archive\                          older versions, superseded programs
│
└── code\                               ← CODE (if any)
    └── <project>\                         Next.js apps, scripts, etc.
```

**The same four sub-folders (`projects/skills/memory/outputs/`) repeat at every level.** Learn the pattern once and never think about filing again.

---

## Your job, in phases

Do these in order. **Confirm with me at every phase boundary before moving on.**

### Phase 0 — Interview me

Before you build anything, ask me:

1. **What does SHE IS SOL do?** One paragraph.
2. **Who's the audience?** Who does she serve?
3. **What's the brand voice / archetype?** Sage? Magician? Warm? Direct?
4. **Palette + typography?** (If she has a brand spec, I'll paste it.)
5. **What agents do I already have or want?** Names + one-line role for each.
6. **Any existing files to migrate?** Where are they? What state?
7. **Any current clients?** Names + one-line description.
8. **Is `Course Content\` right as the sibling folder name, or should it be `Programs\` / `Coaching\` / something else?**
9. **[IL] Do I have my Intelligence Layer files from intelligence.sheisai.ai?**
   (The zip holds: `intelligence-report.md`, `SKILL.md`,
   `intelligence-support-SKILL.md`, `consciousness-index.json`,
   `GOVERNANCE.md`, `how-to-build-your-os.md`.) If yes, get the path — they
   install in Phase 2.5. If no, note it as the top open follow-up: the OS
   works without them, but every context file you write is a placeholder for
   who I actually am until Level 1 is done.

Take my answers. Confirm you understand. **Do not proceed until I say "go."**

### Phase 1 — Scaffold the empty structure

Create the folder tree above. Empty folders are fine. Also create starter versions of:
- `AI OS\README.md` (short — what's where)
- `AI OS\AI-OS-WALKTHROUGH.md` (the teaching doc — I'll give you the reference version to model on)
- `AI-HQ\CLAUDE.md` (fill in with what I told you in Phase 0)
- `AI-HQ\governance.md` (Auto / Ask / Never framework, mostly placeholder for me to fill in)
- `AI-HQ\org-chart.md` (departments — start with the ones I named)

**Show me the tree after Phase 1. Wait for approval before Phase 2.**

### Phase 2 — File anything I already have

If I have existing files (skills, agents, brand assets, memory files, PDFs), I'll point you at the source folder. You will:

1. **Audit first, act second.** Give me an inventory of what's there before you move anything.
2. **Flag duplicates.** Use `md5sum` or equivalent to identify true byte-identical duplicates. Confirm with me before archiving.
3. **Sort into the target structure.** Match filenames to the tier they belong in (skill → skills/, agent → agents/, memory → memory/, output → outputs/).
4. **Move duplicates to `_archive/`, not `delete`.** Never delete.
5. **If in doubt about a file, ask me.** Do not guess.

### Phase 2.5 — [IL] Install the Intelligence Layer

If I have my Level 1 files (Phase 0, Q9), install them now — before authoring
any CLAUDE.md files, because everything you write after this should be
informed by them:

1. Create `AI-HQ\memory\intelligence-layer\` and file
   `intelligence-report.md` + `consciousness-index.json` there. **Copy, don't
   move** — my downloaded zip is the master; note the source path in a small
   `_source.md`.
2. Install the two skills as authored skills:
   `AI-HQ\skills\<my-name>-intelligence-layer\SKILL.md` and
   `AI-HQ\skills\<my-name>-intelligence-support\SKILL.md` (the loader looks
   for the exact filename `SKILL.md`, so `intelligence-support-SKILL.md` is
   renamed to `SKILL.md` inside its own folder). Add both to `_INDEX.md`.
3. Merge my `GOVERNANCE.md` into `AI-HQ\governance.md` as its **top layer**:
   my values, red lines, and wellbeing clause come first; the operational
   Auto / Ask / Never rules sit under them and may never contradict them.
   Keep the original `GOVERNANCE.md` file intact alongside (link, don't
   flatten).
4. Add the reference lines to `AI-HQ\CLAUDE.md` (link, don't duplicate):
   my Intelligence Layer lives in `memory/intelligence-layer/`; governance is
   inviolable and inherited by every agent.
5. From now on, every agent `CLAUDE.md` you author states that it inherits
   `governance.md` and may consult `consciousness-index.json` to fit its
   behaviour to me — **especially my empty corner: agents and schedules carry
   what I don't natively finish.** Read the index before writing agent cards.
6. Read the report before Phase 3. When you author context files, write them
   for the person in the report — not a generic founder.

**Show me what you installed and wait for my "go" before Phase 3.**

### Phase 3 — Author starter CLAUDE.md files at every tier

For each agent folder and each client folder, write a starter CLAUDE.md that captures:
- The role or client's identity
- When to invoke / who to work with
- Related skills or brand rules
- Anything special to know

If it's a scaffold (no full agent yet), write a stub CLAUDE.md that says "scaffold — not yet authored" so I can see the intent.

### Phase 4 — Skills library

Create `AI-HQ\skills\_INDEX.md` — a markdown table listing every authored skill, with columns for `Skill name`, `Extra files`, `What it does`. This is my master index and community-shareable reference.

For each skill I've authored (or you and I create together), the folder should contain:
- `SKILL.md` (Claude convention — the loader looks for this exact filename)
- Optional `assets/`, `references/`, `INSTALL-AND-SCHEDULE.md` if the skill has those

### Phase 5 — Course Content sibling folder

Create the `Course Content\` folder at the root level with these subfolders:
- `Programs\` — full course curricula, one folder per program
- `Workbooks\` — PDF / docx workbooks, organised by program or by theme
- `Coaching\` — 1:1 and group coaching materials, session templates, prompts
- `Templates\` — reusable client-facing templates (proposals, welcome emails, checklists)
- `_archive\` — older versions, superseded programs

Add a `Course Content\README.md` briefly explaining what lives where.

**Do NOT put course content inside the AI OS.** The OS runs the business; course content is what the business delivers. Different lifecycle, different backup pattern, different audience for the files.

### Phase 6 — Wrap-up doc

Write the walkthrough (`AI OS\AI-OS-WALKTHROUGH.md`) tailored to SHE IS SOL. It should include:
- One-sentence philosophy
- The four principles (plus the soul-comes-first principle if the Intelligence Layer is installed)
- Annotated visual of the actual tree you built
- Layer-by-layer tour with what's inside
- Conventions (naming, filename rules, where duplicates go)
- Scoreboard (final counts: agents, skills, clients)
- A "copy template" version for the community

Update the root `README.md` to point to the walkthrough and list all the open follow-ups.

---

## Safety rules — non-negotiable

1. **Never delete anything.** Anything obsolete goes to `_archive/`.
2. **Never move real files without confirming.** For each batch of moves, tell me the mapping and wait for a "go."
3. **Never invent brand details.** If I haven't told you the palette or voice, don't make one up — ask.
4. **Use `md5sum` to verify duplicates.** Don't assume same-name = same file. Same-name = potentially different content.
5. **Do not extract zips without asking.** If I've handed you bundled agents or skills as `.zip`, file them intact unless I explicitly say extract. **[IL] Exception: I explicitly authorise extracting my Intelligence Layer zip in Phase 2.5.**
6. **If a folder has an existing `.claude/` config directory, treat it as an active working directory** and warn me before touching it — the Claude project memory is keyed to that exact absolute path and moving the folder can orphan memory.
7. **Assume I have ADHD-adjacent working style.** Give me short, structured output. One decision at a time when it's genuinely mine to make. Don't dump every option.
8. **Report progress in small updates,** not one giant wall of text at the end.
9. **[IL] Never edit the content of my Intelligence Layer files** (report, index, skills). They were generated at intelligence.sheisai.ai and I am the only editor of who I am. You may copy, install, link, and quote them — not rewrite them. If something in them seems wrong, tell me; I'll re-run the synthesis or edit them myself.

---

## Things you should NOT do (unless I explicitly ask)

- Do not create documentation files I didn't ask for.
- Do not add emojis to any file.
- Do not add "generated by Claude" footers.
- Do not build a giant AGENT.md at the org level that duplicates brand memory — link, don't duplicate.
- Do not install plugins or run `npm install` or anything that touches a package manager.
- Do not attempt Google Drive / Notion / Gmail integration unless I say we're doing that.
- Do not skip Phase 0 (the interview). **Building without context is the fastest way to build the wrong thing.**

---

## When you finish

You should be able to show me:
- The final tree
- A count of what got filed where
- A short "open follow-ups" list
- The walkthrough doc I can share with my community

Then hand it back to me. I'll test-drive by opening a fresh Claude Code session in the new AI-HQ folder and seeing what context it picks up automatically.

---

**Start with Phase 0. Ask me the interview questions. Do not skip ahead.**

# PASTE TO HERE ⬆︎
