import React, { useEffect, useState } from 'react';
import HeroInteractiveDemo from './HeroInteractiveDemo';

const RELEASES_API = 'https://api.github.com/repos/quent-au/quent/releases/latest';
const RELEASES_PAGE = 'https://github.com/quent-au/quent/releases/latest';

const Hero: React.FC = () => {
  const [dmgUrl, setDmgUrl] = useState<string>(RELEASES_PAGE);
  const [version, setVersion] = useState<string | null>(null);

  useEffect(() => {
    fetch(RELEASES_API)
      .then((r) => r.json())
      .then((data) => {
        if (data.tag_name) setVersion(data.tag_name);
        const dmg = data.assets?.find((a: { name: string }) => a.name.endsWith('.dmg'));
        if (dmg) setDmgUrl(dmg.browser_download_url);
      })
      .catch(() => {});
  }, []);

  const scrollToBeta = () => {
    const element = document.getElementById('ready-to-transform');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-gray-50/80 text-gray-900 min-h-[70vh] flex flex-col">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 70% at 50% -20%, rgba(0, 0, 0, 0.04), transparent 55%),
            radial-gradient(ellipse 80% 50% at 100% 30%, rgba(0, 0, 0, 0.03), transparent 50%),
            radial-gradient(ellipse 60% 40% at 0% 80%, rgba(0, 0, 0, 0.025), transparent 45%)
          `,
        }}
      />

      <div className="relative z-10 flex-1 flex flex-col pt-6 md:pt-10 pb-10 md:pb-14">
        <div className="container-max w-full px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-[20rem] sm:max-w-md md:max-w-lg text-left">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 leading-snug [text-wrap:balance]">
              Built to catch bugs before they ship. Quent is the easiest way to run tests on every PR.
            </h1>

            <div className="mt-5 flex flex-col sm:flex-row sm:flex-wrap sm:justify-start gap-2.5 sm:gap-3">
            <a
              href={dmgUrl}
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-black text-white font-medium text-sm px-4 py-2.5 no-underline shadow-sm shadow-black/10 hover:bg-neutral-800 transition-colors w-full sm:w-auto"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Download for macOS
              {version && <span className="text-xs font-normal text-white/75">{version}</span>}
            </a>
            <button
              type="button"
              onClick={scrollToBeta}
              className="w-full sm:w-auto text-sm font-medium px-4 py-2.5 rounded-full border border-gray-300 bg-white text-gray-800 shadow-sm hover:bg-gray-50 transition-colors"
            >
              Book a demo
            </button>
            </div>
          </div>
        </div>

        <div className="container-max px-3 sm:px-6 lg:px-8 w-full">
          <HeroInteractiveDemo />
        </div>
      </div>
    </section>
  );
};

export default Hero;
