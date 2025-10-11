"use client"

import { motion, AnimatePresence } from "framer-motion"
import React from "react"

export default function Preloader() {
  const [show, setShow] = React.useState(true)

  React.useEffect(() => {
    const t = setTimeout(() => setShow(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 bg-app grid place-items-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <div className="text-center">
            <motion.div
              className="text-4xl md:text-5xl font-semibold tracking-wide"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              AR
            </motion.div>
            <motion.div
              className="mt-2 text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Adarsh Raghuwanshi
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
