import React from 'react';

const HowQuentWorks: React.FC = () => {
  const steps = [
    {
      number: '1',
      icon: '📝',
      title: 'Describe Your Test',
      description: 'Simply describe what you want to test in plain English. No programming expertise, no complex frameworks.'
    },
    {
      number: '2',
      icon: '{}',
      title: 'Generate Test JSON',
      description: 'Quent AI converts your description into a scalable, low-level test JSON.'
    },
    {
      number: '3',
      icon: '▶️',
      title: 'Run Locally or Cloud',
      description: 'Execute tests on your local environment or upload to Quent Cloud for testing on real devices.'
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Quent Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three simple steps to automated mobile testing. No complex setup, no learning curve.
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
