import React from 'react';

const WhyChooseQuent: React.FC = () => {
  const features = [
    {
      icon: 'D',
      title: 'Plain English Tests',
      description: 'Write tests in natural language. No complex syntax, no programming knowledge required. Just describe what you want to test.'
    },
    {
      icon: 'O',
      title: 'Non-Fragile Tests',
      description: 'Intelligent and self-healing tests that adapt to UI changes. No more broken tests or maintenance overhead.'
    },
    {
      icon: 'API',
      title: 'API Mocking',
      description: 'Built-in API mocking capabilities ensure isolated and fast test environments, free of external dependencies.'
    },
    {
      icon: '⚡',
      title: 'Fast Setup',
      description: 'Get started in minutes. Install the CLI, describe your first test, and you\'re ready to go. No complex configuration needed.'
    },
    {
      icon: '||',
      title: 'Scalable Architecture',
      description: 'Built for scale. Run tests on your local environment or in the cloud, and scale your testing as your team grows.'
    },
    {
      icon: '☁️',
      title: 'Cloud Testing',
      description: 'Upload your APK and run 1000s of Quent Cloud. Run tests on real devices without managing infrastructure.'
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
            Stop fighting with test frameworks and focus on what matters - building great mobile apps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-600 font-bold text-lg">
                  {feature.icon}
                </span>
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







