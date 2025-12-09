"use client";

import { motion } from "framer-motion";

const stories = [
  {
    quote: "Māpunawai helped me start my online business. I never thought I could learn these skills at my age, but the support was incredible.",
    author: "Aunty Leilani",
    location: "Hilo, Hawai'i",
  },
  {
    quote: "The Digital Navigators program gave me the confidence to help my grandchildren with their schoolwork online. It's changed our family.",
    author: "Uncle Keoni",
    location: "Kona, Hawai'i",
  },
];

export default function CommunityStories() {
  return (
    <section className="py-section-lg px-6 bg-gradient-to-br from-neutral-gray-light/50 via-neutral-white to-brand-green/5">
      <div className="max-w-[1200px] mx-auto space-y-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-section-title text-neutral-charcoal font-bold text-center"
        >
          Stories from the communities we serve.
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-6 p-8 md:p-12 bg-neutral-white/80 backdrop-blur-sm rounded-2xl shadow-premium"
            >
              <blockquote className="text-body-large text-neutral-charcoal leading-relaxed">
                &ldquo;{story.quote}&rdquo;
              </blockquote>
              <div className="space-y-1">
                <div className="font-medium text-neutral-charcoal">
                  {story.author}
                </div>
                <div className="text-body text-neutral-charcoal/60">
                  {story.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

