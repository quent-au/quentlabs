import React from 'react';

const offers = [
  {
    eyebrow: 'Custom builds',
    title: 'Built around your business',
    description:
      'We design and build AI products around how you work, like Aewa, the accent coach we built with Amanda.',
    image: '/images/offers/custom-solutions.png',
    alt: 'The Aewa landing page in a browser window under the headline Software built around your business',
    href: 'https://aewa.au/',
    cta: 'See aewa.au',
    external: true,
  },
  {
    eyebrow: 'Ready-made',
    title: 'Start today with bSpoke',
    description:
      'An AI receptionist, bookings, reminders and the integrations you already use. Add only what your shop needs.',
    image: '/images/offers/ready-made-bspoke.png',
    alt: 'The bSpoke sign-in screen with feature chips for Voice AI, bookings, Google Calendar and SMS reminders',
    href: 'mailto:abhi@quentlabs.com?subject=bSpoke',
    cta: 'Ask about bSpoke',
  },
  {
    eyebrow: 'Voice AI',
    title: 'Never miss a call',
    description:
      'A Voice AI receptionist that answers, books and follows up 24/7. Ring our test line and hear it for yourself.',
    image: '/images/offers/voice-ai.png',
    alt: 'A phone showing an incoming Voice AI call under the headline Never miss a call',
    href: 'tel:+61347090759',
    cta: 'Call +61 3 4709 0759',
  },
];

const Offerings: React.FC = () => (
  <section id="offerings" className="section-padding scroll-mt-16 bg-gray-50">
    <div className="container-max">
      <div className="mb-14 max-w-2xl">
        <p className="eyebrow">Work with us</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
          Custom-built, or ready to go.
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          We build custom solutions for your business, like Aewa. Or you can start with the tools we
          already have: bSpoke and our Voice AI number.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {offers.map((o) => (
          <article
            key={o.title}
            className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/70"
          >
            <img
              src={o.image}
              alt={o.alt}
              width={1200}
              height={1200}
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
            <div className="flex flex-grow flex-col p-8">
              <p className="eyebrow">{o.eyebrow}</p>
              <h3 className="mt-2 text-2xl font-semibold text-gray-900">{o.title}</h3>
              <p className="mt-4 flex-grow leading-relaxed text-gray-600">{o.description}</p>
              <a
                href={o.href}
                className="btn-primary mt-8 w-full"
                {...(o.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {o.cta}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Offerings;
