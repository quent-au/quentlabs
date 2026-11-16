import React from 'react';
import { Link } from 'react-router-dom';
import { CaseStudySummary } from '../data/caseStudies';

const CaseStudyCard: React.FC<{ study: CaseStudySummary }> = ({ study }) => (
  <Link
    to={`/case-studies/${study.slug}`}
    className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/70"
  >
    <p className="eyebrow">{study.client}</p>
    <h3 className="mt-3 text-2xl font-semibold text-gray-900">{study.title}</h3>
    <p className="mt-4 flex-grow leading-relaxed text-gray-600">{study.summary}</p>
    <div className="mt-6 flex flex-wrap gap-2">
      {study.tags.map((t) => (
        <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
          {t}
        </span>
      ))}
    </div>
    <span className="mt-8 inline-flex items-center gap-1.5 font-display font-semibold text-gray-900">
      Read the case study
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
    </span>
  </Link>
);

export default CaseStudyCard;
