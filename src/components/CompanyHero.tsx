import React, { useState } from 'react';
import ContactModal from './ContactModal';

const badges = [
  { label: 'Voice AI', sub: 'Small business', className: '-left-6 top-10 sm:-left-12' },
  { label: 'Quent', sub: 'Test agent', className: '-right-4 top-1/2 sm:-right-10' },
  { label: 'Aewa', sub: 'Accent coach', className: 'left-6 -bottom-6 sm:left-10' },
];

const CompanyHero: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white px-4 pt-16 pb-24 sm:px-6 md:pt-24 md:pb-32 lg:px-8">
      {/* Subtle dot grid, faded toward the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <div className="container-max relative grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 font-display text-sm font-medium text-gray-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-gray-900" />
            An AI solutions company
          </span>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
            Practical AI for{' '}
            <span className="relative whitespace-nowrap text-gray-500">
              real-world
              <svg
                aria-hidden="true"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-gray-300"
              >
                <path d="M2 9 C 80 2, 220 2, 298 8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>{' '}
            problems
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl lg:mx-0">
            Quent Labs builds focused products that put AI to work for small businesses,
            engineering teams and learners.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#products" className="btn-primary px-8 py-4 text-lg">
              Explore our products
              <span aria-hidden="true">→</span>
            </a>
            <button type="button" onClick={() => setIsContactOpen(true)} className="btn-secondary px-8 py-4 text-lg">
              Talk to us
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-64 sm:w-80 lg:w-96">
          <div aria-hidden="true" className="absolute inset-0 -z-10 scale-110 rounded-full bg-gray-200/70 blur-3xl" />
          <img
            src="/logo.png"
            alt="Quent Labs Q logo"
            className="w-full rounded-[2.5rem] shadow-2xl shadow-gray-300/60 ring-1 ring-black/5"
          />
          {badges.map((b) => (
            <div
              key={b.label}
              className={`absolute rounded-2xl border border-gray-100 bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur ${b.className}`}
            >
              <p className="font-display text-sm font-semibold text-gray-900">{b.label}</p>
              <p className="text-xs text-gray-500">{b.sub}</p>
            </div>
          ))}
        </div>
      </div>
      {isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
    </section>
  );
};

export default CompanyHero;
