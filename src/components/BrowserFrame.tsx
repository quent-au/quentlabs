import React from 'react';

type BrowserFrameProps = {
  src: string;
  url: string;
  alt: string;
  className?: string;
};

/** A screenshot shown inside a minimal browser window. */
const BrowserFrame: React.FC<BrowserFrameProps> = ({ src, url, alt, className = '' }) => (
  <div
    className={`overflow-hidden rounded-xl bg-white shadow-[0_30px_60px_-20px_rgba(23,24,27,0.35)] ring-1 ring-black/10 ${className}`}
  >
    <div className="flex h-8 items-center gap-1.5 border-b border-gray-200 bg-gray-50 px-3">
      <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
      <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
      <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
      <span className="ml-3 flex h-5 flex-1 items-center rounded-md bg-white px-2.5 text-[11px] text-gray-500 ring-1 ring-gray-200">
        {url}
      </span>
    </div>
    <img src={src} alt={alt} width={1440} height={900} className="block aspect-[16/10] w-full object-cover object-top" />
  </div>
);

export default BrowserFrame;
