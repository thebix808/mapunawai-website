"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-section-lg overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-gray-light via-neutral-white to-brand-green/5 -z-10" />
      
      <div className="max-w-[1400px] w-full mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <h1 className="text-hero text-neutral-charcoal font-bold text-balance">
            Bridging the digital divide for the people of Hawai&apos;i.
          </h1>
          
          <p className="text-body-large text-neutral-charcoal/80 max-w-xl leading-relaxed">
            We deliver statewide digital support that empowers kūpuna, residents, and small businesses to stay capable, connected, and confident.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-neutral-white rounded-lg font-medium text-body transition-all hover:bg-brand-green-dark shadow-premium hover:shadow-premium-lg"
            >
              Partner with Māpunawai
            </motion.a>
            
            <motion.a
              href="#programs"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-neutral-charcoal border-2 border-neutral-charcoal/20 rounded-lg font-medium text-body transition-all hover:border-neutral-charcoal/40"
            >
              View Programs →
            </motion.a>
          </div>
        </motion.div>

        {/* Layered Photo Collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative h-[500px] lg:h-[600px]"
        >
          {/* First Image - Offset */}
          <div className="absolute top-0 left-0 w-[70%] h-[75%] rounded-2xl overflow-hidden shadow-premium-lg z-10">
            <div className="w-full h-full bg-gradient-to-br from-brand-green/20 to-brand-green/5 flex items-center justify-center">
              <span className="text-neutral-charcoal/30 text-sm">Mapunawai Photo 1</span>
            </div>
          </div>
          
          {/* Second Image - Offset */}
          <div className="absolute bottom-0 right-0 w-[70%] h-[75%] rounded-2xl overflow-hidden shadow-premium-lg translate-x-4 translate-y-4">
            <div className="w-full h-full bg-gradient-to-br from-brand-green-light/20 to-brand-green/5 flex items-center justify-center">
              <span className="text-neutral-charcoal/30 text-sm">Mapunawai Photo 2</span>
            </div>
          </div>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-brand-green/5 rounded-2xl blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}

