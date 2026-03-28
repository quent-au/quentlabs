import React, { useEffect, useState } from 'react';

const RELEASES_API = 'https://api.github.com/repos/quent-au/quent/releases/latest';
const RELEASES_PAGE = 'https://github.com/quent-au/quent/releases/latest';

const Hero: React.FC = () => {
  const [dmgUrl, setDmgUrl] = useState<string>(RELEASES_PAGE);
  const [version, setVersion] = useState<string | null>(null);

  useEffect(() => {
    fetch(RELEASES_API)
      .then(r => r.json())
      .then(data => {
        if (data.tag_name) setVersion(data.tag_name);
        const dmg = data.assets?.find((a: any) => a.name.endsWith('.dmg'));
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
    <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            The Testing Agent for{' '}
            <span className="text-accent-600">Web, Android & iOS</span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Write tests in plain English. Quent turns your descriptions into runnable tests—no heaps of assertions, 
            no brittle code. Use AI to validate your app the way a human would see it, and fix failures fast with the Maintenance Agent.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={dmgUrl}
              className="btn-primary text-lg px-8 py-4 flex items-center gap-2 no-underline"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download for macOS
              {version && <span className="text-sm opacity-75">{version}</span>}
            </a>
            <button 
              onClick={scrollToBeta}
              className="text-lg px-8 py-4 border border-gray-300 rounded-lg text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-colors"
            >
              Book a Demo
            </button>
          </div>
          
          {/* Supporting Features */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600 flex-wrap">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Plain English tests</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>AI validation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Quent Analyze — fix failures fast</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
