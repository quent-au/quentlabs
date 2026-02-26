import React from 'react';

const WhyChooseQuent: React.FC = () => {
  const features = [
    {
      icon: '✍️',
      title: 'Plain English Tests',
      description: 'Write tests in natural language. Describe actions and validations the way you’d explain them to a teammate—no complex syntax or programming required.'
    },
    {
      icon: '👁️',
      title: 'AI Validation, Not Assertion Spam',
      description: 'We use a validate method powered by AI so your page is checked the way a human would see it. No heaps of brittle assertions—just clear, human-like checks.'
    },
    {
      icon: '🔧',
      title: 'Maintenance Agent — Quent Analyze',
      description: 'When tests fail, run Quent Analyze to understand the failure and get recommended test changes. Fix issues quickly without digging through stacks of code.'
    },
    {
      icon: '📊',
      title: 'Dashboard & Test Runs',
      description: 'See details for every test run in one place. Test Runs show all tests executed across your dashboards so anyone can understand an issue at a glance.'
    },
    {
      icon: '🌐',
      title: 'Web, Android & iOS',
      description: 'One testing agent for web and mobile. Write once in plain English; run on browsers, Android, and iOS with the same clarity and AI validation.'
    },
    {
      icon: '⚡',
      title: 'Fast to Write, Easy to Maintain',
      description: 'Get from idea to running test in minutes. When the app changes, Quent Analyze helps you update tests instead of rewriting them from scratch.'
    }
  ];

  return (
    <section id="product" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Quent?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop fighting fragile tests and endless assertions. Write in plain English, validate like a human, and fix failures with AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseQuent;
