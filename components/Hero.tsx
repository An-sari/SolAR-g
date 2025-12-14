import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { SplineScene } from "./ui/spline";
import { Card } from "./ui/card";
import { Spotlight } from "./ui/spotlight";

interface HeroProps {
  onChatClick: () => void;
  onProductClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onChatClick, onProductClick }) => {
  return (
    <section className="h-screen min-h-[600px] w-full bg-charcoal relative overflow-hidden">
      <Card className="w-full h-full border-none bg-transparent rounded-none relative overflow-hidden">
        {/* Spotlight Effect */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 z-10"
          fill="#D4AF37"
        />
        
        <div className="flex flex-col-reverse lg:flex-row h-full relative z-20">
          {/* Left content - Text */}
          <div className="flex-1 p-6 md:p-16 flex flex-col justify-center relative z-20 pointer-events-none lg:pointer-events-auto">
            <div className="max-w-2xl pointer-events-auto">
              <div className="inline-block px-3 py-1 mb-4 border border-gold/30 rounded-full bg-gold/10 backdrop-blur-md">
                <span className="text-gold text-xs font-bold uppercase tracking-widest">Founding Customer Slots Open</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                Go Solar. <br/>
                Slash Your Bills. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-dark">
                  Lock Your Price Today.
                </span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-white font-semibold mb-4">
                Solar Power Made Simple, Affordable, and Risk‑Free
              </h2>

              <p className="text-base md:text-lg text-gray-300 mb-10 font-light leading-relaxed">
                Rising electricity costs? Power cuts? Unreliable grids? Solar Gear helps you switch to clean, reliable power — without stress, confusion, or hidden costs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onProductClick}
                  className="bg-gold hover:bg-gold-light text-charcoal font-bold py-4 px-8 rounded-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Reserve My Solar Slot
                  <ArrowRight size={20} />
                </button>
                
                <button 
                  onClick={onChatClick}
                  className="bg-transparent border border-white/30 hover:border-white text-white py-4 px-8 rounded-sm transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 group"
                >
                  <MessageCircle size={20} className="group-hover:text-gold transition-colors" />
                  Chat with Engineer
                </button>
              </div>
            </div>
          </div>

          {/* Right content - 3D Scene */}
          <div className="flex-1 relative h-[40vh] lg:h-full w-full">
            <div className="absolute inset-0 z-0">
               {/* Spline Scene Container */}
               <SplineScene 
                 scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                 className="w-full h-full"
               />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-charcoal to-transparent lg:hidden pointer-events-none"></div>
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-charcoal to-transparent hidden lg:block pointer-events-none"></div>
          </div>
        </div>
      </Card>
    </section>
  );
};