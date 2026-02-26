import React from 'react';

const FocusOnFeatures: React.FC = () => {
  const benefits = [
    {
      icon: '✍️',
      title: 'Plain English, Not Code',
      description: 'Anyone can write tests—QA, devs, PMs. Describe actions and validations; Quent turns them into runnable tests.'
    },
    {
      icon: '👁️',
      title: 'Human-Like Validation',
      description: 'Use the validate method with natural language. No brittle selectors or assertion spam—AI checks the page like a user would.'
    },
    {
      icon: '🔧',
      title: 'Maintenance Made Simple',
      description: 'When tests break, Quent Analyze explains the failure and suggests changes. Fix tests in minutes instead of hours.'
    },
    {
      icon: '📊',
      title: 'Dashboard & Test Runs',
      description: 'See every test run and step in one place. Test Runs show all tests across dashboards so you can understand any issue quickly.'
    }
  ];

  const metrics = [
    { value: 'Web + Mobile', label: 'One agent for browsers, Android & iOS' },
    { value: 'Plain English', label: 'Actions and validations, no code required' },
    { value: 'Quent Analyze', label: 'Understand failures and get recommended fixes' }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Focus on Features, Not Tests
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Write tests in plain English, validate with AI, and fix failures with the Maintenance Agent—so your team can ship with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-sm">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-2">
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
