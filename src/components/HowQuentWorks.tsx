import React from 'react';

const HowQuentWorks: React.FC = () => {
  const steps = [
    {
      number: '1',
      icon: '✍️',
      title: 'Describe in Plain English',
      description: 'Write actions and validations in natural language. No code, no complex syntax—just describe what you want to test and what should be true when it’s done.'
    },
    {
      number: '2',
      icon: '👁️',
      title: 'AI Runs & Validates',
      description: 'Quent executes the steps and uses the validate method so the page is checked the way a human would see it—no heaps of assertions, just clear, human-like checks.'
    },
    {
      number: '3',
      icon: '🔧',
      title: 'Fix Failures with Quent Analyze',
      description: 'When a test fails, use Quent Analyze to understand why and get recommended changes. Update tests in plain English so maintenance stays fast.'
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Quent Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Write in plain English, validate with AI, fix failures with the Maintenance Agent. Works on Web, Android, and iOS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowQuentWorks;
