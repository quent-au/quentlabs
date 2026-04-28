import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudiesIndexPage: React.FC = () => {
  return (
    <div className="section-padding">
      <div className="container-max max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Case studies</h1>
        <p className="text-lg text-gray-600 mb-10">
          How teams use Quent to ship with confidence. Pick a story to watch short walkthroughs.
        </p>
        <ul className="space-y-4">
          <li>
            <Link
              to="/case-studies/instant-scripts"
              className="block rounded-xl border border-gray-200 p-6 hover:border-gray-400 hover:shadow-md transition-all"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">InstantScripts</h2>
              <p className="text-gray-600">
                Testing and quality at PR level—generation, CI feedback, and keeping tests current with
                GitHub.
              </p>
              <span className="mt-3 inline-block text-gray-900 font-medium text-sm">View →</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CaseStudiesIndexPage;
