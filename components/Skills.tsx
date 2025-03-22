'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './animations/ScrollReveal'
import Script from 'next/script'
import Image from 'next/image'

// 아이콘 컴포넌트 직접 정의
const FrontendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const BackendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
)

const DevOpsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
)

const CollaborationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

interface Skill {
  name: string
  icon: string
  color: string
  description: string
}

const Skills = () => {
  const currentPage = 2

  const frontendSkills: Skill[] = [
    { name: 'Vue', icon: 'https://cdn.simpleicons.org/vuedotjs/4FC08D', color: '4FC08D', description: 'Vue.js는 웹 애플리케이션을 만드는 데 사용되는 프론트엔드 프레임워크입니다.' },
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', color: '61DAFB', description: 'React는 웹 애플리케이션을 만드는 데 사용되는 프론트엔드 프레임워크입니다.' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', color: 'F7DF1E', description: 'JavaScript는 웹 페이지에 생동감을 더해주는 프로그래밍 언어입니다.' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6', color: '3178C6', description: 'TypeScript는 JavaScript의 슈퍼셋입니다.' },
  ]
  
  const backendSkills: Skill[] = [
    { name: 'Java', icon: 'https://cdn.simpleicons.org/openjdk/437291', color: '437291', description: 'Java는 웹 애플리케이션을 만드는 데 사용되는 프로그래밍 언어입니다.' },
    { name: 'Spring', icon: 'https://cdn.simpleicons.org/spring/6DB33F', color: '6DB33F', description: 'Spring은 자바 플랫폼을 위한 오픈소스 애플리케이션 프레임워크입니다.' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', color: '3776AB', description: 'Python은 프로그래밍 언어입니다.' },
    { name: 'PyTorch', icon: 'https://cdn.simpleicons.org/pytorch/EE4C2C', color: 'EE4C2C', description: 'PyTorch는 파이썬을 위한 오픈소스 딥러닝 라이브러리입니다.' },
  ]
  
  const devopsSkills: Skill[] = [
    { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1', color: '4479A1', description: 'MySQL은 관계형 데이터베이스 관리 시스템입니다.' },
    { name: 'AWS EC2', icon: 'https://cdn.simpleicons.org/amazonec2/232F3E', color: '232F3E', description: 'AWS EC2는 클라우드에서 확장 가능한 용량을 제공하는 웹 서비스입니다.' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED', color: '2496ED', description: 'Docker는 애플리케이션을 컨테이너화하는 오픈소스 프로젝트입니다.' },
    { name: 'GitHub Actions', icon: 'https://cdn.simpleicons.org/githubactions/2088FF', color: '2088FF', description: 'GitHub Actions는 소프트웨어 개발을 위한 자동화된 워크플로입니다.' },
  ]
  
  const collaborationSkills: Skill[] = [
    { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E', color: 'F24E1E', description: 'Figma는 협업을 위한 디자인 도구입니다.' },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032', color: 'F05032', description: 'Git은 소스 코드를 관리하는 데 사용되는 분산 버전 관리 시스템입니다.' },
    { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/181717', color: '181717', description: 'GitHub는 소스 코드를 저장하고 협업하는 데 사용되는 웹 기반 호스팅 서비스입니다.' },
  ]
  
  const SkillItem = ({ skill, index }: { skill: Skill, index: number }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="mb-4"
    >
      <div className="flex items-center p-3 bg-white/80 rounded-xl hover:bg-white hover:shadow-sm transition-all">
        <div className="w-6 h-6 mr-3 flex items-center justify-center">
          <img 
            src={skill.icon}
            alt={skill.name} 
            className="w-5 h-5" 
          />
        </div>
        <span className="font-medium text-md">{skill.name}</span>
      </div>
    </motion.div>
  )
  
  return (
    <section id="skills" className="bg-[#0D1117] relative overflow-hidden">

      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FD5F07] to-[#FFFFFF]">
              Skills
            </span>
          </h2>
          <p className="text-gray-200">다양한 프로젝트를 통해 습득한 기술들입니다.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Frontend Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#21262D]/50 backdrop-blur-sm p-6 rounded-xl border border-[#FD5F07]/20 hover:border-[#FD5F07]/40 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#FD5F07] rounded-lg">
                <svg className="w-6 h-6 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#FD5F07]">Frontend</h3>
            </div>
            <ul className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FD5F07] mt-2"></div>
                  <div>
                    <p className="text-gray-300 font-medium">{skill.name}</p>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Backend Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-[#21262D]/50 backdrop-blur-sm p-6 rounded-xl border border-[#ff4500]/20 hover:border-[#FD5F07]/40 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#FD5F07] rounded-lg">
                <svg className="w-6 h-6 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#FD5F07]">Backend</h3>
            </div>
            <ul className="space-y-4">
              {backendSkills.map((skill, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FD5F07] mt-2"></div>
                  <div>
                    <p className="text-gray-300 font-medium">{skill.name}</p>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* DevOps Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#21262D]/50 backdrop-blur-sm p-6 rounded-xl border border-[#FD5F07]/20 hover:border-[#FD5F07]/40 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#FD5F07] rounded-lg">
                <svg className="w-6 h-6 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#FD5F07]">DevOps</h3>
            </div>
            <ul className="space-y-4">
              {devopsSkills.map((skill, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FD5F07] mt-2"></div>
                  <div>
                    <p className="text-gray-300 font-medium">{skill.name}</p>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Collaboration Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-[#21262D]/50 backdrop-blur-sm p-6 rounded-xl border border-[#FD5F07]/20 hover:border-[#FD5F07]/40 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#FD5F07] rounded-lg">
                <svg className="w-6 h-6 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#FD5F07]">Collaboration</h3>
            </div>
            <ul className="space-y-4">
              {collaborationSkills.map((skill, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FD5F07] mt-2"></div>
                  <div>
                    <p className="text-gray-300 font-medium">{skill.name}</p>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills 