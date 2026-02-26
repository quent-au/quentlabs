import React from 'react';

const IMAGES = {
  plainEnglish: '/images/AI_Test.png',
  aiValidate1: '/images/AI_Validate-3d89323e-fbb2-4817-bba9-4eeb437e7879.png',
  aiValidate2: '/images/AI_Validate-5bcf1ee3-9dad-4e96-a05e-6fd78883e8a3.png',
  failureAnalysis: '/images/AI_Failure_Analysis-e240c502-f992-4ac5-9478-90ee1b7f1d66.png',
  analyzeWithQuent: '/images/AI_Analyse-c346bc10-bd4b-4b32-bf33-ba4f41fe5d78.png',
};

const FeatureStep = ({
  step,
  icon,
  title,
  accent = 'primary',
}: {
  step: number;
  icon: string;
  title: string;
  accent?: 'primary' | 'accent';
}) => (
  <div
    className={`inline-flex items-center gap-3 rounded-full px-4 py-2 mb-6 ${
      accent === 'accent' ? 'bg-accent-100 text-accent-700' : 'bg-primary-100 text-primary-700'
    }`}
  >
    <span
      className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
        accent === 'accent' ? 'bg-accent-600 text-white' : 'bg-primary-600 text-white'
      }`}
    >
      {step}
    </span>
    <span className="text-lg font-semibold">{icon} {title}</span>
  </div>
);

const ProductShowcase: React.FC = () => {
  return (
    <section id="showcase" className="relative section-padding overflow-hidden">
      {/* Subtle background gradient mesh */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-accent-50/20" />
      <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent-200/40 blur-3xl" />

      <div className="container-max relative">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="inline-block rounded-full bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 mb-6">
            How it works
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            How Quent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From plain English to AI validation and failure analysis—all in one testing agent.
          </p>
        </div>

        {/* 1. Plain English */}
        <div className="mb-24 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <FeatureStep step={1} icon="✍️" title="Write tests in plain English" accent="primary" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                Define actions & validations in natural language
              </h3>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Define <strong className="text-gray-800">ACTIONS</strong> and <strong className="text-gray-800">VALIDATIONS</strong> in natural language.
                The AI turns your description into a runnable test and executes steps to achieve your goals—no code required to get started.
              </p>
              <p className="text-gray-600 leading-relaxed">
                See the execution log, captures, and generated test code in one place. Modify or copy the code when you need full control.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-400/20 to-accent-400/20 blur opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-gray-200/80 bg-white shadow-xl shadow-gray-200/50 ring-1 ring-gray-100">
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-gray-500 font-medium ml-2">Quent — Test creation</span>
                </div>
                <img
                  src={IMAGES.plainEnglish}
                  alt="Quent test creation: plain English actions and validations with AI-driven execution log"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2. AI Validate */}
        <div className="mb-24 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="relative group order-1 lg:order-1">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent-400/20 to-primary-400/20 blur opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-gray-200/80 bg-white shadow-xl shadow-gray-200/50 ring-1 ring-gray-100">
                <img
                  src={IMAGES.aiValidate1}
                  alt="Quent test interface with plain English actions and validations"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="order-2 lg:order-2">
              <FeatureStep step={2} icon="👁️" title="AI validates like a human would" accent="accent" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                One <code className="rounded-lg bg-accent-100 px-2.5 py-1 text-accent-700 font-semibold text-lg">validate</code> call, not dozens of assertions
              </h3>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Use plain English checks: “4 products displayed”, “Women filter checkbox is checked”, “all products are Women’s”.
                The AI interprets your page the way a user would.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Fewer lines, fewer flaky failures, and validations that match how you’d describe the screen to a teammate.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Failure analysis */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-16">
            <div>
              <FeatureStep step={3} icon="🤖" title="When tests fail — Analyze with Quent AI" accent="accent" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                Understand failures and fix tests in plain language
              </h3>
              <p className="text-gray-600 mb-5 leading-relaxed">
                The dashboard shows each test run and step. When something fails, you see the error and the screen at the point of failure.
                Hit <strong className="text-gray-800">Analyze with Quent</strong> for a clear summary (e.g. “UI Changed”, timeout reasons) and suggested fixes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Tell the AI what to change in plain language (“use the new data-test-id”, “wait for the modal first”) and apply updates so tests stay in sync with your app.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent-400/20 to-primary-400/20 blur opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-gray-200/80 bg-white shadow-xl shadow-gray-200/50 ring-1 ring-gray-100">
                <img
                  src={IMAGES.analyzeWithQuent}
                  alt="Failed test run with Analyze with Quent button for failure analysis"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border-2 border-accent-200/60 bg-white shadow-xl shadow-accent-200/20 ring-1 ring-accent-100">
              <div className="bg-gradient-to-r from-accent-50 to-primary-50 px-5 py-3 flex items-center gap-2 border-b border-accent-200/60">
                <span className="text-accent-600 font-semibold">Failure Analysis</span>
                <span className="text-xs text-gray-500">— Modify test with AI</span>
              </div>
              <img
                src={IMAGES.failureAnalysis}
                alt="Failure Analysis: summary, Modify Test input, and Apply Changes"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
