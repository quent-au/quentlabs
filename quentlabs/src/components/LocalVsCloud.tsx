import React, { useState } from 'react';

const LocalVsCloud: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'local' | 'cloud'>('local');

  const localFeatures = [
    { text: 'Fast setup', check: true },
    { text: 'Full control over environment', check: true },
    { text: 'Perfect for development', check: true },
    { text: 'No real devices', check: false },
    { text: 'Limited to your devices', check: false }
  ];

  const cloudFeatures = [
    { text: 'Multiple OS versions', check: true },
    { text: 'Real device execution', check: true },
    { text: 'Detailed reports & analytics', check: true },
    { text: 'Team collaboration', check: true },
    { text: 'CI/CD integration', check: true }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Local CLI vs Quent Cloud
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the testing approach that fits your workflow and team needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Toggle */}
          <div className="flex bg-white rounded-lg p-1 mb-8 shadow-sm">
            <button
              onClick={() => setActiveTab('local')}
              className={`flex-1 py-3 px-6 rounded-md font-semibold transition-colors ${
                activeTab === 'local'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Local CLI
            </button>
            <button
              onClick={() => setActiveTab('cloud')}
              className={`flex-1 py-3 px-6 rounded-md font-semibold transition-colors ${
                activeTab === 'cloud'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Quent Cloud
            </button>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Local CLI */}
            <div className={`bg-white rounded-xl p-8 shadow-lg ${activeTab === 'local' ? 'ring-2 ring-primary-600' : ''}`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-primary-600 text-xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Local CLI</h3>
              </div>
              <p className="text-gray-600 mb-6">Run tests on your development machine.</p>
              
              <div className="space-y-3 mb-8">
                {localFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    {feature.check ? (
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span className={feature.check ? 'text-gray-900' : 'text-gray-500'}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
              
              <button className="btn-primary w-full">Download CLI</button>
            </div>

            {/* Quent Cloud */}
            <div className={`bg-white rounded-xl p-8 shadow-lg ${activeTab === 'cloud' ? 'ring-2 ring-primary-600' : ''}`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-primary-600 text-xl">☁️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Quent Cloud</h3>
              </div>
              <p className="text-gray-600 mb-6">Scalable testing on real devices.</p>
              
              <div className="space-y-3 mb-8">
                {cloudFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-900">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <button className="btn-primary w-full">Join Beta Program</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalVsCloud;







