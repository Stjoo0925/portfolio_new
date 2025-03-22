'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface PageIndicatorProps {
  currentPage: number
  totalPages: number
}

const PageIndicator: React.FC<PageIndicatorProps> = ({ currentPage, totalPages }) => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4 z-50">
      {Array.from({ length: totalPages }, (_, i) => (
        <motion.div
          key={i}
          onClick={() => {
            const sections = ['main', 'about', 'skills', 'projects', 'contact']
            const element = document.getElementById(sections[i])
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
          className="w-2 h-8 rounded-full bg-gray-600/30 overflow-hidden cursor-pointer relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div 
            className="absolute top-0 left-0 right-0 bg-[#FD5F07] rounded-full"
            initial={{ height: 0 }}
            animate={{ 
              height: currentPage >= i ? '100%' : '0%',
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default PageIndicator