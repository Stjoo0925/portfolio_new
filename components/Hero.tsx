'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="main" className="min-h-screen pt-32 pb-10 bg-white overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
            >
              <span className="block">창의적인 웹 개발자</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-apple-blue to-blue-600">
                포트폴리오
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              현대적인 웹 경험을 창조하는 개발자의 작품 모음집입니다.
              <br className="hidden md:block" />
              아름다움과 기능성의 완벽한 균형을 추구합니다.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn px-8 py-4 text-lg rounded-full shadow-apple-button hover:shadow-apple-hover transition-all duration-300"
              >
                프로젝트 보기
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-white text-apple-dark border border-gray-300 px-8 py-4 text-lg rounded-full shadow-apple-button hover:shadow-apple-hover hover:bg-gray-50 transition-all duration-300"
              >
                연락하기
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* 데코 요소들 */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="w-full h-72 md:h-96 lg:h-[500px] bg-apple-gray rounded-3xl overflow-hidden shadow-apple flex items-center justify-center"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute -inset-px rounded-full blur-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-75"></div>
                <div className="text-[150px] md:text-[200px] lg:text-[250px] font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-apple-blue via-blue-500 to-indigo-600">P</div>
              </motion.div>
              
              {/* 배경 그래픽 요소들 */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute top-0 left-0 w-full h-full overflow-hidden"
              >
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/10 blur-2xl"></div>
                <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-apple-blue/10 blur-3xl"></div>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 flex justify-center"
          >
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <p className="text-gray-500 mb-2">스크롤하여 더 알아보기</p>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-apple-blue" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* 배경 그라데이션 및 패턴 */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-100/80 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-100/50 to-transparent rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}

export default Hero 