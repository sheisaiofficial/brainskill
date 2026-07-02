# How to contribute this project to The For Good Project (plain English)

The For Good Project (<https://thecolab-ai.github.io/the-for-good-project/contribute>) is an
open research commons run by thecolab.ai where humans and AI agents work on real New Zealand
societal problems. Everything happens in one GitHub repo:
**`thecolab-ai/the-for-good-project`**.

You don't need to understand their whole system to get started. Here's the short version.

---

## The one idea to understand

Work moves through **four stages**, and each stage is just a **GitHub issue** with a label:

| Stage | What it means | What you produce |
|---|---|---|
| 🔍 Discover | "Here's a real NZ problem" | A well-framed problem statement + researchable questions |
| 📚 Research | "Here's what's actually true" | A cited findings doc → `research/findings/<domain>/<slug>.md` |
| 💡 Ideate | "Here's what we could build" | A solution doc → `solutions/<slug>.md` |
| 🔨 Build | "Here it is, working" | A tool → `projects/<slug>/` |

Issues chain together into a **stream** (their word for one problem's whole journey).
You are starting a new stream.

Their two hard rules:
1. **Cite everything.** Never invent a source, statistic, or organisation. Surprising claims
   need two independent sources.
2. **No personal/identifying data.**

---

## Step 1 — Open the Discover issue (no code, ~5 minutes)

1. Go to <https://github.com/thecolab-ai/the-for-good-project/issues/new/choose>
2. Pick **"🔍 Discover a problem"**.
3. Copy the answers from [`../discover/ISSUE-DRAFT.md`](../discover/ISSUE-DRAFT.md) in this
   folder into the form fields, adjust anything you want in your own voice, and submit.
4. That's it. The issue gets labels `stage: discover` and `status: available`, and the
   project's maintainers/agents can pick it up — or you can keep driving it yourself.

## Step 2 — Claim work (optional, if you want to do the next stages yourself)

On any issue labelled `status: available`, either assign yourself and swap the label to
`status: claimed`, or (if you don't have write access to their repo, which you won't at
first) just **comment**: "Claiming this — starting now."

## Step 3 — Submit files via a fork + pull request

Because you won't have write access to their repo, you contribute through a **fork**
(your own copy of their repo that you *can* push to):

```bash
# one-time setup
gh repo fork thecolab-ai/the-for-good-project --clone
cd the-for-good-project

# for each piece of work
git checkout -b research/nz-seed-access        # branch name matches the stage
# ...copy in your file, e.g. research/findings/grant-access/nz-seed-access-gap.md
npm install && npm run validate                # their checks must pass
git add -A && git commit -m "research: NZ seed funding access gap (Part of #<issue-number>)"
git push -u origin research/nz-seed-access
gh pr create --repo thecolab-ai/the-for-good-project --fill \
  --body "Part of #<discover-issue-number>."
```

Notes:
- `gh` is the [GitHub CLI](https://cli.github.com/) — install it once, run `gh auth login`.
- Use `Part of #<n>` for work under a Discover issue (keeps the stream open);
  use `Closes #<n>` when a PR fully finishes a specific Research/Ideate/Build issue.
- One issue per PR.
- Their `AGENTS.md` file has instructions for AI agents (Claude Code can read it and
  drive this whole flow); `./start_work.sh` and `./review_work.sh` are their automation
  scripts for agents working the queue.

## Step 4 — Respect the human gates

The project deliberately puts a human review between research → ideation and
ideation → build. So: submit the Discover issue, then the research finding, and let it be
reviewed before pushing the solution and the build. Don't submit all four stages in one PR.

---

## What's in this folder, mapped to their stages

| Their stage | Our file, ready to submit |
|---|---|
| 🔍 Discover | [`discover/ISSUE-DRAFT.md`](../discover/ISSUE-DRAFT.md) — paste into their issue form |
| 📚 Research | [`research/nz-seed-access-gap.md`](../research/nz-seed-access-gap.md) → goes to their `research/findings/grant-access/` |
| 💡 Ideate | [`solution/SOLUTION-DRAFT.md`](../solution/SOLUTION-DRAFT.md) → goes to their `solutions/` |
| 🔨 Build | [`agent/`](../agent/) — the working funder-matching agent → goes to their `projects/nz-seed-access/` |

Before submitting the research/solution files, fill in the `author:`, `agent:` and `model:`
frontmatter fields with whoever/whatever actually did the final pass — they use these for
provenance tracking.

Licensing to expect: your content contributions are CC BY 4.0, code is MIT.
