import React, { useCallback, useEffect, useState } from 'react';

type DemoTab = 'code' | 'steps';

/** Baseline PNGs from `looprobenew-android/baselines/nike-products/sports-nike-brand-filter/`. */
const BASELINE_DIR = 'images/baselines/nike-products/sports-nike-brand-filter';

type StepDef = {
  id: string;
  title: string;
  screen: 'home' | 'sports' | 'brand' | 'nike' | 'scroll' | 'complete';
  /** filename under /images/baselines/.../ */
  baselineFile: string;
};

const PUBLIC = process.env.PUBLIC_URL || '';

/** Auto-advance interval for the Steps preview (while Steps tab is active). */
const STEP_PREVIEW_INTERVAL_MS = 2800;

const STEPS: StepDef[] = [
  { id: '1', title: 'app initial state', screen: 'home', baselineFile: 'app-initial-state.png' },
  { id: '2', title: 'tap sports category', screen: 'sports', baselineFile: 'tap-sports-category.png' },
  { id: '3', title: 'tap brand filter', screen: 'brand', baselineFile: 'tap-brand-filter.png' },
  { id: '4', title: 'tap nike brand', screen: 'nike', baselineFile: 'tap-nike-brand.png' },
  {
    id: '5',
    title: 'scroll to see all Nike products',
    screen: 'scroll',
    baselineFile: 'scroll-down-to-see-all-nike-products.png',
  },
  { id: '6', title: 'scroll for more products', screen: 'scroll', baselineFile: 'scroll-down-more-nike-products.png' },
  { id: '7', title: 'scroll to final products', screen: 'scroll', baselineFile: 'scroll-down-final-nike-products.png' },
  { id: '8', title: 'verify only Nike products', screen: 'complete', baselineFile: 'verify-only-nike-products-shown.png' },
  { id: '9', title: 'test complete', screen: 'complete', baselineFile: 'test-complete.png' },
];

const KOTLIN_SNIPPET = `class SportsNikeBrandFilterTest : QuentTest() {
  override fun execute() {
    launchApp()
    // Navigate to Sports from home
    clickOn("Sports category")
    // Open the Brand filter and select Nike
    clickOn("Brand filter")
    clickOn("Nike")
    scrollScreen(ScrollDirection.DOWN)
    validate(
      "Only Nike products from Sports are shown",
      "Product names look like running shoes"
    )
  }
}`;

