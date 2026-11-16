import React from 'react';
import { Link } from 'react-router-dom';

const facts = [
  { label: 'Partner', value: 'Amanda' },
  { label: 'Product', value: 'Aewa, AI accent coach' },
  { label: 'Our role', value: 'Product, design & engineering' },
  { label: 'Status', value: 'Live in beta · 25+ students' },
];

const sections = [
  {
    heading: 'The challenge',
    body: [
      'Amanda knew first-hand how much confidence a clear, natural Australian accent gives people, at work, in interviews and in everyday conversation. Even with one-to-one coaching, students still need to practise words and phrases on their own between sessions. Without a coach in the room, the only judge of how they sound is themselves.',
      'Aewa closes that gap: its AI coach listens and validates how each sound is spoken, so students get reliable feedback every time they practise, not just during a session.',
    ],
  },
  {
    heading: 'How we worked together',
    body: [
      'Amanda brought the coaching expertise: which sounds learners struggle with, how to explain them, and what good feedback actually sounds like. Quent Labs brought the product thinking and the engineering to turn that into software.',
      'We worked in short loops: build a small slice, put it in front of Amanda and real learners, listen, and refine. That kept the product grounded in how coaching really works rather than what is technically impressive.',
    ],
  },
];

const built = [
  {
    title: 'Guided practice',
    text: 'Structured exercises that walk learners through the sounds and phrases that matter most for an Australian accent.',
  },
  {
    title: 'AI sound validation',
    text: 'Learners speak, and Aewa’s AI coach checks how each sound was produced and what to adjust, so practice is never a guessing game.',
  },
  {
    title: 'Practise anywhere',
    text: 'A web app that works on phone or laptop, so learners can fit a few minutes of practice into their day.',
  },
];

const AewaCaseStudyPage: React.FC = () => (
  <article>
    <header className="relative overflow-hidden border-b border-gray-100 px-4 pt-14 pb-16 sm:px-6 md:pt-20 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
      />
      <div className="container-max relative max-w-4xl">
        <nav className="mb-8 text-sm text-gray-500">
          <Link to="/case-studies" className="hover:text-gray-800">
            Case studies
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Aewa</span>
        </nav>
        <p className="eyebrow">Case study · Aewa</p>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-gray-900 md:text-6xl">
          Building Aewa with Amanda: an AI coach for the Australian accent
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
          How Quent Labs partnered with Amanda to turn her accent-coaching expertise into an AI product
          that people can practise with anytime.
        </p>

        <dl className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="rounded-2xl border border-gray-200 bg-white px-5 py-4">
              <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">{f.label}</dt>
              <dd className="mt-1 font-display font-semibold text-gray-900">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>

    <div className="section-padding">
      <div className="container-max max-w-3xl space-y-16">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">{s.heading}</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-gray-600">
              {s.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </section>
        ))}

        <section>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">What we built</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {built.map((b, i) => (
              <div key={b.title} className="rounded-3xl border border-gray-200 p-6">
                <span className="font-display text-sm font-semibold text-gray-300">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-semibold text-gray-900">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Where it is now</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Aewa is live in beta at aewa.au with over 25 students using it, and we keep improving it with Amanda based on what learners
            tell us. The partnership is a model for how Quent Labs likes to work: a domain expert who
            knows the problem deeply, paired with a team that can ship the AI product around it.
          </p>
        </section>

        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-gray-900 px-8 py-10 text-center text-white md:flex-row md:text-left">
          <div>
            <h3 className="text-2xl font-semibold">Have expertise worth turning into a product?</h3>
            <p className="mt-2 text-gray-300">Let's talk about building it together.</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href="https://aewa.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-6 py-3 font-display font-semibold transition-colors hover:bg-white hover:text-gray-900"
            >
              Visit aewa.au
            </a>
            <a
              href="mailto:abhi@quentlabs.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-display font-semibold text-gray-900 transition-colors hover:bg-gray-200"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  </article>
);

export default AewaCaseStudyPage;
