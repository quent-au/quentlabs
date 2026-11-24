import React, { useState } from 'react';
import ContactModal from './ContactModal';
import BrowserFrame from './BrowserFrame';
import GoogleReviewsBadge from './GoogleReviewsBadge';

const CompanyHero: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-cream px-4 pt-16 pb-20 sm:px-6 md:pt-24 md:pb-28 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-gold-light/20 blur-3xl"
      />

      <div className="container-max relative grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
        <div className="text-center lg:text-left">
          <p className="eyebrow">AI for small business · Melbourne</p>
          <h1 className="mt-5 text-5xl font-medium leading-[1.05] md:text-6xl">
            Software that works the way <em className="font-normal text-gold">your business</em> does.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-600 lg:mx-0">
            Start with bSpoke, our ready-made toolkit for salons, spas and restaurants, with a Voice AI
            receptionist that answers every call. Or have us build something custom, like Aewa.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#products" className="btn-primary px-7 py-3.5">
              See what we do
              <span aria-hidden="true">→</span>
            </a>
            <button type="button" onClick={() => setIsContactOpen(true)} className="btn-secondary px-7 py-3.5">
              Talk to us
            </button>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            Hear the Voice AI now:{' '}
            <a href="tel:+61347090759" className="font-medium text-ink underline decoration-gray-300 underline-offset-4 hover:decoration-ink">
              +61 3 4709 0759
            </a>
          </p>
          <div className="mt-5">
            <GoogleReviewsBadge />
          </div>
        </div>

        <div className="relative mx-auto aspect-[5/4] w-full max-w-xl">
          <div className="absolute left-0 top-0 w-[82%]">
            <BrowserFrame src="/images/offers/bspoke-screen.jpg" url="bspoke" alt="The bSpoke sign-in screen" />
            <span className="absolute -top-3 left-4 rounded-full bg-ink px-3 py-1 text-xs font-medium text-white shadow">
              bSpoke · Ready-made
            </span>
          </div>
          <div className="absolute bottom-0 right-0 w-[70%]">
            <BrowserFrame src="/images/offers/aewa-screen.jpg" url="aewa.au" alt="The Aewa landing page" />
            <span className="absolute -bottom-3 right-4 rounded-full bg-white px-3 py-1 text-xs font-medium text-ink shadow ring-1 ring-black/5">
              Aewa · Custom build
            </span>
          </div>
        </div>
      </div>
      {isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
    </section>
  );
};

export default CompanyHero;
