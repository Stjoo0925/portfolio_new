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
    <section id="about" className="py-24 md:py-32 bg-white relative">
      <div className="container px-4 mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-apple-blue to-blue-600">
              About
            </span>
          </h2>
        </ScrollReveal>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-apple-gray flex items-center justify-center shadow-apple">
                  <div className="relative">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                      className="absolute -inset-12 rounded-full opacity-20 blur-xl bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40"
                    ></motion.div>
                    <div className="text-[150px] relative">👨‍💻</div>
                  </div>
                </div>
                
                {/* 데코레이션 요소 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute -top-4 -right-4 md:top-auto md:-bottom-8 md:-right-8 bg-white rounded-xl shadow-apple p-4 z-10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-apple-blue rounded-full flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold">5+ 년간의</p>
                      <p className="text-lg font-bold text-apple-dark">개발 경험</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-white rounded-xl shadow-apple p-4 z-10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold">20+</p>
                      <p className="text-lg font-bold text-apple-dark">프로젝트</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
            
            <div>
              <ScrollReveal delay={0.4}>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-apple-blue">
                  창의적인 웹 개발자 
                </h3>
              </ScrollReveal>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <ScrollReveal delay={0.5}>
                  <p className="text-lg">
                    사용자 중심 디자인과 깔끔한 코드를 통해 웹 사이트를 개발하는 것을 좋아합니다. 
                    항상 새로운 기술을 배우고 적용하여 최신 트렌드를 따릅니다.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={0.6}>
                  <p className="text-lg">
                    프론트엔드와 백엔드 모두에 경험이 있으며, 특히 React와 TypeScript를 활용한 
                    현대적인 웹 애플리케이션 구축에 전문성을 갖고 있습니다.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={0.7}>
                  <p className="text-lg">
                    협업과 소통을 중요시하며, 사용자와 클라이언트의 니즈를 이해하고
                    그에 맞는 최적의 솔루션을 제공하기 위해 노력합니다.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={0.8}>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }} 
                      className="btn text-base py-3 px-8 rounded-full shadow-apple-button"
                    >
                      이력서 보기
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }} 
                      className="text-base py-3 px-8 text-apple-dark bg-white border border-gray-200 rounded-full shadow-apple-button hover:bg-gray-50 font-medium flex items-center"
                    >
                      더 알아보기
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 배경 데코 */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 -z-10 bg-gradient-to-bl from-blue-50 via-indigo-50 to-transparent opacity-70 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 -z-10 bg-gradient-to-tr from-apple-blue/5 via-blue-50 to-transparent opacity-70 rounded-full blur-3xl"></div>
    </section>
  )
}

export default About 