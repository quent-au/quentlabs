import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

/** The Voice AI dashboard (calls, transcripts and bookings), hosted separately on Firebase Hosting. */
const DASHBOARD_URL = 'https://retell-barber-test-300086.web.app/';

const VoiceAIPage: React.FC = () => {
  useEffect(() => {
    const previous = document.title;
    document.title = 'Voice AI · Quent Labs';
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="flex flex-col bg-white" style={{ height: '100dvh' }}>
      <header className="shrink-0 px-4 sm:px-6 lg:px-8 border-b border-gray-200 bg-white">
        <div className="container-max">
          <div className="flex items-center justify-between py-3">
            <Link to="/" aria-label="Quent Labs home" className="transition-opacity hover:opacity-80">
              <Logo />
            </Link>
            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noreferrer"
              className="font-display text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              Open full screen ↗
            </a>
          </div>
        </div>
      </header>
      {/* The dashboard uses the microphone for its "Start test call" button. */}
      <iframe
        title="Voice AI dashboard"
        src={DASHBOARD_URL}
        allow="microphone; autoplay"
        className="w-full flex-1 border-0"
      />
    </div>
  );
};

export default VoiceAIPage;
