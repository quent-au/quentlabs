import React from 'react';

const products = [
  {
    name: 'Voice AI for Small Business',
    tag: 'Starting with hairdressing',
    description:
      'AI voice agents that answer calls, book appointments and handle customer questions, so small business owners can focus on their craft. We are starting with hair salons.',
    href: 'tel:+61347090759',
    cta: 'Call our test number: +61 3 4709 0759',
    secondary: {
      href: 'mailto:abhi@quentlabs.com?subject=Voice%20AI%20for%20Small%20Business',
      label: 'Get in touch',
    },
  },
  {
    name: 'Quent Test Agent',
    tag: 'Mobile test automation',
    description:
      'Write mobile tests in plain English. Quent turns text descriptions into scalable, low-maintenance mobile automation.',
    href: 'https://github.com/quent-au/quent/releases/',
    cta: 'Download Quent',
    external: true,
  },
  {
    name: 'Aewa',
    tag: 'AI-assisted Australian accent coach',
    description:
      'Practise and improve your Australian accent with personalised, AI-powered coaching and feedback.',
    href: 'https://aewa.au/',
    cta: 'Visit aewa.au',
    external: true,
  },
];

const Products: React.FC = () => (
  <section id="products" className="section-padding bg-white">
    <div className="container-max">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
        <p className="text-lg text-gray-600">AI built for specific jobs, done well.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <div key={p.name} className="border border-gray-200 rounded-xl p-6 flex flex-col shadow-sm">
            <span className="text-sm font-medium text-accent-600 mb-2">{p.tag}</span>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{p.name}</h3>
            <p className="text-gray-600 mb-6 flex-grow">{p.description}</p>
            <a
              href={p.href}
              className="btn-primary text-center"
              {...(p.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {p.cta}
            </a>
            {p.secondary && (
              <a href={p.secondary.href} className="text-center text-accent-600 font-medium hover:underline mt-3">
                {p.secondary.label}
              </a>
            )}
          </div>
        ))}
      </div>
      <p className="text-center text-gray-600 mt-12">
        Questions or ideas? Reach out to us at{' '}
        <a href="mailto:abhi@quentlabs.com" className="text-accent-600 font-medium hover:underline">
          abhi@quentlabs.com
        </a>
      </p>
    </div>
  </section>
);

export default Products;
