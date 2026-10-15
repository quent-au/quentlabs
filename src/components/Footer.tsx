import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-100 bg-white px-4 sm:px-6 lg:px-8">
      <div className="container-max">
        <div className="flex flex-col items-center justify-between gap-6 py-12 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <Link to="/" className="inline-block" aria-label="Quent Labs home">
              <Logo />
            </Link>
            <p className="mt-4 text-gray-500">
              An AI solutions company building Voice AI for small business, the Quent test agent and the Aewa accent coach.
            </p>
          </div>
          <nav className="flex gap-8 font-display font-medium text-gray-600">
            <a href="/#products" className="hover:text-gray-900 transition-colors">Products</a>
            <Link to="/case-studies" className="hover:text-gray-900 transition-colors">Case studies</Link>
          </nav>
        </div>

        <div className="border-t border-gray-100 py-6 text-center text-sm text-gray-400 md:text-left">
          © {new Date().getFullYear()} Quent Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
