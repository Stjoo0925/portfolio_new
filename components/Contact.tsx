'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './animations/ScrollReveal'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa'

const Contact = () => {
  const currentPage = 4

  return (
    <section id="contact" className="bg-[#0D1117] relative overflow-hidden">

      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FD5F07] to-[#FFFFFF]">
              Contact
            </span>
          </motion.h2>
          <p className="text-gray-200">궁금한 점이 있거나 프로젝트를 함께 하고 싶으시다면 언제든지 연락주세요.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 연락처 정보 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-[#21262D]/50 backdrop-blur-sm p-8 rounded-xl border border-[#FD5F07]/20 hover:border-[#FD5F07]/40 transition-colors duration-300"
          >
            <h3 className="text-2xl font-bold text-[#FD5F07] mb-6">연락처</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#FD5F07] rounded-lg">
                  <FaEnvelope className="w-6 h-6 text-[#FFFFFF]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-gray-200 font-medium">stjoo0925@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#FD5F07] rounded-lg">
                  <FaPhone className="w-6 h-6 text-[#FFFFFF]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-gray-200 font-medium">010-3494-3809</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#FD5F07] rounded-lg">
                  <FaMapMarkerAlt className="w-6 h-6 text-[#FFFFFF]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-gray-200 font-medium">경기도 성남시</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 소셜 미디어 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#21262D]/50 backdrop-blur-sm p-8 rounded-xl border border-[#FD5F07]/20 hover:border-[#FD5F07]/40 transition-colors duration-300"
          >
            <h3 className="text-2xl font-bold text-[#FD5F07] mb-6">소셜 미디어</h3>
            <div className="space-y-6">
              <a 
                href="https://github.com/stjoo0925" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-[#FD5F07] rounded-lg group-hover:bg-[#FD5F07]/20 transition-colors duration-300">
                  <FaGithub className="w-6 h-6 text-[#FFFFFF]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <p className="text-gray-300 font-medium text-xs group-hover:text-[#FD5F07] transition-colors duration-300">Personal GitHub</p>
                </div>
              </a>
              <a 
                href="https://velog.io/@stjoo0925" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-[#FD5F07] rounded-lg group-hover:bg-[#FD5F07]/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#FFFFFF]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Velog</p>
                  <p className="text-gray-300 font-medium text-xs group-hover:text-[#FD5F07] transition-colors duration-300">Tech Blog</p>
                </div>
              </a>
              <a 
                href="https://discord.gg/8zrXwu4Cms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-[#FD5F07] rounded-lg group-hover:bg-[#FD5F07]/30 transition-colors duration-300">
                  <FaDiscord className="w-6 h-6 text-[#FFFFFF]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Discord</p>
                  <p className="text-gray-300 font-medium text-xs group-hover:text-[#FD5F07] transition-colors duration-300">Discord Community</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 