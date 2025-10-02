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
            Write Mobile Tests in{' '}
            <span className="text-accent-600">Plain English</span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Quent transforms your text descriptions into scalable mobile automation. 
            No more fragile tests, no more maintenance headaches. Just describe what you want to test, 
            and focus on building features.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center mb-12">
            <button 
              onClick={scrollToBeta}
              className="btn-primary text-lg px-8 py-4"
            >
              Install CLI
            </button>
          </div>
          
          {/* Demo Video */}
          <div className="max-w-4xl mx-auto mb-12">
            <div style={{ position: 'relative', paddingBottom: '58.63192182410424%', height: 0 }}>
              <iframe 
                src="https://www.loom.com/embed/f54f5cf0813d4557ad7c787e56c5da16?sid=5a886b88-6b81-404d-909f-653da1dd4072" 
                frameBorder="0" 
                allowFullScreen 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="Quent Labs Demo Video"
              />
            </div>
          </div>
          
          {/* Supporting Features */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Plain CLI</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Clean Tests</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>API Mocking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
