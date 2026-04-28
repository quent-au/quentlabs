import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max">
        <div className="py-8">
          <div className="flex justify-center">
            {/* Logo and Description */}
            <div className="text-center max-w-md">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xl font-bold">Quent Labs</span>
              </div>
              <h1 className="text-gray-400 mb-3"> Try Quent Now</h1>
              <a href="https://quent.com/download" className="text-gray-300 hover:text-white underline-offset-2 hover:underline">
                Download for macOS
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-4">
          <div className="text-center text-gray-400">
            © 2024 Quent Labs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
