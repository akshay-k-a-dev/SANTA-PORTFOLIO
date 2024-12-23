import React from 'react';
import { Gift } from 'lucide-react';

const GiftBox = ({ className = "" }: { className?: string }) => (
  <div className={`animate-bounce-slow ${className}`}>
    <div className="relative">
      <Gift className="w-8 h-8 text-red-700" />
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-600 rounded-full" />
    </div>
  </div>
);

export default GiftBox;