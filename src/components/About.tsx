import React from 'react';
import { ABN } from '../config/business';

const highlights = [
  { label: 'Experience', value: '15+ years' },
  { label: 'Founder', value: 'QuentLabs' },
  { label: 'Giants', value: 'Cohort 10 founder' },
  { label: 'Based in', value: 'Melbourne' },
];

const About: React.FC = () => (
  <section id="about" className="section-padding scroll-mt-16 bg-white">
    <div className="container-max grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="relative mx-auto w-64 sm:w-72 lg:w-80">
        <div aria-hidden="true" className="absolute inset-0 -z-10 scale-110 rounded-full bg-gray-200/70 blur-3xl" />
        <img
          src="/images/abhi-iyer.jpg"
          alt="Abhi Iyer, founder of Quent Labs"
          width={520}
          height={520}
          loading="lazy"
          className="aspect-square w-full rounded-full object-cover shadow-2xl shadow-gray-300/60 ring-8 ring-white"
        />
      </div>

      <div className="text-center lg:text-left">
        <p className="eyebrow">About me</p>
        <h2 className="mt-3 text-4xl font-medium md:text-5xl">
          Hi, I'm Abhi.
        </h2>
        <div className="mx-auto mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-gray-600 lg:mx-0">
          <p>
            I'm a software engineer with over 15 years of experience, and I started QuentLabs in
            Melbourne to put that experience to work for local businesses. I've built{' '}
            <a
              href="https://aewa.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900"
            >
              Aewa
            </a>
            , an AI accent coach, with an Australian English teacher.
          </p>
          <p>
            Now I'm helping small businesses, whether it's a salon, spa or restaurant, handle their calls
            with Voice AI and customise it to fit how they work.
          </p>
        </div>

        <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-0">
          {highlights.map((h) => (
            <div key={h.label} className="rounded-xl border border-gray-200 bg-cream/60 px-5 py-4 text-left">
              <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">{h.label}</dt>
              <dd className="mt-1 text-lg font-semibold text-ink">{h.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
          <a href="mailto:abhi@quentlabs.com" className="btn-primary">
            Email me
          </a>
          <a href="/card/" className="btn-secondary">
            My digital card
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-500">ABN {ABN}</p>
      </div>
    </div>
  </section>
);

export default About;
