import React from 'react';

type LogoProps = { light?: boolean };

const Logo: React.FC<LogoProps> = ({ light = false }) => (
  <span className="flex items-center gap-2.5">
    <img src="/logo.png" alt="" className="h-8 w-8 rounded-lg ring-1 ring-black/5" />
    <span className={`text-lg font-semibold tracking-tight ${light ? 'text-white' : 'text-ink'}`}>QuentLabs</span>
  </span>
);

export default Logo;
