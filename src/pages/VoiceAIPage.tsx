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
      <header className="shrink-0 px-4 py-3 border-b border-gray-200 bg-white">
        <Link to="/" aria-label="Quent Labs home" className="inline-flex transition-opacity hover:opacity-80">
          <Logo />
        </Link>
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
