'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './animations/ScrollReveal'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: 'web' | 'mobile' | 'design'
  demoUrl?: string
  codeUrl?: string
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  
  const projects: Project[] = []
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)
  
  const currentPage = 3

  return (
    <section id="projects" className="bg-[#070B14] relative overflow-hidden min-h-screen py-20">
      {/* 우주 배경 효과 */}
      <div className="absolute inset-0 bg-[#070B14] bg-opacity-90 -z-10"></div>
      
      {/* 별이 빛나는 배경 */}
      <div className="absolute inset-0 bg-[url('/stars.svg')] bg-repeat opacity-40 -z-5"></div>
      
      {/* 큰 행성 요소 - 더 투명하게 */}
      <div className="absolute -top-20 -right-20 w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#1E3B70]/20 via-[#0D2452]/10 to-transparent blur-xl animate-planet-rotate opacity-30 -z-5"></div>
      
      {/* 작은 행성 */}
      <div className="absolute bottom-20 left-20 w-[15vw] h-[15vw] rounded-full bg-gradient-to-tr from-[#FD5F07]/10 via-[#FD5F07]/5 to-transparent blur-md animate-float-slow opacity-30 -z-5"></div>
      
      {/* 성운/은하 효과 */}
      <div className="absolute top-1/3 left-0 w-full h-[30vh] bg-gradient-to-r from-[#3B1D70]/5 via-[#FD5F07]/5 to-[#1E3B70]/5 blur-2xl animate-nebula-glow opacity-20 -z-5"></div>
      
      {/* 별들 (고정된 작은 점들) - 30개로 줄임 */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2,
            animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite ${Math.random() * 5}s`
          }}
        />
      ))}
      
      {/* 빛나는 별들 (큰 별) - 5개로 줄임 */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`bright-star-${i}`}
          className="absolute w-1.5 h-1.5 bg-white rounded-full animate-glow-star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.3,
            boxShadow: '0 0 8px 1px rgba(255, 255, 255, 0.5)',
            animationDelay: `${Math.random() * 10}s`
          }}
        />
      ))}
      
      {/* 유성 효과 - 2개로 줄임 */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`meteor-${i}`}
          className="absolute h-0.5 bg-white rounded-full meteor"
          style={{
            top: `${Math.random() * 60}%`,
            left: '100%',
            width: `${Math.random() * 80 + 40}px`,
            opacity: 0,
            transform: 'rotate(-15deg)',
            boxShadow: '0 0 8px 1px rgba(255, 255, 255, 0.5)',
          }}
          animate={{
            x: [0, -2000],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            repeat: Infinity,
            repeatDelay: Math.random() * 20 + 15,
            ease: "easeOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {/* 우주 먼지 효과 - 10개로 줄임 */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 50 - 25],
            x: [0, Math.random() * 50 - 25],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      {/* 타원형 궤도 효과 - 하나만 유지 */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] border border-[#3B1D70]/10 rounded-full animate-orbit hidden md:block"></div>

      <div className="section-container relative z-10">
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
              Projects
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-200 max-w-2xl mx-auto"
          >
            개인 및 팀 프로젝트들을 소개합니다. 다양한 기술 스택과 협업 경험을 통해 성장했습니다.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
              className="bg-[#21262D]/50 backdrop-blur-sm rounded-xl overflow-hidden border border-[#FD5F07]/20 hover:border-[#FD5F07]/40 transition-colors duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#FD5F07] mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-[#FD5F07]/20 text-[#FD5F07] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <FaGithub className="text-lg" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 