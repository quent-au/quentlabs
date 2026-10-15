import React from 'react';
import { Link } from 'react-router-dom';

/** Loom embed paths (full URL after /embed/ or the full embed URL). Empty = placeholder. */
const LOOM_EMBED_GENERATION = 'https://www.loom.com/embed/23413db509de4b35867d8b5895662cf9';
const LOOM_EMBED_CI = 'https://www.loom.com/embed/195c2af69915427ea25c541c7e82af2f';
const LOOM_EMBED_MAINTENANCE = 'https://www.loom.com/embed/643bec8af61b4f56bc9aa597a18efc11';

/** Loom’s responsive wrapper ratio; adjust per video if Loom gives a different value. */
const LOOM_PADDING_BOTTOM = '64.98194945848375%';

type LoomEmbedProps = {
  src: string;
  title: string;
};

const LoomEmbed: React.FC<LoomEmbedProps> = ({ src, title }) => (
  <div
    className="rounded-xl overflow-hidden shadow-sm"
    style={{ position: 'relative', paddingBottom: LOOM_PADDING_BOTTOM, height: 0 }}
  >
    <iframe
      src={src}
      title={title}
      frameBorder={0}
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    />
  </div>
);

type EmbedPlaceholderProps = {
  label: string;
};

const EmbedPlaceholder: React.FC<EmbedPlaceholderProps> = ({ label }) => (
  <div className="rounded-xl overflow-hidden bg-gray-100 border border-dashed border-gray-300 aspect-video flex flex-col items-center justify-center gap-2 p-6 text-center">
    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
    <p className="text-sm font-medium text-gray-600">{label}</p>
    <p className="text-xs text-gray-500 max-w-xs">
      Paste the Loom embed URL into the matching constant at the top of this file.
    </p>
  </div>
);

const InstantScriptsCaseStudyPage: React.FC = () => {
  return (
    <div className="section-padding">
      <div className="container-max max-w-3xl">
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/case-studies" className="hover:text-gray-800">
            Case studies
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">InstantScripts</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Quent for InstantScripts</h1>
        <p className="text-lg text-gray-600 mb-12">
          The short videos below show how Quent integrates with InstantScripts: from using AI to create tests, to receiving CI feedback on every pull request, and maintaining a reliable suite on GitHub over time.
        </p>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Generating tests</h2>
            <p className="text-gray-600 mb-6">
              Describe flows in plain language and let Quent propose executable tests for your app—so you
              spend less time on boilerplate and more time on what to validate.
            </p>
            {LOOM_EMBED_GENERATION ? (
              <LoomEmbed src={LOOM_EMBED_GENERATION} title="Generating tests with Quent" />
            ) : (
              <EmbedPlaceholder label="Video: generating tests" />
            )}
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Integration with CI</h2>
            <p className="text-gray-600 mb-6">
              Wire Quent into your pipeline so every PR gets immediate feedback—see pass/fail and quality
              signal before merge, without leaving your review flow.
            </p>
            {LOOM_EMBED_CI ? (
              <LoomEmbed src={LOOM_EMBED_CI} title="CI integration and PR feedback" />
            ) : (
              <EmbedPlaceholder label="Video: CI and PR feedback" />
            )}
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Maintenance agent</h2>
            <p className="text-gray-600 mb-6">
              When the product changes, the maintenance agent keeps your tests aligned by suggesting updates while keeping a human in the loop before applying changes.
            </p>
            {LOOM_EMBED_MAINTENANCE ? (
              <LoomEmbed src={LOOM_EMBED_MAINTENANCE} title="Maintenance agent" />
            ) : (
              <EmbedPlaceholder label="Video: maintenance agent" />
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default InstantScriptsCaseStudyPage;
