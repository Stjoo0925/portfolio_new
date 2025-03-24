'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './animations/ScrollReveal'
import Image from 'next/image'
import { FaFileAlt } from 'react-icons/fa'

const About = () => {
  const [showResume, setShowResume] = useState(false);
  const currentPage = 1
  const [asteroidPositions, setAsteroidPositions] = useState<Array<{
    width: string,
    height: string,
    top: string,
    left: string,
    opacity: number
  }>>([]);

  useEffect(() => {
    // 소행성 위치 생성
    const asteroids = Array(4).fill(null).map(() => ({
      width: Math.random() * 2 + 1 + 'px',
      height: Math.random() * 2 + 1 + 'px',
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.3 + 0.1,
    }));
    setAsteroidPositions(asteroids);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }
  
  return (
    <section id="about" className="bg-[#070B14] relative overflow-hidden min-h-screen py-20">
      {/* 우주 배경 - 행성과 달 테마 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070B14] to-[#0F172A] -z-10"></div>
      
      {/* 별이 빛나는 배경 */}
      <div className="absolute inset-0 bg-[url('/stars.svg')] bg-repeat opacity-40 -z-5"></div>
      
      {/* 큰 행성 (지구형) - 더 투명하게 */}
      <div className="absolute -top-40 -right-40 w-[80vw] h-[80vw] rounded-full bg-gradient-to-br from-[#1E3A8A] via-[#3B82F6]/20 to-[#1E3A8A]/5 animate-planet-rotate-slow opacity-20 hidden md:block">
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute w-full h-[15%] bg-[#BFDBFE]/10 top-[20%] transform -rotate-12 blur-xl"></div>
        </div>
      </div>
      
      {/* 은하수 효과 */}
      <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-[#3B82F6]/5 via-[#8B5CF6]/5 to-transparent blur-2xl animate-nebula-glow-slow opacity-30 -z-5"></div>
      
      {/* 소행성 효과 */}
      {asteroidPositions.length > 0 && asteroidPositions.map((asteroid, i) => (
        <motion.div
          key={`about-asteroid-${i}`}
          className="absolute bg-white rounded-full hidden md:block"
          style={{
            width: asteroid.width,
            height: asteroid.height,
            top: asteroid.top,
            left: asteroid.left,
            opacity: asteroid.opacity,
          }}
          animate={{
            x: [0, Math.random() * 10 - 5],
            y: [0, Math.random() * 10 - 5],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {/* 타원형 궤도 (달 궤도) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70vw] h-[30vw] border border-[#94A3B8]/10 rounded-full animate-orbit-slow opacity-20 hidden md:block"></div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* 왼쪽 컬럼: 자기소개 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative inline-block mb-8"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#FD5F07] relative">
                <Image
                  src="/images/profile-img.jpg"
                  alt="Profile"
                  fill
                  sizes="(max-width: 768px) 100vw, 192px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FD5F07]/20 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center md:justify-start gap-4 mb-6"
            >
              <h2 className="text-4xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FD5F07] to-[#FFFFFF]">
                  About Me
                </span>
              </h2>
              <button
                onClick={() => setShowResume(true)}
                className="flex items-center gap-2 px-4 py-2 bg-[#FD5F07] hover:bg-[#21262D]/30 border border-[#FD5F07]/40 rounded-full text-[#FFFFFF] transition-colors duration-300"
              >
                <FaFileAlt />
                <span className="text-sm font-medium">Resume</span>
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-[#21262D]/50 backdrop-blur-sm p-6 rounded-xl border border-[#FD5F07]/20"
            >
              <p className="space-y-2 text-gray-300">
                <span className="block text-2xl font-bold text-[#FD5F07]">안녕하세요!</span>
                <span className="block text-base text-gray-100 mt-2">배움을 통해 지속적인 성장을 추구합니다.</span>
                <span className="block text-sm text-gray-400 mt-1">신기술과 개발 트렌드를 꾸준히 탐구하며, 이를 프로젝트에 적용하는 과정에서 얻는 배움을 통해 지속적인 성장을 추구합니다. 
                여러 프로젝트 경험을 통해 제한된 시간과 자원 속에서도 최선의 결과를 도출하는 문제 해결 능력을 키웠으며, 
                이는 현재 진행하는 모든 프로젝트에서 중요한 자산이 되고 있습니다.
                </span>
                <span className="block text-base text-gray-100 mt-2">팀 프로젝트를 진행하며 '함께'의 가치를 배웠습니다.</span>
                <span className="block text-sm text-gray-400 mt-1">서로 다른 배경과 경험을 가진 팀원들의 다양한 관점이 프로젝트의 완성도를 높이는 핵심 요소임을 깨달았으며, 
                이를 통해 협업의 시너지를 극대화하는 개발자로 성장하고 있습니다.
                </span>
              </p>
            </motion.div>
          </motion.div>

          {/* 오른쪽 컬럼: 카드 그리드 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full"
          >
            {/* 경력 카드 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#21262D]/50 backdrop-blur-sm p-6 rounded-xl border border-[#ff4500]/20 hover:border-[#ff4500]/40 transition-colors duration-300 h-full flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#FD5F07] rounded-lg">
                  <svg className="w-6 h-6 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#FD5F07]">
                  Career
                </h3>
              </div>
              <div className="mt-2 flex-grow">
                <p className="text-gray-100 font-medium">랜드마크앤코 주식회사</p>
                <p className="text-gray-400 text-sm mt-1">2019.07 - 2023.08 (4년1개월)</p>
                <p className="text-gray-400 text-sm mt-1">토목 및 도시개발 사업부</p>
              </div>
            </motion.div>

            {/* 학력 카드 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-[#21262D]/50 backdrop-blur-sm p-6 rounded-xl border border-[#ff4500]/20 hover:border-[#ff4500]/40 transition-colors duration-300 h-full flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#FD5F07] rounded-lg">
                  <svg className="w-6 h-6 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#FD5F07]">Education</h3>
              </div>
              <div className="mt-2 flex-grow">
                <p className="text-gray-100 font-medium">숭실사이버대학교</p>
                <p className="text-gray-400 text-sm mt-1">건설시스템공학과</p>
                <p className="text-gray-400 text-sm mt-1">2020.03 - 2024.02</p>
                <p className="text-gray-400 text-sm mt-1">학점 : 3.76</p>
              </div>
            </motion.div>

            {/* 교육 카드 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-[#21262D]/50 backdrop-blur-sm p-6 rounded-xl border border-[#ff4500]/20 hover:border-[#ff4500]/40 transition-colors duration-300 h-full flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#FD5F07] rounded-lg">
                  <svg className="w-6 h-6 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#FD5F07]">Training</h3>
              </div>
              <div className="mt-2 flex-grow">
                <div className="mb-3">
                  <p className="text-gray-100 font-medium">클라우드 기반의 CI/CD를 활용한</p>
                  <p className="text-gray-100 font-medium">풀스택 개발자 과정</p>
                  <p className="text-gray-400 text-sm mt-1">2024.04 - 2024.10</p>
                  <p className="text-gray-400 text-sm mt-1">하이미디어 아카데미</p>
                </div>

                <div>
                  <p className="text-gray-100 font-medium">심화_생성형 AI활용</p>
                  <p className="text-gray-100 font-medium">인재 양성과정 (조별멘토)</p>
                  <p className="text-gray-400 text-sm mt-1">2024.10 - 2024.12</p>
                  <p className="text-gray-400 text-sm mt-1">하이미디어 아카데미</p>
                </div>
              </div>
            </motion.div>

            {/* 자격증 카드 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-[#21262D]/50 backdrop-blur-sm p-6 rounded-xl border border-[#ff4500]/20 hover:border-[#ff4500]/40 transition-colors duration-300 h-full flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#FD5F07] rounded-lg">
                  <svg className="w-6 h-6 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#FD5F07]">Certificate</h3>
              </div>
              <div className="mt-2 flex-grow">
                <p className="text-gray-100 font-medium">인공지능학습데이터전문가 2급</p>
                <p className="text-gray-400 text-sm mt-1">한국인공지능자격센터</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* 이력서 모달 */}
      {showResume && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
          >
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold text-[#FD5F07]">주순태 이력서</h3>
              <button 
                onClick={() => setShowResume(false)}
                className="text-gray-500 hover:text-gray-700 p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 h-full">
              <iframe 
                src="/resume/주순태_풀스텍이력서.pdf" 
                className="w-full h-[calc(90vh-70px)]" 
                frameBorder="0"
              ></iframe>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default About 