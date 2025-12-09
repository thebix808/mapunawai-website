"use client";

import { motion } from "framer-motion";

const programs = [
  {
    title: "Online Entrepreneurship",
    description: "Digital income, online work readiness, e-commerce introductions.",
  },
  {
    title: "Basic Computer Skills",
    description: "Foundational skills for kūpuna in a supportive environment.",
  },
  {
    title: "Digital Navigators",
    description: "Free, one-on-one tech help statewide through public libraries.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-section-lg px-6 bg-neutral-gray-light/30">
      <div className="max-w-[1200px] mx-auto space-y-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-section-title text-neutral-charcoal font-bold text-center"
        >
          Programs that empower Hawai&apos;i&apos;s communities.
        </motion.h2>
        
        <div className="space-y-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-neutral-charcoal/10 last:border-b-0 pb-12 last:pb-0"
            >
              <div className="max-w-3xl space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-charcoal">
                  {program.title}
                </h3>
                <p className="text-body-large text-neutral-charcoal/70 leading-relaxed">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

