'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './animations/ScrollReveal'

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }
  
  return (
    <section id="about" className="min-h-screen py-12 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 -z-10 bg-gradient-to-bl from-blue-50/50 via-blue-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 -z-10 bg-gradient-to-tr from-indigo-50/50 via-indigo-100/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* 좌측: 자기소개 */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100 shadow-xl">
                <img 
                  src="/images/profile-img.jpg" 
                  alt="주순태 프로필" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent"></div>
              </div>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl font-bold text-center"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600">
                About Me
              </span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="prose prose-lg max-w-none bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-blue-50"
            >
              <p className="text-gray-600 leading-relaxed">
                <span className="text-2xl font-bold text-gray-900 block mb-4">안녕하세요! 저는 주순태입니다.</span>
                <span className="text-lg text-blue-600 font-semibold block mb-4">배움을 통해 지속적인 성장을 추구합니다.</span>
                <span className="text-sm text-gray-700 block mb-4">
                  신기술과 개발 트렌드를 꾸준히 탐구하며, 이를 프로젝트에 적용하는 과정에서 얻는 배움을 통해 지속적인 성장을 추구합니다. 
                  여러 프로젝트 경험을 통해 제한된 시간과 자원 속에서도 최선의 결과를 도출하는 문제 해결 능력을 키웠으며, 
                  이는 현재 진행하는 모든 프로젝트에서 중요한 자산이 되고 있습니다.
                </span>
                <span className="text-lg text-blue-600 font-semibold block mb-4">팀 프로젝트를 진행하며 '함께'의 가치를 배웠습니다.</span>
                <span className="text-sm text-gray-700 block">
                  서로 다른 배경과 경험을 가진 팀원들의 다양한 관점이 프로젝트의 완성도를 높이는 핵심 요소임을 깨달았으며, 
                  이를 통해 협업의 시너지를 극대화하는 개발자로 성장하고 있습니다.
                </span>
              </p>
            </motion.div>
          </div>

          {/* 우측: 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div 
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-blue-50 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                경력
              </h3>
              <div className="space-y-4">
                <div className="relative pl-4 border-l-2 border-blue-100">
                  <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-blue-500"></div>
                  <p className="font-bold text-base text-gray-900">랜드마크앤코 주식회사</p>
                  <p className="text-blue-600 text-sm font-medium">2019.07 - 2023.08 (4년1개월)</p>
                  <p className="text-gray-500 text-sm">토목건설업</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                학력
              </h3>
              <div className="space-y-4">
                <div className="relative pl-4 border-l-2 border-blue-100">
                  <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-blue-500"></div>
                  <p className="font-bold text-base text-gray-900">숭실사이버대학교</p>
                  <p className="text-blue-600 text-sm font-medium">건설시스템공학과</p>
                  <p className="text-gray-500 text-sm">2020.03 - 2024.02 / 학점 : 3.76</p>
                </div>
                <div className="relative pl-4 border-l-2 border-blue-100">
                  <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-blue-500"></div>
                  <p className="font-bold text-base text-gray-900">서울 대원고등학교</p>
                  <p className="text-gray-500 text-sm">2008.03 - 2011.02</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                교육 과정
              </h3>
              <div className="space-y-4">
                <div className="relative pl-4 border-l-2 border-blue-100">
                  <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-blue-500"></div>
                  <p className="font-bold text-base text-gray-900">클라우드 기반의 CI/CD를 활용한 풀스택 [자바, 뷰, 플러터] 개발자</p>
                  <p className="text-blue-600 text-sm font-medium">2024.04 - 2024.10</p>
                  <p className="text-gray-500 text-sm">하이미디어 아카데미</p>
                </div>
                <div className="relative pl-4 border-l-2 border-blue-100">
                  <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-blue-500"></div>
                  <p className="font-bold text-base text-gray-900">심화_생성형 AI활용 인재 양성과정(조별멘토)</p>
                  <p className="text-blue-600 text-sm font-medium">2024.10 - 2024.12</p>
                  <p className="text-gray-500 text-sm">하이미디어 아카데미</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                자격증
              </h3>
              <div className="space-y-4">
                <div className="relative pl-4 border-l-2 border-blue-100">
                  <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-blue-500"></div>
                  <p className="font-bold text-base text-gray-900">인공지능학습데이터전문가 2급</p>
                  <p className="text-blue-600 text-sm font-medium">2025.01.20</p>
                  <p className="text-gray-500 text-sm">한국인공지능자격센터</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 