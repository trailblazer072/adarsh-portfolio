"use client"

import { motion } from "framer-motion"
import Magnetic from "./magnetic"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90dvh] grid place-items-center">
      <div className="text-center px-6">
        <motion.h1
          className="text-balance text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
          }}
        >
          Adarsh Raghuwanshi
        </motion.h1>

        <motion.p
          className="mt-4 text-muted-foreground text-lg md:text-xl"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          Entrepreneur • Full-Stack Developer • Product Strategist 
        </motion.p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Magnetic>
            <a
              href="#experience"
              className="glow-hover px-5 py-2 rounded-full border border-(--color-border) bg-(--color-card)/40 backdrop-blur-xl"
            >
              Dive in
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="glow-hover px-5 py-2 rounded-full border border-(--color-border) bg-(--color-card)/20 backdrop-blur-xl"
            >
              Contact
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  )
}
