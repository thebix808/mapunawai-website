"use client";

import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="py-section-lg px-6 bg-gradient-to-r from-brand-green/10 via-brand-green-light/10 to-brand-green/10">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h2 className="text-section-title text-neutral-charcoal font-bold text-balance">
            Ready to bring digital confidence to your community?
          </h2>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-10 py-5 bg-brand-green text-neutral-white rounded-lg font-medium text-body-large transition-all hover:bg-brand-green-dark shadow-premium hover:shadow-premium-lg"
          >
            Partner with Māpunawai
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

