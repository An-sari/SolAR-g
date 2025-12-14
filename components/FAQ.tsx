import React from 'react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Is this really free?",
      a: "Yes. The assessment and proposal are 100% free. You only pay if you decide to proceed with the installation."
    },
    {
      q: "Do I have to install?",
      a: "No. You decide after seeing the proposal. If it doesn't make sense for you, you can simply decline. No pressure."
    },
    {
      q: "When do I pay?",
      a: "You only pay after you approve the system design, pricing, and timeline. We believe in transparency first."
    },
    {
      q: "Where do you operate?",
      a: "Currently, we serve limited areas in Nairobi and its outskirts on a first-come, first-served basis to ensure quality."
    }
  ];

  return (
    <section className="py-20 bg-charcoal border-t border-white/5">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/5 border border-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2 flex items-start gap-3">
                <span className="text-gold">Q:</span>
                {faq.q}
              </h3>
              <p className="text-gray-400 ml-7 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};