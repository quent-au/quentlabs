import React from 'react';

const CLIExamples: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            CLI Examples
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how easy it is to create comprehensive mobile tests with simple commands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Installation */}
          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-4">Installation</h3>
            <div className="space-y-2 text-sm">
              <div className="text-green-400">$ npm install -g quent-cli</div>
              <div className="text-green-400">$ quent init</div>
              <div className="text-green-400">$ quent install</div>
              <div className="text-green-400">$ quent verify installation</div>
              <div className="text-green-400">$ quent --version</div>
            </div>
          </div>

          {/* Basic Usage */}
          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-4">Basic Usage</h3>
            <div className="space-y-2 text-sm">
              <div className="text-green-400">$ quent generate "Login flow test"</div>
              <div className="text-green-400">$ quent run test.json</div>
              <div className="text-green-400">$ quent run test.json --json</div>
            </div>
          </div>

          {/* Advanced Example */}
          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-4">Advanced Test</h3>
            <div className="space-y-2 text-sm">
              <div className="text-green-400">$ quent generate "Test user registration with email verification and profile setup"</div>
              <div className="text-green-400">$ quent run test.json</div>
              <div className="text-green-400">$ quent cloud upload</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CLIExamples;
