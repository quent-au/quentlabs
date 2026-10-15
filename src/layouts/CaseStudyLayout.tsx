import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const CaseStudyLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container-max">
          <div className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                Quent Labs
              </span>
            </Link>
            <Link
              to="/case-studies"
              className="text-sm font-medium text-gray-900 hover:text-gray-600"
            >
              Case studies
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyLayout;
