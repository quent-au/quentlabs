import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type HeaderProps = { variant?: 'default' | 'heroDark' };

const Header: React.FC<HeaderProps> = ({ variant = 'default' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dark = variant === 'heroDark';

  const scrollToBeta = () => {
    const element = document.getElementById('ready-to-transform');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Development Preview Banner */}
      {/* <div className="bg-primary-800 text-white text-center py-2 text-sm">
        This is a temporary development preview and will be removed for production. Do not use this for mission critical applications.
      </div> */}
      
      {/* Main Header */}
      <header
        className={`z-50 ${
          dark
            ? 'absolute inset-x-0 top-0 bg-slate-950/40 border-b border-white/5 backdrop-blur-md'
            : 'bg-white shadow-sm sticky top-0'
        }`}
      >
        <div className="container-max">
          <div className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  dark ? 'bg-white text-slate-900' : 'bg-black'
                }`}
              >
                <svg
                  className={`w-5 h-5 ${dark ? 'text-slate-900' : 'text-white'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>Quent Labs</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* <a
                href="#showcase"
                className={
                  dark
                    ? 'text-slate-300 hover:text-white transition-colors'
                    : 'text-gray-600 hover:text-gray-900 transition-colors'
                }
              >
                How it Works
              </a> */}
              <a
                href="https://github.com/quent-au/quent/releases/"
                className={`${
                  dark
                    ? 'text-slate-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                } transition-colors flex items-center gap-1`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Downloads
              </a>
              <button
                onClick={scrollToBeta}
                className={
                  dark
                    ? 'font-semibold py-2.5 px-5 rounded-lg bg-white text-slate-900 hover:bg-slate-200 transition-colors'
                    : 'btn-primary'
                }
              >
                Book a Demo
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 ${dark ? 'text-white' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              className={`md:hidden border-t ${
                dark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'
              }`}
            >
              <div className="px-4 py-4 space-y-4">
                {/* <a
                  href="#showcase"
                  className={`block ${dark ? 'text-slate-200 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  How it Works
                </a> */}
                <a
                  href="https://github.com/quent-au/quent/releases/"
                  className={`block ${dark ? 'text-slate-200 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  Downloads
                </a>
                <button
                  onClick={scrollToBeta}
                  className={dark ? 'w-full font-semibold py-2.5 px-5 rounded-lg bg-white text-slate-900' : 'btn-primary w-full'}
                >
                  Book a Demo
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
