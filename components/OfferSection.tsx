import React from 'react';
import { Rocket, Zap, Brain, Shield } from 'lucide-react';

export const OfferSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#111] to-charcoal relative">
      <div className="container mx-auto px-6">
        
        {/* Offer Container */}
        <div className="glass-panel border-gold/30 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 bg-gold text-charcoal text-xs font-bold px-4 py-2 rounded-bl-xl uppercase tracking-wider">
            Limited Availability
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Founding Customer Offer 🚀</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We’re validating demand and onboarding our first group of customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mb-4">
                <Rocket size={32} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Special Early Pricing</h3>
              <p className="text-sm text-gray-400">Locked in rates for our first cohort.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-yellow-500/10 text-yellow-500 rounded-full flex items-center justify-center mb-4">
                <Zap size={32} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Priority Installation</h3>
              <p className="text-sm text-gray-400">Skip the waitlist. Get powered up first.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mb-4">
                <Brain size={32} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Free Energy Assessment</h3>
              <p className="text-sm text-gray-400">Expert analysis of your consumption.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Extended Support</h3>
              <p className="text-sm text-gray-400">Extra care period for founding members.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gold animate-pulse font-semibold">⚠️ Once slots fill, this offer disappears.</p>
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How It Works (Simple as 1‑2‑3)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
             {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-white/10 z-0"></div>

            <div className="relative z-10 bg-charcoal p-4 rounded-xl">
              <div className="w-20 h-20 bg-charcoal border-4 border-gold text-gold rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-3xl shadow-lg shadow-gold/10">1</div>
              <h3 className="text-white font-bold text-xl mb-3">Reserve Your Spot</h3>
              <p className="text-gray-400">Fill the form or WhatsApp us to lock your slot.</p>
            </div>

            <div className="relative z-10 bg-charcoal p-4 rounded-xl">
              <div className="w-20 h-20 bg-charcoal border-4 border-white/20 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-3xl">2</div>
              <h3 className="text-white font-bold text-xl mb-3">Free Assessment</h3>
              <p className="text-gray-400">We analyze your needs and propose the best setup.</p>
            </div>

            <div className="relative z-10 bg-charcoal p-4 rounded-xl">
               <div className="w-20 h-20 bg-gold text-charcoal rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-3xl">3</div>
              <h3 className="text-white font-bold text-xl mb-3">You Decide</h3>
              <p className="text-gray-400">Approve → we install. <br/>Decline → nothing lost.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};