'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="main" className="min-h-screen bg-[#0D1117] relative overflow-hidden">

      {/* 배경 패턴 */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* 애니메이션된 원형 요소들 */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#FD5F07]/30 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-[#FD5F07]/30 rounded-full blur-2xl animate-float-delayed"></div>
      <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-[#FFFFFF]/30 rounded-full blur-2xl animate-float-more-delayed"></div>
      
      <div className="section-container">
        <div className="flex flex-col items-center justify-center h-screen-80 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span>Hi, I'm </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FD5F07] to-[#FD5F07]">
              SoonTae
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-200 mb-8"
          >
            배움을 통해 지속적인 성장을 추구하는 개발자가 되겠습니다!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="https://github.com/stjoo0925"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 bg-[#FD5F07] text-white hover:bg-[#21262D]"
            >
              <FaGithub className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <div className="h-8 w-px bg-gray-600"></div>
            <a 
              href="https://velog.io/@stjoo0925" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 bg-[#21262D] text-white hover:bg-[#FD5F07]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3Zm6.883 6.25c.63 0 1.005.3 1.125.9l1.463 8.303c.465-.615.846-1.133 1.146-1.553.465-.66.893-1.418 1.283-2.273.405-.855.608-1.62.608-2.295 0-.405-.113-.727-.338-.967-.21-.255-.608-.577-1.193-.967.6-.765 1.35-1.148 2.25-1.148.48 0 .878.143 1.193.428.33.285.494.704.494 1.26 0 .93-.39 2.093-1.17 3.488-.765 1.38-2.241 3.457-4.431 6.232l-2.227.156-1.711-9.628h-2.25V7.24c.6-.195 1.305-.406 2.115-.63.81-.24 1.358-.36 1.643-.36Z"/>
              </svg>
              <span>Velog</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 