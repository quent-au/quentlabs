import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { ABN } from '../config/business';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ink px-4 text-gray-400 sm:px-6 lg:px-8">
      <div className="container-max">
        <div className="flex flex-col items-center justify-between gap-8 py-14 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <Link to="/" className="inline-block" aria-label="QuentLabs home">
              <Logo light />
            </Link>
            <p className="mt-4">
              bSpoke is a platform where you connect your existing tools, build new ones, or use ready-made
              capabilities like Voice AI that takes calls, makes bookings, takes deposits and answers questions
              your way. Or just tell us the tool you need, and we'll have it up and running for you.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium">
            <a href="/#products" className="transition-colors hover:text-white">What we do</a>
            <Link to="/case-studies" className="transition-colors hover:text-white">Case studies</Link>
            <a href="/#about" className="transition-colors hover:text-white">About</a>
            <a href="/card/" className="transition-colors hover:text-white">Voice AI card</a>
            <a href="mailto:abhi@quentlabs.com" className="transition-colors hover:text-white">abhi@quentlabs.com</a>
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-center text-sm text-gray-500 md:flex-row md:justify-between md:text-left">
          <span>© {new Date().getFullYear()} QuentLabs. All rights reserved.</span>
          <span>ABN {ABN}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
