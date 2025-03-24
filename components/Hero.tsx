'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const Hero = () => {
  const [particlePositions, setParticlePositions] = useState<Array<{top: string, left: string}>>([]);

  useEffect(() => {
    // 부유하는 빛 입자 위치 생성
    const particles = Array(10).fill(null).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setParticlePositions(particles);
  }, []);

  return (
    <section id="main" className="min-h-screen bg-[#070B14] relative overflow-hidden">
      {/* 우주 배경 - 새벽 효과 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1B40] via-[#372554] to-[#070B14] opacity-70 -z-10"></div>
      
      {/* 별이 빛나는 배경 */}
      <div className="absolute inset-0 bg-[url('/stars.svg')] bg-repeat opacity-50 -z-5"></div>
      
      {/* 새벽 빛 효과 */}
      <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-[#FF6B6B]/10 via-[#E7A2A2]/5 to-transparent blur-xl"></div>
      
      {/* 빛나는 큰 별 */}
      <div className="absolute top-20 right-[15%] w-4 h-4 bg-white rounded-full animate-pulse-slow" 
           style={{boxShadow: '0 0 20px 10px rgba(255, 255, 255, 0.2), 0 0 40px 20px rgba(255, 255, 255, 0.05)'}}></div>
      
      {/* 별똥별 효과 - 하나만 유지 */}
      <motion.div
        key="hero-meteor"
        className="absolute h-0.5 bg-white rounded-full hidden md:block"
        style={{
          top: '25%',
          left: '100%',
          width: '100px',
          opacity: 0,
          transform: 'rotate(-15deg)',
          boxShadow: '0 0 8px 1px rgba(255, 255, 255, 0.5)',
        }}
        animate={{
          x: [0, -2000],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 20,
          ease: "easeOut",
        }}
      />
      
      {/* 부유하는 빛 입자 - 수를 10개로 줄임 */}
      {particlePositions.length > 0 && particlePositions.map((particle, i) => (
        <motion.div
          key={`hero-particle-${i}`}
          className="absolute w-1 h-1 bg-white/30 rounded-full hidden md:block"
          style={{
            top: particle.top,
            left: particle.left,
          }}
          animate={{
            y: [0, -20],
            opacity: [0.1, 0.4, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            repeatDelay: Math.random() * 5,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
            
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col h-screen justify-center">
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