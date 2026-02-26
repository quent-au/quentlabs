import React from 'react';

const CLIExamples: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quick Start
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get from plain English to running tests in minutes. Use the app or CLI to create tests, run them, and fix failures with Quent Analyze.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-4">Install & Run</h3>
            <div className="space-y-2 text-sm">
              <div className="text-green-400">$ npm install -g quent-cli</div>
              <div className="text-green-400">$ quent init</div>
              <div className="text-green-400">$ quent run test.json</div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-4">Plain English</h3>
            <div className="space-y-2 text-sm">
              <div className="text-green-400">$ quent generate "Login and verify dashboard"</div>
              <div className="text-green-400">$ quent generate "Filter by Women, validate 4 products"</div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-4">Cloud & Reports</h3>
            <div className="space-y-2 text-sm">
              <div className="text-green-400">$ quent run test.json --json</div>
              <div className="text-green-400">$ quent cloud upload</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CLIExamples;
