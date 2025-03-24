'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="fixed bottom-4 right-4 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-gray-400 text-sm"
      >
        © 2025 stjoo0925. All rights reserved.  |  Deployed on Vercel
      </motion.div>
    </footer>
  )
}

export default Footer 