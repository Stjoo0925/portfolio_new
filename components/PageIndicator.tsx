'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface PageIndicatorProps {
  currentPage: number
  totalPages: number
}

const PageIndicator: React.FC<PageIndicatorProps> = ({ currentPage, totalPages }) => {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
      {[...Array(totalPages)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          animate={{ 
            scale: currentPage === index ? 1.2 : 1,
            backgroundColor: index <= currentPage ? '#2563eb' : '#e5e7eb'
          }}
          transition={{ duration: 0.2 }}
          className="w-2 h-8 rounded-full transition-all duration-300 hover:bg-blue-400"
          onClick={() => {
            const element = document.getElementById(`section-${index}`)
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        />
      ))}
    </div>
  )
}

export default PageIndicator 