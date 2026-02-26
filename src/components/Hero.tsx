import React from 'react';

const Hero: React.FC = () => {
  const scrollToBeta = () => {
    const element = document.getElementById('ready-to-transform');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            The Testing Agent for{' '}
            <span className="text-accent-600">Web, Android & iOS</span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Write tests in plain English. Quent turns your descriptions into runnable tests—no heaps of assertions, 
            no brittle code. Use AI to validate your app the way a human would see it, and fix failures fast with the Maintenance Agent.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center mb-12">
            <button 
              onClick={scrollToBeta}
              className="btn-primary text-lg px-8 py-4"
            >
              Get Started
            </button>
          </div>
          
          {/* Supporting Features */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600 flex-wrap">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Plain English tests</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>AI validation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Quent Analyze — fix failures fast</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
