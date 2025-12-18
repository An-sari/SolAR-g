import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrezgbrp';

export const LeadMagnet: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '' });
      } else {
        const errorData = await response.json();
        console.error("Formspree Error:", errorData);
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="reserve" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">
          
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Join our first <span className="text-gold underline underline-offset-8 decoration-gold/30">Founding Cohort</span> 🚀
              </h2>
              <p className="text-gray-400 text-xl mb-10 leading-relaxed max-w-lg">
                We are onboarding a limited number of early adopters in Nairobi to validate our premium service. Reserve your spot today.
              </p>
              
              <ul className="space-y-6 mb-8">
                {[
                  "Locked-in Founding Customer pricing",
                  "Free end-to-end energy assessment",
                  "Priority installation & 24/7 support",
                  "No commitment required today"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 text-gray-200"
                  >
                    <div className="bg-gold/10 p-1 rounded-full">
                      <CheckCircle2 className="text-gold" size={20} />
                    </div>
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="md:w-1/2 w-full max-w-md">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-charcoal border border-white/10 p-10 rounded-3xl shadow-[0_20px_50px_rgba(212,175,55,0.05)] backdrop-blur-sm"
            >
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-white font-bold text-3xl mb-4">Spot Reserved!</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                      Thank you for trusting Solar Gear. We've received your details and will WhatsApp you within 24 hours to schedule your free assessment.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')} 
                      className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all"
                    >
                      Register another home
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form" className="flex flex-col gap-8">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">Start Your Transition</h3>
                      <p className="text-sm text-gray-500">Fill this out to lock your pricing.</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                      <div className="flex flex-col gap-3">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          placeholder="John Doe" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all"
                          required
                        />
                      </div>

                      <div className="flex flex-col gap-3">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">WhatsApp Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          placeholder="07XX XXX XXX" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all"
                          required
                        />
                      </div>

                      {status === 'error' && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-3 text-red-400 text-sm bg-red-400/5 p-4 rounded-xl border border-red-400/10"
                        >
                          <AlertCircle size={18} />
                          <span>Something went wrong. Try WhatsApp?</span>
                        </motion.div>
                      )}

                      <motion.button 
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        disabled={status === 'loading'}
                        type="submit" 
                        className="bg-gold hover:bg-gold-light text-charcoal font-black text-lg py-5 rounded-xl transition-all shadow-lg shadow-gold/20 flex items-center justify-center gap-3"
                      >
                        {status === 'loading' ? <Loader2 className="animate-spin" /> : <>Reserve My Solar Slot <Send size={20} /></>}
                      </motion.button>
                    </form>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
                      <div className="relative flex justify-center text-xs uppercase"><span className="bg-charcoal px-4 text-gray-500 font-bold tracking-widest">or reach out directly</span></div>
                    </div>

                    <a 
                      href="https://wa.me/254722371250?text=Hi%2C%20I'm%20interested%20in%20the%20Founding%20Customer%20Solar%20Offer."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#1ebc57] text-white font-bold text-lg py-5 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-500/10"
                    >
                      <MessageCircle size={22} />
                      WhatsApp Us Now
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};