'use client'

import React, { useState } from 'react'
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
  
  const projects: Project[] = [
    {
      id: 1,
      title: '온라인 쇼핑몰',
      description: '모던한 UI/UX를 갖춘 완전한 기능의 전자상거래 플랫폼입니다. 제품 필터링, 카트 기능, 결제 처리 등이 포함되어 있습니다.',
      image: '/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      category: 'web',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: '음악 스트리밍 앱',
      description: '사용자가 음악을 검색하고 재생할 수 있는 스트리밍 애플리케이션입니다. 플레이리스트 생성 및 관리 기능을 제공합니다.',
      image: '/project2.jpg',
      technologies: ['React Native', 'Redux', 'Firebase', 'Spotify API'],
      category: 'mobile',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: '날씨 대시보드',
      description: '전 세계 도시의 실시간 날씨 정보와 예보를 보여주는 대시보드입니다. 아름다운 시각화와 반응형 디자인을 갖추고 있습니다.',
      image: '/project3.jpg',
      technologies: ['Vue.js', 'Tailwind CSS', 'Chart.js', 'Weather API'],
      category: 'web',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 4,
      title: '포트폴리오 웹사이트',
      description: '애플 스타일로 디자인된 개인 포트폴리오 웹사이트입니다. 원페이지 레이아웃과 부드러운 스크롤 효과를 제공합니다.',
      image: '/project4.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'web',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 5,
      title: '할 일 관리 앱',
      description: '사용자가 할 일을 관리하고 일정을 계획할 수 있는 모바일 앱입니다. 알림 기능과 완료된 작업 통계를 제공합니다.',
      image: '/project5.jpg',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Local Notifications'],
      category: 'mobile',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 6,
      title: '브랜드 아이덴티티 디자인',
      description: '스타트업을 위한 브랜드 아이덴티티 디자인 프로젝트입니다. 로고, 컬러 팔레트, 타이포그래피 등이 포함됩니다.',
      image: '/project6.jpg',
      technologies: ['Figma', 'Illustrator', 'Photoshop'],
      category: 'design',
      demoUrl: '#'
    },
  ]
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)
  
  const currentPage = 3

  return (
    <section id="projects" className="bg-[#0D1117] relative overflow-hidden">
      {/* 배경 그라데이션 효과 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#FD5F07]/20 via-[#FD5F07]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#FD5F07]/20 via-[#FD5F07]/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FD5F07] via-[#FD5F07] to-[#FD5F07]">
              Projects
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto"
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