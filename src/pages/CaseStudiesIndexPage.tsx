import React from 'react';
import CaseStudyCard from '../components/CaseStudyCard';
import { caseStudies } from '../data/caseStudies';

const CaseStudiesIndexPage: React.FC = () => {
  return (
    <div className="section-padding">
      <div className="container-max max-w-5xl">
        <p className="eyebrow">Selected work</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">Case studies</h1>
        <p className="mt-4 mb-12 max-w-2xl text-lg text-gray-600">
          Products we've built with partners and the teams that use them.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {caseStudies.map((s) => (
            <CaseStudyCard key={s.slug} study={s} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesIndexPage;
