import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    q: "Is the Solar Readiness Assessment really free?",
    a: "Yes. Our founding member offer includes the Solar Readiness Assessment (normally KES 5,000) for free. Our engineers will visit your property, analyze your roof structure, evaluate backup needs, and review your bills with zero obligation to proceed."
  },
  {
    q: "What outcomes do I get from the assessment?",
    a: "You'll receive: 1. Your exact required system size. 2. A total estimated cost including installation. 3. A backup coverage analysis showing how long your home stays powered during blackouts. 4. A clear next-steps roadmap."
  },
  {
    q: "How much can I actually save on KPLC bills?",
    a: "Most of our residential clients in Nairobi see a reduction of 70% to 90% in their monthly electricity costs. The exact amount depends on your battery storage capacity and daytime energy usage, which we calculate during the assessment."
  },
  {
    q: "Do you offer any warranties?",
    a: "Absolutely. We only use Tier-1 components. Our panels come with a 25-year performance warranty, and our inverters typically have a 5-10 year warranty, backed by our local maintenance team."
  },
  {
    q: "What is a 'Founding Slot'?",
    a: "Since we are scaling carefully to maintain quality, we only take on 20 new clients per month. Reserving a slot locks in current pricing and ensures you get your KES 5,000 assessment for free."
  }
];

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-charcoal border-t border-white/5">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Common Questions</h2>
          <p className="text-gray-500">Everything you need to know about switching to Solar Gear.</p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/5"
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-bold text-white">{faq.q}</span>
                <div className="text-gold shrink-0">
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <a 
            href="https://wa.me/254722371250" 
            className="text-gold font-bold hover:underline underline-offset-4"
          >
            Chat with an engineer on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};