import React from 'react';
import BrowserFrame from './BrowserFrame';

const components = [
  'Voice AI receptionist',
  'Bookings',
  'Google Calendar',
  'SMS reminders',
  'Client profiles',
  'Team',
  'Timely',
];

const Products: React.FC = () => (
  <section id="products" className="scroll-mt-16 bg-white">
    <div className="section-padding">
      <div className="container-max">
        <div className="mb-14 max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-4 text-4xl font-medium md:text-5xl">
            Ready-made, or built <em className="font-normal text-gold">around you.</em>
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Two ways to work with us. Start with bSpoke today, or have us design and build something
            for the way your business runs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="flex flex-col rounded-2xl border border-gray-200 bg-cream/60 p-8 md:p-10">
            <p className="eyebrow">01 · Ready-made</p>
            <h3 className="mt-3 text-3xl font-medium">bSpoke</h3>
            <p className="mt-4 leading-relaxed text-gray-600">
              Your shop, tailored. An AI receptionist, bookings, reminders and the integrations you
              already use. Add only the components your business needs.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {components.map((c) => (
                <li
                  key={c}
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    c === 'Voice AI receptionist' ? 'bg-ink text-white' : 'bg-white text-gray-600 ring-1 ring-gray-200'
                  }`}
                >
                  {c}
                </li>
              ))}
            </ul>
            <BrowserFrame
              src="/images/offers/bspoke-screen.jpg"
              url="bspoke"
              alt="The bSpoke sign-in screen"
              className="mt-8"
            />
            <div className="mt-8 flex-grow" />
            <a href="mailto:abhi@quentlabs.com?subject=bSpoke" className="btn-primary w-full sm:w-auto sm:self-start">
              Ask about bSpoke <span aria-hidden="true">→</span>
            </a>
          </article>

          <article className="flex flex-col rounded-2xl border border-gray-200 bg-cream/60 p-8 md:p-10">
            <p className="eyebrow">02 · Custom build</p>
            <h3 className="mt-3 text-3xl font-medium">Custom solutions</h3>
            <p className="mt-4 leading-relaxed text-gray-600">
              Need something that fits the way you work? We design and build it with you. Aewa is one
              example: an Australian accent coach we built with an Australian English teacher.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {['Discovery', 'Design', 'Build', 'Launch and support'].map((c) => (
                <li key={c} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-200">
                  {c}
                </li>
              ))}
            </ul>
            <BrowserFrame src="/images/offers/aewa-screen.jpg" url="aewa.au" alt="The Aewa landing page" className="mt-8" />
            <div className="mt-8 flex-grow" />
            <a
              href="https://aewa.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto sm:self-start"
            >
              See Aewa live <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </div>
    </div>

    <div className="bg-ink px-4 sm:px-6 lg:px-8">
      <div className="container-max grid items-center gap-12 py-20 md:grid-cols-[1.1fr_1fr] md:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">A bSpoke component</p>
          <h2 className="mt-4 text-4xl font-medium !text-white md:text-5xl">
            Never miss <em className="font-normal text-gold-light">a call.</em>
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-gray-300">
            The Voice AI receptionist answers every call, books appointments and handles customer
            questions, so salons, spas and restaurants can stay focused on the customer in front of them.
          </p>
          <ul className="mt-8 grid max-w-lg grid-cols-1 gap-3 text-gray-300 sm:grid-cols-2">
            {['Answers 24/7', 'Books into your calendar', 'Handles common questions', 'Tailored to your shop'].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-light" />
                {f}
              </li>
            ))}
          </ul>
          <a
            href="tel:+61347090759"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold-light px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-white"
          >
            Call our test line: +61 3 4709 0759 <span aria-hidden="true">→</span>
          </a>
        </div>
        <img
          src="/images/offers/voice-ai.png"
          alt="A phone showing an incoming Voice AI call"
          width={1200}
          height={1200}
          loading="lazy"
          className="mx-auto w-full max-w-md rounded-2xl"
        />
      </div>
    </div>

    <div className="section-padding">
      <div className="container-max flex flex-col items-center justify-between gap-6 rounded-2xl border border-gray-200 px-8 py-10 text-center md:flex-row md:px-12 md:text-left">
        <div>
          <h3 className="text-2xl font-medium md:text-3xl">Not sure which fits?</h3>
          <p className="mt-2 text-gray-600">Tell us how your business runs and we'll suggest a starting point.</p>
        </div>
        <a href="mailto:abhi@quentlabs.com" className="btn-primary shrink-0">
          abhi@quentlabs.com
        </a>
      </div>
    </div>
  </section>
);

export default Products;