function ScreenHome() {
  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-slate-50 to-white p-2 text-[8px]">
      <div className="text-center font-bold text-slate-800 text-[9px] mb-1">Sample Shop</div>
      <div className="flex gap-1 justify-center mb-2">
        {['All', "Women's", "Men's", 'Sports'].map((t) => (
          <span
            key={t}
            className={`px-1.5 py-0.5 rounded-full ${t === 'All' ? 'bg-slate-800 text-white' : 'bg-slate-200 text-slate-700'}`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-1 flex-1">
        <div className="bg-violet-200/80 rounded aspect-square" />
        <div className="bg-rose-200/80 rounded aspect-square" />
        <div className="bg-amber-200/80 rounded aspect-square" />
        <div className="bg-cyan-200/80 rounded aspect-square" />
      </div>
    </div>
  );
}

function ScreenSports() {
  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-slate-50 to-white p-2 text-[8px]">
      <div className="text-center font-bold text-slate-800 text-[9px] mb-1">Sample Shop</div>
      <div className="flex gap-1 justify-center mb-2">
        {['All', "Women's", "Men's", 'Sports'].map((t) => (
          <span
            key={t}
            className={`px-1.5 py-0.5 rounded-full ${t === 'Sports' ? 'ring-2 ring-amber-400 bg-slate-800 text-white' : 'bg-slate-200 text-slate-700'}`}
          >
            {t}
          </span>
        ))}
      </div>
      <p className="text-[7px] text-slate-500 text-center mb-1">Sports gear</p>
      <div className="grid grid-cols-2 gap-1 flex-1">
        <div className="bg-orange-200/80 rounded aspect-square" />
        <div className="bg-lime-200/80 rounded aspect-square" />
        <div className="bg-zinc-200/80 rounded aspect-square" />
        <div className="bg-fuchsia-200/80 rounded aspect-square" />
      </div>
    </div>
  );
}

function ScreenBrand() {
  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-slate-50 to-white p-2 text-[8px] relative">
      <div className="text-center font-bold text-slate-800 text-[9px] mb-1">Sample Shop · Sports</div>
      <div className="mb-1">
        <div className="text-[7px] text-slate-500">Brand</div>
        <div className="mt-0.5 rounded border-2 border-amber-400 bg-white shadow-sm py-0.5 px-1 text-[7px] text-slate-800">
          <div className="space-y-0.5 max-h-16 overflow-hidden">
            {['ASICS', 'Balega', 'Bowflex', 'Nike', 'Under Armour'].map((b) => (
              <div key={b} className={b === 'Nike' ? 'text-slate-400' : ''}>
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 flex-1 opacity-60">
        <div className="bg-slate-200/80 rounded aspect-square" />
        <div className="bg-slate-200/80 rounded aspect-square" />
      </div>
    </div>
  );
}

function ScreenNike() {
  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-slate-50 to-white p-2 text-[8px]">
      <div className="text-center font-bold text-slate-800 text-[9px] mb-1">Sports · Nike</div>
      <div className="flex flex-wrap gap-0.5 justify-center mb-1">
        <span className="px-1 py-0.5 rounded bg-slate-800 text-white text-[7px]">Nike</span>
        <span className="px-1 py-0.5 rounded bg-slate-200 text-[7px]">All sizes</span>
      </div>
      <div className="grid grid-cols-2 gap-1 flex-1">
        <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded p-0.5 text-white">
          <div className="text-[6px] font-semibold">Air Max 270</div>
        </div>
        <div className="bg-gradient-to-br from-slate-600 to-slate-800 rounded p-0.5 text-white">
          <div className="text-[6px] font-semibold">Pegasus 40</div>
        </div>
        <div className="bg-slate-200/80 rounded aspect-square" />
        <div className="bg-slate-200/80 rounded aspect-square" />
      </div>
    </div>
  );
}

function ScreenScroll() {
  return <ScreenNike />;
}

function ScreenComplete() {
  return (
    <div className="flex flex-col h-full items-center justify-center bg-emerald-50/90 p-2 text-center">
      <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] mb-1">✓</div>
      <div className="text-[8px] font-bold text-emerald-900">Test passed</div>
      <div className="text-[7px] text-emerald-700 mt-0.5">Nike products validated</div>
    </div>
  );
}

/**
 * Renders a device chrome with a baseline screen capture for the current step
 * (from `sports-nike-brand-filter` baselines in the test repo).
 */
function PhoneMock({ baselineFile, screen }: { baselineFile: string; screen: StepDef['screen'] }) {
  const [broken, setBroken] = useState(false);
  const src = `${PUBLIC}/${BASELINE_DIR}/${baselineFile}`;

  useEffect(() => {
    setBroken(false);
  }, [baselineFile]);

  return (
    <div className="mx-auto w-36 sm:w-40 aspect-[9/19] max-h-[19rem] rounded-[1.1rem] border-[3px] border-zinc-900 bg-zinc-900 shadow-md shadow-black/20 overflow-hidden flex flex-col">
      <div className="h-3 bg-zinc-950 flex items-center justify-center shrink-0">
        <div className="h-1 w-5 rounded-full bg-zinc-700" />
      </div>
      <div className="min-h-0 flex-1 bg-zinc-900 relative overflow-hidden">
        {!broken ? (
          <img
            src={src}
            alt={`Test step: ${baselineFile.replace(/\.png$/, '').replace(/-/g, ' ')}`}
            className="absolute inset-0 h-full w-full object-cover object-top"
            loading="lazy"
            decoding="async"
            onError={() => setBroken(true)}
          />
        ) : (
          <div className="h-full w-full">
            {screen === 'home' && <ScreenHome />}
            {screen === 'sports' && <ScreenSports />}
            {screen === 'brand' && <ScreenBrand />}
            {screen === 'nike' && <ScreenNike />}
            {screen === 'scroll' && <ScreenScroll />}
            {screen === 'complete' && <ScreenComplete />}
          </div>
        )}
      </div>
    </div>
  );
}

const CodeLine: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`whitespace-pre font-mono text-[9px] leading-relaxed pl-1 border-l-2 border-transparent ${className}`}>
    {children}
  </div>
);

