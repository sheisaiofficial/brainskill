import CopyButton from './CopyButton';
import { INTERVIEW_PROMPT } from '@/lib/interview';

export const metadata = {
  title: 'The Soul-Led Intelligence Interview · SHE IS AI × SHE IS SOL',
  description:
    'A deep interview you run with your own Claude — witness, not interrogation. It produces the anchor lens of your Intelligence Layer.',
};

export default function InterviewPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 md:py-20">
      <p className="text-xs uppercase tracking-[0.2em] text-sage-deep/80">
        The anchor lens · SHE IS AI × SHE IS SOL
      </p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl text-neutral-ink leading-[1.1]">
        The Soul-Led Intelligence Interview.
      </h1>
      <p className="mt-4 text-lg text-neutral-ink/75">
        Assessments tell us how you're wired. This is where <em>you</em> get to speak. A deep,
        gentle interview you run with your own Claude — five movements through your story, your
        energy, your values, your relationships, and your horizon. It ends with one file that
        anchors your whole Intelligence Layer.
      </p>

      <div className="mt-8 rounded-2xl bg-sage-wash/60 border border-sage-tint p-6">
        <h2 className="font-serif text-xl text-sage-deep">How it's different, on purpose</h2>
        <ul className="mt-3 space-y-2 text-neutral-ink/85 leading-relaxed text-[0.97rem]">
          <li>
            <strong>Witness, not interrogation.</strong> Nothing gets &ldquo;extracted.&rdquo;
            Depth comes from good ground, not pressure — and you can pass on any question.
          </li>
          <li>
            <strong>Recognition, not diagnosis.</strong> Nothing is recorded as true until you
            say <em>&ldquo;yes, that&apos;s it.&rdquo;</em> Claude&apos;s hunches are kept
            separate, labelled as reads.
          </li>
          <li>
            <strong>Whole-person, not work-brain.</strong> Your body, energy, seasons, values,
            and relationships are treated as intelligence — not just how you think and argue.
          </li>
          <li>
            <strong>It runs in your Claude, not ours.</strong> Your answers never touch our
            servers. You bring back one file, only if you choose to.
          </li>
        </ul>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <CopyButton text={INTERVIEW_PROMPT} />
        <p className="text-sm text-neutral-ink/60 max-w-xs">
          Paste it into a fresh Claude conversation. 45–90 minutes, or one movement per sitting
          across a week.
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-neutral-warm bg-white p-5 text-sm text-neutral-ink/75 leading-relaxed">
        When Claude hands you <code>soul-interview.md</code>, come back to{' '}
        <a href="/journey" className="underline text-divergen hover:text-divergen-deep">
          the journey
        </a>{' '}
        and paste it in as the <strong>Soul-Led Interview</strong> lens. It anchors everything
        else you bring — every other lens gets checked against your own recognised truth.
      </div>

      <div className="gold-rule my-12" />

      <div className="text-xs uppercase tracking-[0.18em] text-neutral-ink/60 mb-3">
        The full prompt (what you&apos;re copying)
      </div>
      <pre className="skill-preview">{INTERVIEW_PROMPT}</pre>
    </div>
  );
}
