import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2, MessageCircle } from 'lucide-react';

export const LeadMagnet: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '' });
    }, 1500);
  };

  return (
    <section id="reserve" className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-12 max-w-5xl mx-auto">
          
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Join the First Solar Gear Customers 🚀
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Slots are limited. When they’re gone — they’re gone. <br/>
              Reserve your spot now before we close early access.
            </p>
            <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="text-gold" size={20} />
                    <span>Reserve early‑access slot</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="text-gold" size={20} />
                    <span>Get free solar assessment</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="text-gold" size={20} />
                    <span>Lock in founding‑customer pricing</span>
                </li>
            </ul>
          </div>

          <div className="md:w-1/2 w-full max-w-md bg-charcoal border border-white/10 p-8 rounded-2xl shadow-2xl shadow-gold/5">
             {status === 'success' ? (
                <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-white font-bold text-2xl mb-4">Spot Reserved!</h3>
                    <p className="text-gray-400 mb-6">Thank you. We will contact you via WhatsApp shortly to schedule your free assessment.</p>
                    <button onClick={() => setStatus('idle')} className="text-sm text-gold underline hover:text-white transition-colors">Register another slot</button>
                </div>
             ) : (
                <div className="flex flex-col gap-6">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <h3 className="text-xl font-bold text-white">Reserve My Solar Slot Now</h3>
                        
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-400 font-medium">Full Name</label>
                            <input 
                                type="text" 
                                placeholder="John Doe" 
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-400 font-medium">WhatsApp Number</label>
                            <input 
                                type="tel" 
                                placeholder="07XX XXX XXX" 
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"
                                required
                            />
                        </div>

                        <button 
                            disabled={status === 'loading'}
                            type="submit" 
                            className="bg-gold hover:bg-gold-light text-charcoal font-bold text-lg px-6 py-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
                        >
                            {status === 'loading' ? <Loader2 className="animate-spin" /> : <>Reserve My Slot <Send size={18} /></>}
                        </button>
                    </form>

                    <div className="flex items-center gap-4">
                        <div className="h-px bg-white/10 flex-1"></div>
                        <span className="text-xs text-gray-500 font-medium">OR</span>
                        <div className="h-px bg-white/10 flex-1"></div>
                    </div>

                    <a 
                        href="https://wa.me/254722371250?text=Hi%2C%20I'm%20interested%20in%20the%20Founding%20Customer%20Solar%20Offer."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#1ebc57] text-white font-bold text-lg px-6 py-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                        <MessageCircle size={20} />
                        WhatsApp Us Directly
                    </a>

                    <p className="text-xs text-center text-gray-500">Zero Commitment. You decide later.</p>
                </div>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};