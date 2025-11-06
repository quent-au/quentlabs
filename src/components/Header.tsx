import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container-max">
          <div className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Quent Labs</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#product" className="text-gray-600 hover:text-gray-900 transition-colors">Product</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How it Works</a>
              <button 
                onClick={scrollToBeta}
                className="btn-primary"
              >
                Get Started
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-4 py-4 space-y-4">
                <a href="#product" className="block text-gray-600 hover:text-gray-900">Product</a>
                <a href="#how-it-works" className="block text-gray-600 hover:text-gray-900">How it Works</a>
                <button 
                  onClick={scrollToBeta}
                  className="btn-primary w-full"
                >
                  Get Started
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
