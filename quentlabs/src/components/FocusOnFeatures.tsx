import React from 'react';

const FocusOnFeatures: React.FC = () => {
  const benefits = [
    {
      icon: '⏰',
      title: '80% Less Time',
      description: 'Reduce test writing and maintenance time from hours to minutes.'
    },
    {
      icon: '👥',
      title: 'Team Friendly',
      description: 'Anyone can write tests - QA, developers, even product managers.'
    },
    {
      icon: '🚀',
      title: 'Faster Releases',
      description: 'Reliable automated testing enables confident, frequent deployments.'
    },
    {
      icon: '💰',
      title: 'Lower Costs',
      description: 'Reduce manual testing costs and avoid bugs before production.'
    }
  ];

  const metrics = [
    { value: '10x', label: 'Faster test creation' },
    { value: '90%', label: 'Less maintenance' },
    { value: '99%', label: 'Test reliability' }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Focus on Features, Not Tests
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quent eliminates the overhead of test maintenance so your team can focus on what matters most.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">
                {metric.value}
              </div>
              <div className="text-gray-600">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusOnFeatures;
