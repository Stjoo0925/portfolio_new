'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './animations/ScrollReveal'

const Contact = () => {
  const [showResume, setShowResume] = useState(false);
  
  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 -z-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-transparent opacity-70 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 -z-10 bg-gradient-to-tl from-purple-50 via-blue-50 to-transparent opacity-70 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-apple-blue to-blue-600">
              Contact
            </span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            궁금한 점이 있거나 프로젝트를 함께 하고 싶으시다면 언제든지 연락주세요.
          </p>
        </ScrollReveal>
        
        <div className="max-w-3xl mx-auto">
          <ScrollReveal delay={0.2}>
            <div className="bg-gradient-to-br from-apple-blue to-blue-600 text-white p-8 md:p-10 rounded-2xl shadow-apple relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">연락처 정보</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center cursor-pointer transition-all"
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm opacity-70">전화번호</p>
                        <p className="font-medium">010-3494-3809</p>
                      </div>
                    </motion.div>
                    
                    <motion.a 
                      href="mailto:stjoo0925@gmail.com"
                      whileHover={{ x: 5 }}
                      className="flex items-center cursor-pointer transition-all"
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm opacity-70">이메일</p>
                        <p className="font-medium">stjoo0925@gmail.com</p>
                      </div>
                    </motion.a>
                    
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center cursor-pointer transition-all"
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm opacity-70">위치</p>
                        <p className="font-medium">경기도 성남시</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="mt-8 md:mt-0">
                    <h4 className="text-lg font-semibold mb-6">소셜 미디어</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <motion.a 
                        whileHover={{ y: -5 }}
                        href="https://github.com/Stjoo0925" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-14 h-14 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#333333]/20 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 group-hover:text-[#333333] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </motion.a>
                      
                      <motion.a 
                        whileHover={{ y: -5 }}
                        href="https://velog.io/@stjoo0925" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-14 h-14 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#20C997]/20 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 group-hover:text-[#20C997] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3Zm6.883 6.25c.63 0 1.005.3 1.125.9l1.463 8.303c.465-.615.846-1.133 1.146-1.553.465-.66.893-1.418 1.283-2.273.405-.855.608-1.62.608-2.295 0-.405-.113-.727-.338-.967-.21-.255-.608-.577-1.193-.967.6-.765 1.35-1.148 2.25-1.148.48 0 .878.143 1.193.428.33.285.494.704.494 1.26 0 .93-.39 2.093-1.17 3.488-.765 1.38-2.241 3.457-4.431 6.232l-2.227.156-1.711-9.628h-2.25V7.24c.6-.195 1.305-.406 2.115-.63.81-.24 1.358-.36 1.643-.36Z"/>
                        </svg>
                      </motion.a>
                      
                      <motion.a 
                        whileHover={{ y: -5 }}
                        href="https://discord.gg/8zrXwu4Cms" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-14 h-14 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#5865F2]/20 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 group-hover:text-[#5865F2] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                        </svg>
                      </motion.a>
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="text-lg font-semibold mb-4">이력서 보기</h4>
                      <motion.button 
                        onClick={() => setShowResume(true)}
                        className="group inline-flex items-center bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-xl transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:text-blue-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="group-hover:text-blue-300 transition-colors">이력서 보기</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
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
              <h3 className="text-xl font-bold text-apple-dark">주순태 이력서</h3>
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

export default Contact 