import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal';
import Logo from './Logo';

type HeaderProps = { variant?: 'default' | 'heroDark' };

const Header: React.FC<HeaderProps> = ({ variant = 'default' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dark = variant === 'heroDark';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = dark
    ? 'text-slate-300 hover:text-white'
    : 'text-gray-600 hover:text-gray-900';

  return (
    <>
      <header
        className={`z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          dark
            ? 'absolute inset-x-0 top-0 bg-slate-950/40 border-b border-white/5 backdrop-blur-md'
            : `sticky top-0 bg-white/80 backdrop-blur-md border-b ${
                scrolled ? 'border-gray-200 shadow-sm' : 'border-transparent'
              }`
        }`}
      >
        <div className="container-max">
          <div className="flex items-center justify-between py-4">
            <Link to="/" aria-label="Quent Labs home">
              <Logo light={dark} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="/#products" className={`font-display font-medium transition-colors ${linkClass}`}>
                Products
              </a>
              <Link to="/case-studies" className={`font-display font-medium transition-colors ${linkClass}`}>
                Case studies
              </Link>
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className={
                  dark
                    ? 'font-display font-semibold py-2.5 px-5 rounded-full bg-white text-slate-900 hover:bg-slate-200 transition-colors'
                    : 'btn-primary py-2.5 px-5'
                }
              >
                Contact Us
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 ${dark ? 'text-white' : 'text-gray-900'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
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
                <a
                  href="/#products"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block font-display font-medium ${linkClass}`}
                >
                  Products
                </a>
                <Link to="/case-studies" className={`block font-display font-medium ${linkClass}`}>
                  Case studies
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsContactOpen(true);
                  }}
                  className={
                    dark
                      ? 'block text-center w-full font-display font-semibold py-2.5 px-5 rounded-full bg-white text-slate-900'
                      : 'btn-primary w-full'
                  }
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
      {isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
    </>
  );
};

export default Header;
