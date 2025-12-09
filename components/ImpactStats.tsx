"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "10,000+",
    label: "served",
  },
  {
    number: "90%+",
    label: "increased confidence",
  },
  {
    number: "Statewide",
    label: "reach across public libraries and rural communities",
  },
];

export default function ImpactStats() {
  return (
    <section className="py-section-lg px-6 bg-neutral-white">
      <div className="max-w-[1200px] mx-auto space-y-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-section-title text-neutral-charcoal font-bold text-center"
        >
          Proven impact across the islands.
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center space-y-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-green">
                {stat.number}
              </div>
              <div className="text-body text-neutral-charcoal/70 leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