const HeroInteractiveDemo: React.FC = () => {
  const [tab, setTab] = useState<DemoTab>('steps');
  const [activeStep, setActiveStep] = useState(0);
  const [modifyText, setModifyText] = useState('Add scroll before validate to load lazy items');
  const [composerText, setComposerText] = useState('');
  const [banner, setBanner] = useState<string | null>(null);
  const [copyHint, setCopyHint] = useState<'idle' | 'copied' | 'err'>('idle');

  const showBanner = useCallback((msg: string) => {
    setBanner(msg);
    window.setTimeout(() => setBanner(null), 4200);
  }, []);

  const onApply = () => {
    showBanner('In Quent, Apply sends this to the AI to update your test. This page is a preview only — nothing is sent.');
  };

  const onComposerSend = (e: React.FormEvent) => {
    e.preventDefault();
    showBanner('Preview: in the app, the agent would continue from your message. Here you can only explore the UI mock.');
    setComposerText('');
  };

  const copyKotlin = useCallback(() => {
    if (!navigator.clipboard?.writeText) {
      setCopyHint('err');
      window.setTimeout(() => setCopyHint('idle'), 2000);
      return;
    }
    void navigator.clipboard.writeText(KOTLIN_SNIPPET).then(
      () => {
        setCopyHint('copied');
        window.setTimeout(() => setCopyHint('idle'), 2000);
      },
      () => {
        setCopyHint('err');
        window.setTimeout(() => setCopyHint('idle'), 2000);
      }
    );
  }, []);

  const step = STEPS[activeStep] ?? STEPS[0];

  useEffect(() => {
    if (tab !== 'steps') return;
    const id = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, STEP_PREVIEW_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [tab]);

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 md:mt-14">
      <p className="text-center text-xs text-gray-500 mb-3">
        Interactive preview — steps advance automatically on the Steps tab; click a step or tab to explore. No network.
      </p>
      {banner && (
        <div className="mb-3 rounded-lg border border-emerald-200/80 bg-emerald-50/95 px-3 py-2 text-center text-xs text-emerald-900">
          {banner}
        </div>
      )}

      <section
        className="rounded-[10px] overflow-hidden border border-gray-300/80 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04),inset_0_1px_0_0_rgba(255,255,255,0.6)]"
        aria-label="Quent desktop app preview (macOS window)"
      >
        <div className="relative flex h-7 shrink-0 items-center border-b border-gray-300/90 bg-gradient-to-b from-[#ececec] to-[#e2e2e2] px-2.5 sm:h-8 sm:px-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full border border-red-500/10 bg-[#ff5f57] shadow-sm" />
            <span className="h-2.5 w-2.5 rounded-full border border-amber-500/10 bg-[#febc2e] shadow-sm" />
            <span className="h-2.5 w-2.5 rounded-full border border-emerald-700/10 bg-[#28c840] shadow-sm" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[10px] font-medium tracking-tight text-gray-500 select-none sm:text-[11px]">
              Quent
            </span>
          </div>
        </div>

        <div className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[22rem]">
          {/* Left: chat + metadata + modify (lite) */}
          <div className="border-b lg:border-b-0 lg:border-r border-gray-200 p-3 md:p-4 flex flex-col gap-3 bg-gray-50/80 min-h-0 lg:min-h-[22rem]">
            <div className="space-y-2 flex-1 min-h-0 overflow-y-auto pr-1">
              <p className="text-[8px] text-gray-400">22:01</p>
              <div className="flex gap-2">
                <div className="h-6 w-6 rounded-full bg-zinc-900 flex items-center justify-center text-[10px] font-bold text-white shrink-0 border border-zinc-800">
                  U
                </div>
                  <div className="rounded-lg bg-white border border-gray-200 px-2 py-1.5 text-[10px] text-gray-800 leading-snug shadow-sm">
                    <p className="font-bold text-gray-900 mb-0.5">ACTIONS:</p>
                    <p className="font-normal">
                      Choose Sports in the landing page. You might need to scroll down to see it.
                      <br />
                      Filter brands by Nike
                    </p>
                    <p className="font-bold text-gray-900 mt-2 mb-0.5">VALIDATIONS:</p>
                    <p className="font-normal">Only Nike Products are shown</p>
                  </div>
              </div>
              <div className="flex gap-2">
                <div className="h-6 w-6 rounded-full bg-zinc-900 flex items-center justify-center text-[10px] font-bold text-white shrink-0 border border-zinc-800">
                  Q
                </div>
                <div className="rounded-2xl bg-white border border-gray-200 px-2.5 py-1.5 text-[10px] text-gray-800 leading-snug shadow-sm">
                  Test completed successfully!
                </div>
              </div>

            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-2 text-[9px] text-gray-500 space-y-0.5 shadow-sm">
              <div>
                <span className="text-gray-400">File</span>{' '}
                <span className="text-gray-900 font-mono">…/SportsNikeBrandFilterTest.kt</span>
              </div>
              <div>
                <span className="text-gray-400">Branch</span> <span className="text-gray-800">main</span> ·{' '}
                <span className="text-gray-400">Created</span> <span className="text-gray-800">12/04/2026</span>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-1.5 flex flex-col shadow-sm shrink-0">
              <div className="flex items-baseline justify-between gap-2 mb-1">
                <span className="text-[9px] font-semibold text-gray-900">Modify test</span>
                <span className="text-[8px] text-gray-500 shrink-0">Plain English to the AI</span>
              </div>
              <textarea
                value={modifyText}
                onChange={(e) => setModifyText(e.target.value)}
                rows={2}
                className="w-full min-h-0 h-[2.75rem] rounded border border-gray-300 bg-white px-1.5 py-1 text-[9px] leading-snug text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-500/20 focus:border-neutral-500 resize-none"
                placeholder="Describe what to change…"
              />
              <div className="flex gap-1.5 mt-1.5">
                <button
                  type="button"
                  onClick={onApply}
                  className="text-[9px] font-medium rounded-md bg-slate-800 text-white px-2 py-0.5 hover:bg-slate-900 transition-colors"
                >
                  Apply changes
                </button>
                <button
                  type="button"
                  onClick={() => setModifyText('')}
                  className="text-[9px] text-gray-500 px-1.5 py-0.5 rounded border border-gray-200 bg-white hover:bg-gray-50"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          {/* Right: tabs + code / steps (lite) */}
          <div className="flex flex-col flex-1 min-h-0 p-2 md:p-3 bg-white min-h-[18rem]">
            <div className="flex items-center gap-2 mb-2 border-b border-gray-200 pb-2">
              <button
                type="button"
                onClick={() => setTab('code')}
                className={`text-[10px] font-medium px-2 py-1 rounded-b border-b-2 -mb-px transition-colors ${
                  tab === 'code'
                    ? 'text-gray-900 border-amber-400'
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                Code (1)
              </button>
              <button
                type="button"
                onClick={() => setTab('steps')}
                className={`text-[10px] font-medium px-2 py-1 rounded-b border-b-2 -mb-px transition-colors ${
                  tab === 'steps'
                    ? 'text-gray-900 border-amber-400'
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                Steps ({STEPS.length})
              </button>
            </div>

            {tab === 'code' && (
              <div className="flex min-h-[14rem] flex-1 flex-col rounded-lg border border-gray-200 bg-gray-50/50 overflow-hidden">
                <div className="flex items-center justify-between gap-2 px-2.5 py-1.5 border-b border-gray-200 bg-white text-[9px] text-gray-500 shrink-0">
                  <span className="text-gray-800 font-medium">Test code</span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">Kotlin</span>
                    <button
                      type="button"
                      onClick={copyKotlin}
                      className="text-[8px] font-medium text-gray-600 hover:text-gray-900 rounded px-1.5 py-0.5 border border-gray-200 bg-white hover:border-gray-300"
                    >
                      {copyHint === 'copied' ? 'Copied' : copyHint === 'err' ? 'Copy failed' : 'Copy'}
                    </button>
                  </div>
                </div>
                <div className="min-h-0 max-h-64 flex-1 overflow-y-auto p-2.5 sm:max-h-80 bg-white text-slate-800">
                  {KOTLIN_SNIPPET.split('\n').map((line, i) => {
                    let c = 'text-slate-800';
                    if (line.trim().startsWith('//')) c = 'text-slate-500';
                    if (line.includes('validate') || line.includes('class ') || line.includes('override')) c = 'text-slate-800';
                    if (line.includes('clickOn') || line.includes('scrollScreen') || line.includes('launchApp'))
                      c = 'text-violet-800';
                    return (
                      <CodeLine key={i} className={c}>
                        {line || ' '}
                      </CodeLine>
                    );
                  })}
                </div>
              </div>
            )}

            {tab === 'steps' && (
              <div className="flex-1 flex gap-2 min-h-0">
                <div className="shrink-0 flex flex-col items-center justify-start rounded-lg bg-gray-100/90 p-1.5 border border-gray-200">
                  <PhoneMock baselineFile={step.baselineFile} screen={step.screen} />
                </div>
                <div className="flex-1 min-w-0 overflow-y-auto pr-0.5 space-y-1 max-h-52 md:max-h-80 rounded-r-lg border border-gray-200 bg-gray-50/90 p-1.5">
                  {STEPS.map((s, i) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => {
                        setActiveStep(i);
                        setTab('steps');
                      }}
                      className={`w-full text-left rounded-md px-1.5 py-1.5 text-[9px] transition-colors ${
                        i === activeStep
                          ? 'bg-white shadow-sm ring-1 ring-amber-300 text-gray-900'
                          : 'text-gray-600 hover:bg-white/80 hover:text-gray-900'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`h-1.5 w-1.5 rounded-sm shrink-0 ${
                            i <= activeStep ? 'bg-emerald-500' : 'bg-gray-300'
                          }`}
                        />
                        <span className="font-medium truncate">{s.title}</span>
                      </div>
                      <div className="text-[8px] text-teal-600/90 mt-0.5 pl-2.5">Complete</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
{/* 
            {tab === 'steps' && (
              <form onSubmit={onComposerSend} className="mt-2 flex items-end gap-1">
                <div className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-2 py-1 flex items-center gap-1">
                  <span className="text-[8px] text-gray-400 shrink-0">Agent</span>
                  <input
                    type="text"
                    value={composerText}
                    onChange={(e) => setComposerText(e.target.value)}
                    className="flex-1 min-w-0 bg-transparent text-[9px] text-gray-800 placeholder-gray-400 focus:outline-none"
                    placeholder="Plan, search, improve tests…"
                  />
                  <button
                    type="submit"
                    className="shrink-0 h-5 w-5 rounded border border-gray-200 bg-white text-gray-800 flex items-center justify-center text-[10px] hover:bg-gray-50"
                    aria-label="Send"
                  >
                    ↑
                  </button>
                </div>
              </form>
            )} */}
          </div>
        </div>

        <div className="border-t border-gray-200 bg-gray-50/90 px-3 py-1.5 flex items-center justify-between text-[9px] text-gray-500">
          <span>Test saved successfully!</span>
          <span className="text-[8px] font-medium text-teal-800 bg-[#79b9a6]/25 border border-[#79b9a6]/40 rounded px-2 py-0.5">
            Saved!
          </span>
        </div>
        </div>
      </section>
    </div>
  );
};

export default HeroInteractiveDemo;
