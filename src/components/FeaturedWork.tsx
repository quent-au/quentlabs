import React from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import CaseStudyCard from './CaseStudyCard';

const FeaturedWork: React.FC = () => (
  <section id="work" className="section-padding scroll-mt-16 bg-cream">
    <div className="container-max">
      <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="eyebrow">Selected work</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Case studies
          </h2>
        </div>
        <Link to="/case-studies" className="btn-secondary shrink-0">
          All case studies
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {caseStudies.map((s) => (
          <CaseStudyCard key={s.slug} study={s} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedWork;
