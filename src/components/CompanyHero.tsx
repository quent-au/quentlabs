import React from 'react';

const CompanyHero: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Practical AI Solutions for{' '}
            <span className="text-accent-600">Real-World Problems</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Quent Labs is an AI solutions company. We build focused products that put AI to work
            for small businesses, engineering teams and learners.
          </p>
          <div className="flex justify-center">
            <a href="#products" className="btn-primary text-lg px-8 py-4">
              Explore Our Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHero;
