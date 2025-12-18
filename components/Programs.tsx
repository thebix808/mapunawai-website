"use client";

import { motion } from "framer-motion";

const programs = [
  {
    title: "Online Entrepreneurship",
    description: "Digital income, online work readiness, e-commerce introductions.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    gradientFrom: "#2D4A35",
    gradientVia: "#4A7C59",
    gradientTo: "#1E3224",
  },
  {
    title: "Basic Computer Skills",
    description: "Foundational skills for kūpuna in a supportive environment.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradientFrom: "#1A1A1A",
    gradientVia: "#2D4A35",
    gradientTo: "#1E3224",
  },
  {
    title: "Digital Navigators",
    description: "Free, one-on-one tech help statewide through public libraries.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    gradientFrom: "#4A7C59",
    gradientVia: "#2D4A35",
    gradientTo: "#1A1A1A",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-section-lg px-6 bg-neutral-white">
      <div className="max-w-[1200px] mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-section-title text-neutral-charcoal font-bold">
            Programs that empower Hawai&apos;i&apos;s communities.
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative"
            >
              {/* Card with gradient background */}
              <div 
                className="relative h-full rounded-2xl p-8 text-neutral-white overflow-hidden shadow-premium-lg transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${program.gradientFrom} 0%, ${program.gradientVia} 50%, ${program.gradientTo} 100%)`
                }}
              >
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-[0.08]">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                  }} />
                </div>
                
                {/* Swirling pattern effect */}
                <div className="absolute inset-0 opacity-[0.05]">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl" />
                </div>
                
                {/* Animated glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-6 text-white">
                    {program.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {program.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-body text-white/90 leading-relaxed flex-grow">
                    {program.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

