import React from 'react';

type LogoProps = { light?: boolean };

const Logo: React.FC<LogoProps> = ({ light = false }) => (
  <span className="flex items-center gap-2.5">
    <img
      src="/logo.png"
      alt=""
      className="h-9 w-9 rounded-xl shadow-sm ring-1 ring-black/5"
    />
    <span className={`font-display text-xl font-semibold tracking-tight ${light ? 'text-white' : 'text-gray-900'}`}>
      Quent Labs
    </span>
  </span>
);

export default Logo;
