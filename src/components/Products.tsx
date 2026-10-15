import React from 'react';

const products = [
  {
    name: 'Voice AI for Small Business',
    tag: 'Starting with hairdressing',
    description:
      'AI voice agents that answer calls, book appointments and handle customer questions, so small business owners can focus on their craft. We are starting with hair salons.',
    href: 'tel:+61347090759',
    cta: 'Call +61 3 4709 0759',
    note: 'Try our test line',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    ),
  },
  {
    name: 'Quent Test Agent',
    tag: 'Mobile test automation',
    description:
      'Write mobile tests in plain English. Quent turns text descriptions into scalable, low-maintenance mobile automation.',
    href: 'https://github.com/quent-au/quent/releases/',
    cta: 'Download Quent',
    external: true,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25l1.5 1.5 3-3" />
    ),
  },
  {
    name: 'Aewa',
    tag: 'AI accent coach',
    description:
      'Practise and improve your Australian accent with personalised, AI-powered coaching and feedback.',
    href: 'https://aewa.au/',
    cta: 'Visit aewa.au',
    external: true,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
    ),
  },
];

const Products: React.FC = () => (
  <section id="products" className="section-padding scroll-mt-16 bg-white">
    <div className="container-max">
      <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="eyebrow">Our products</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            AI built for specific jobs, done well.
          </h2>
        </div>
        <p className="max-w-sm text-lg text-gray-600">
          Three products, each solving one problem properly instead of everything halfway.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {products.map((p, i) => (
          <article
            key={p.name}
            className="group relative flex flex-col rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/70"
          >
            <div className="mb-8 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white transition-colors group-hover:bg-black">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                  {p.icon}
                </svg>
              </div>
              <span className="font-display text-sm font-semibold text-gray-300">0{i + 1}</span>
            </div>
            <p className="eyebrow">{p.tag}</p>
            <h3 className="mt-2 text-2xl font-semibold text-gray-900">{p.name}</h3>
            <p className="mt-4 flex-grow leading-relaxed text-gray-600">{p.description}</p>
            {p.note && <p className="mt-6 text-sm text-gray-500">{p.note}</p>}
            <a
              href={p.href}
              className={`btn-primary w-full ${p.note ? 'mt-2' : 'mt-8'}`}
              {...(p.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {p.cta}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </article>
        ))}
      </div>

      <div className="mt-20 flex flex-col items-center justify-between gap-6 rounded-3xl bg-gray-50 px-8 py-10 text-center ring-1 ring-gray-100 md:flex-row md:px-12 md:text-left">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 md:text-3xl">Questions or ideas?</h3>
          <p className="mt-2 text-gray-600">We'd love to hear what you're working on.</p>
        </div>
        <a href="mailto:abhi@quentlabs.com" className="btn-secondary shrink-0">
          abhi@quentlabs.com
        </a>
      </div>
    </div>
  </section>
);

export default Products;
