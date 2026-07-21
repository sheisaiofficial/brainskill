// consciousness-map.html — the visual Intelligence Layer map, generated
// server-side from consciousness-index.json. Self-contained: inline CSS,
// no external requests, works offline, owned by the person.

type Index = {
  generated_for?: string;
  golden_thread?: string;
  quadrants?: {
    drivers?: Record<string, boolean>;
    strengths?: Record<string, boolean>;
    empty_corner?: string;
    empty_corner_confirmed_by?: string[];
  };
  strengths?: string[];
  growth_edges?: string[];
  drivers?: string[];
  drains?: string[];
  convergences?: { trait: string; supported_by?: string[]; status?: string }[];
  tensions?: { polarity: string; guidance?: string }[];
  working_style?: { peak?: string; decides_on?: string; watch?: string[] };
  next_phase?: string;
  lenses?: { id: string; provided?: boolean }[];
};

function esc(s: unknown): string {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const CORNERS: { key: string; title: string; sub: string }[] = [
  { key: 'top_left', title: 'The Thinker', sub: 'Analytical · Knowledge' },
  { key: 'top_right', title: 'The Innovator', sub: 'Visionary · Creative' },
  { key: 'bottom_left', title: 'The Finisher', sub: 'Structural · Procedural' },
  { key: 'bottom_right', title: 'The Connector', sub: 'Relational · Feeling' },
];

function list(items: (string | undefined)[] | undefined, cls = ''): string {
  const clean = (items || []).filter(Boolean) as string[];
  if (!clean.length) return '<p class="empty">— not mapped yet —</p>';
  return `<ul class="${cls}">${clean.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;
}

export function buildConsciousnessMap(indexJson: string): { name: string; content: string } | null {
  let idx: Index;
  try {
    idx = JSON.parse(indexJson);
  } catch {
    return null; // model emitted invalid JSON — skip the map, never break the pack
  }

  const name = idx.generated_for || 'Your';
  const q = idx.quadrants || {};
  const emptyKey = (() => {
    const e = (q.empty_corner || '').toLowerCase();
    if (e.includes('bottom') && e.includes('left')) return 'bottom_left';
    if (e.includes('bottom') && e.includes('right')) return 'bottom_right';
    if (e.includes('top') && e.includes('left')) return 'top_left';
    if (e.includes('top') && e.includes('right')) return 'top_right';
    if (e.includes('finisher')) return 'bottom_left';
    if (e.includes('connector')) return 'bottom_right';
    if (e.includes('thinker')) return 'top_left';
    if (e.includes('innovator') || e.includes('visionary')) return 'top_right';
    return '';
  })();

  const corners = CORNERS.map((c) => {
    const d = q.drivers?.[c.key];
    const s = q.strengths?.[c.key];
    const isEmpty = c.key === emptyKey;
    return `<div class="corner${isEmpty ? ' gap' : ''}${d || s ? ' filled' : ''}">
      <h3>${c.title}</h3><p class="sub">${c.sub}</p>
      <div class="chips">
        ${d ? '<span class="chip d">driver</span>' : ''}
        ${s ? '<span class="chip s">strength</span>' : ''}
        ${isEmpty ? '<span class="chip g">the empty corner</span>' : ''}
      </div>
      ${isEmpty ? `<p class="gapnote">Carried by a system — so you can grow here without everything depending on it.${q.empty_corner_confirmed_by?.length ? ` Confirmed by ${q.empty_corner_confirmed_by.length} lenses.` : ''}</p>` : ''}
    </div>`;
  }).join('');

  const tensions = (idx.tensions || [])
    .map((t) => `<li><strong>${esc(t.polarity)}</strong>${t.guidance ? ` — ${esc(t.guidance)}` : ''}</li>`)
    .join('');

  const convergences = (idx.convergences || [])
    .map((c) => `<li>${esc(c.trait)}${c.supported_by?.length ? ` <span class="prov">· ${esc(c.supported_by.join(', '))}</span>` : ''}${c.status === 'confirmed' ? ' <span class="conf">confirmed</span>' : ''}</li>`)
    .join('');

  const lensCount = (idx.lenses || []).filter((l) => l.provided).length;

  const content = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Consciousness Map — ${esc(name)}</title>
<style>
:root{--paper:#FBFAF7;--ink:#1A1B20;--soft:rgba(26,27,32,.72);--faint:rgba(26,27,32,.5);
--sage:#6E8F7A;--deep:#4F6F5A;--wash:#E9EFEB;--gold:#B18A3A;--border:#E6E1D8;--card:#fff}
@media(prefers-color-scheme:dark){:root{--paper:#16171B;--ink:#ECEAE3;--soft:rgba(236,234,227,.75);
--faint:rgba(236,234,227,.5);--sage:#8FAE9A;--deep:#A8C4B2;--wash:#212823;--gold:#D0A952;--border:#2C2E33;--card:#1D1F24}}
*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);
font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.6}
.wrap{max-width:820px;margin:0 auto;padding:48px 20px 72px}
h1,h2,h3{font-family:Georgia,ui-serif,serif;font-weight:600}
h1{font-size:2.1rem;margin:10px 0 4px}h2{font-size:1.25rem;margin:0 0 12px}
.eyebrow{font-size:.68rem;text-transform:uppercase;letter-spacing:.18em;color:var(--deep);margin:0}
.thread{font-size:1.08rem;color:var(--soft);border-left:3px solid var(--gold);padding-left:16px;margin:18px 0 0}
section{margin-top:44px}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
@media(max-width:560px){.grid{grid-template-columns:1fr}}
.corner{border:1px solid var(--border);border-radius:14px;background:var(--card);padding:16px 18px;min-height:120px}
.corner.filled{border-color:var(--sage);background:var(--wash)}
.corner.gap{border:2px dashed var(--gold);background:transparent}
.corner h3{margin:0;font-size:1.05rem}.sub{margin:2px 0 8px;font-size:.72rem;color:var(--faint);text-transform:uppercase;letter-spacing:.1em}
.chips{display:flex;gap:6px;flex-wrap:wrap}
.chip{font-size:.62rem;letter-spacing:.08em;text-transform:uppercase;border-radius:999px;padding:2px 9px;font-weight:600}
.chip.d{background:var(--deep);color:var(--paper)}.chip.s{background:var(--sage);color:var(--paper)}
.chip.g{border:1px solid var(--gold);color:var(--gold)}
.gapnote{font-size:.8rem;color:var(--soft);margin:8px 0 0}
.cols{display:grid;grid-template-columns:1fr 1fr;gap:12px}
@media(max-width:560px){.cols{grid-template-columns:1fr}}
.card{border:1px solid var(--border);border-radius:14px;background:var(--card);padding:16px 18px}
.card h2{font-size:1rem;color:var(--deep)}
ul{margin:6px 0 0;padding-left:18px}li{margin:4px 0;font-size:.92rem;color:var(--soft)}
.empty{font-size:.85rem;color:var(--faint)}
.prov{font-size:.75rem;color:var(--faint)}
.conf{font-size:.6rem;letter-spacing:.08em;text-transform:uppercase;background:var(--deep);color:var(--paper);border-radius:999px;padding:1px 7px;font-weight:700}
.ws dt{font-size:.68rem;text-transform:uppercase;letter-spacing:.14em;color:var(--faint);margin-top:10px}
.ws dd{margin:2px 0 0;font-size:.92rem;color:var(--soft)}
footer{margin-top:56px;font-size:.75rem;color:var(--faint);text-align:center}
</style></head><body><div class="wrap">
<p class="eyebrow">The Intelligence Layer · SHE IS AI × SHE IS SOL${lensCount ? ` · woven from ${lensCount} lenses` : ''}</p>
<h1>${esc(name)} — the map</h1>
${idx.golden_thread ? `<p class="thread">${esc(idx.golden_thread)}</p>` : ''}

<section><h2>The four corners</h2><div class="grid">${corners}</div></section>

<section><div class="cols">
<div class="card"><h2>Strengths</h2>${list(idx.strengths)}</div>
<div class="card"><h2>Growth edges</h2>${list(idx.growth_edges)}</div>
<div class="card"><h2>What drives you</h2>${list(idx.drivers)}</div>
<div class="card"><h2>What drains you</h2>${list(idx.drains)}</div>
</div></section>

${convergences ? `<section><div class="card"><h2>Where your lenses agree</h2><ul>${convergences}</ul></div></section>` : ''}
${tensions ? `<section><div class="card"><h2>Your tensions — polarities to manage, not fix</h2><ul>${tensions}</ul></div></section>` : ''}

${idx.working_style ? `<section><div class="card"><h2>How you run</h2><dl class="ws">
${idx.working_style.peak ? `<dt>Peak conditions</dt><dd>${esc(idx.working_style.peak)}</dd>` : ''}
${idx.working_style.decides_on ? `<dt>How you decide well</dt><dd>${esc(idx.working_style.decides_on)}</dd>` : ''}
${idx.working_style.watch?.length ? `<dt>Watch</dt><dd>${esc(idx.working_style.watch.join(' · '))}</dd>` : ''}
</dl></div></section>` : ''}

${idx.next_phase ? `<section><div class="card"><h2>The next phase</h2><p style="font-size:.95rem;color:var(--soft)">${esc(idx.next_phase)}</p></div></section>` : ''}

<footer>Generated at intelligence.sheisai.ai · This file is yours — it works offline, forever.</footer>
</div></body></html>`;

  return { name: 'consciousness-map.html', content };
}
