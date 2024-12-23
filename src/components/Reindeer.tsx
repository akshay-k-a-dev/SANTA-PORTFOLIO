import React from 'react';

const Reindeer = ({ className = "" }: { className?: string }) => (
  <div className={`animate-float ${className}`}>
    <div className="relative">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-red-800">
        <path d="M12 2L9 7H15L12 2Z" fill="currentColor"/>
        <path d="M7 9C4 9 3 12 3 14C3 16 5 19 9 19C13 19 15 16 15 14C15 12 14 9 11 9H7Z" fill="currentColor"/>
        <circle cx="6.5" cy="12.5" r="1.5" fill="white"/>
        <circle cx="6.5" cy="12.5" r="0.5" fill="black"/>
      </svg>
      <div className="absolute -top-1 left-1/2 w-2 h-2 bg-red-600 rounded-full animate-pulse" />
    </div>
  </div>
);

export default Reindeer;