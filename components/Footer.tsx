import React from 'react';
import { Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#050505] text-center md:text-left">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl font-bold text-white tracking-widest uppercase">Solar Gear Ltd.</h3>
          <p className="text-gray-500 text-sm mt-1">Power your future. Starting today.</p>
          <div className="mt-4 flex flex-col md:flex-row gap-4 text-sm text-gray-400">
             <a href="tel:+254722371250" className="flex items-center gap-2 hover:text-gold transition-colors justify-center md:justify-start">
                <Phone size={16} /> +254 722 371 250
             </a>
          </div>
        </div>
        
        <div className="flex gap-6 text-sm text-gray-400">
          <span className="hover:text-gold transition-colors cursor-pointer">Privacy Policy</span>
          <span className="hover:text-gold transition-colors cursor-pointer">Terms of Service</span>
        </div>

        <div className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Solar Gear Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};