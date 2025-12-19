import React from 'react';
import { Home, Briefcase, TrendingUp, Sun } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
            Who This Is Perfect For
          </h2>
          <p className="text-gray-400">If you want cheap shortcuts, this isn't for you. If you want real value, read on.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:border-gold/30 transition-colors">
            <div className="p-3 bg-gold/10 rounded-full text-gold shrink-0">
              <Home size={24} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Homeowners</h3>
              <p className="text-sm text-gray-400">Tired of high electricity bills and unreliable connections.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:border-gold/30 transition-colors">
            <div className="p-3 bg-gold/10 rounded-full text-gold shrink-0">
              <Briefcase size={24} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Small Business Owners</h3>
              <p className="text-sm text-gray-400">Who need reliable power to keep operations running smoothly.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:border-gold/30 transition-colors">
            <div className="p-3 bg-gold/10 rounded-full text-gold shrink-0">
              <TrendingUp size={24} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Smart Investors</h3>
              <p className="text-sm text-gray-400">People who want long-term savings and increased property value.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:border-gold/30 transition-colors">
            <div className="p-3 bg-gold/10 rounded-full text-gold shrink-0">
              <Sun size={24} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Energy Independence</h3>
              <p className="text-sm text-gray-400">Anyone who wants to take control of their power supply.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};