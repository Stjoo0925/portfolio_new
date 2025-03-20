'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:flex md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-col md:items-start"
            >
              <h3 className="text-xl font-semibold mb-4 relative text-gray-900">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-apple-blue to-apple-blue-dark">
                  SoonTaeJoo's Portfolio
                </span>
              </h3>
              <div className="text-gray-500 text-xs md:mr-8">
                © {currentYear} SoonTaeJoo's Portfolio. All rights reserved.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 