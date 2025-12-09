"use client";

import { motion } from "framer-motion";

export default function ImpactStatement() {
  return (
    <section className="py-section-lg px-6 bg-neutral-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-12"
        >
          <h2 className="text-section-title text-neutral-charcoal font-bold">
            Impact across Hawai&apos;i
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-brand-green">
                10,000+
              </div>
              <div className="text-body-large text-neutral-charcoal/70">
                community members served
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-brand-green">
                90%+
              </div>
              <div className="text-body-large text-neutral-charcoal/70">
                report increased digital confidence
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

