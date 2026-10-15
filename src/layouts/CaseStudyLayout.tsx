import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

const CaseStudyLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="container-max">
          <div className="flex items-center justify-between py-4">
            <Link to="/" aria-label="Quent Labs home" className="transition-opacity hover:opacity-80">
              <Logo />
            </Link>
            <Link
              to="/case-studies"
              className="font-display font-medium text-gray-600 hover:text-gray-900 transition-colors"
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
