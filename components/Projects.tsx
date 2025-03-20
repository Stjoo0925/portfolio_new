'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './animations/ScrollReveal'

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
  
  return (
    <section id="projects" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 -z-10 bg-gradient-to-bl from-apple-blue/5 via-blue-50 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 -z-10 bg-gradient-to-tr from-purple-100/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-apple-blue to-blue-600">
              Projects
            </span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-2">
            다양한 프로젝트를 통해 실력을 키우고 있습니다.
          </p>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
            각 프로젝트는 새로운 도전과 배움의 기회였습니다.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <div className="flex justify-center mb-16">
            <div className="inline-flex p-1 bg-gray-100 rounded-full">
              {['all', 'web', 'mobile', 'design'].map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative ${
                    activeCategory === category
                      ? 'text-white'
                      : 'text-gray-600 hover:text-apple-blue'
                  }`}
                  whileHover={{ 
                    scale: activeCategory === category ? 1 : 1.05
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeCategory === category && (
                    <motion.div
                      layoutId="activeProjectCategory"
                      className="absolute inset-0 bg-apple-blue rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">
                    {category === 'all' ? '전체' :
                    category === 'web' ? '웹' :
                    category === 'mobile' ? '모바일' : '디자인'}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={0.2 + index * 0.1}>
              <motion.div 
                className="bg-white rounded-2xl overflow-hidden shadow-apple hover:shadow-apple-hover border border-gray-100 transition-all duration-300 h-full"
                whileHover={{ y: -8 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="h-48 lg:h-56 bg-gradient-to-br from-gray-50 to-apple-gray relative overflow-hidden">
                  {/* 프로젝트 썸네일 영역 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="relative"
                      animate={{ 
                        scale: hoveredProject === project.id ? 1.05 : 1,
                        y: hoveredProject === project.id ? -5 : 0
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="absolute -inset-10 bg-gradient-to-r from-blue-200/10 via-purple-200/10 to-pink-200/10 rounded-full blur-3xl opacity-70"></div>
                      <div 
                        className="h-24 w-24 rounded-2xl shadow-lg bg-white flex items-center justify-center relative z-10 border-2 border-gray-100"
                      >
                        <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-apple-blue to-blue-500">{project.id}</span>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* 카테고리 뱃지 */}
                  <div className="absolute top-4 right-4">
                    <div className={`text-xs font-semibold px-3 py-1 rounded-full 
                      ${project.category === 'web' 
                        ? 'bg-blue-100 text-blue-700' 
                        : project.category === 'mobile'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-purple-100 text-purple-700'
                      }`}
                    >
                      {project.category === 'web' ? '웹' : project.category === 'mobile' ? '모바일' : '디자인'}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-apple-dark">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{project.description}</p>
                  
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <motion.a 
                        href={project.demoUrl} 
                        className="btn text-xs px-5 py-2 rounded-full flex items-center justify-center gap-1.5 shadow-apple-button"
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        데모
                      </motion.a>
                    )}
                    {project.codeUrl && (
                      <motion.a 
                        href={project.codeUrl} 
                        className="text-xs px-5 py-2 rounded-full border border-gray-200 text-apple-dark flex items-center justify-center gap-1.5 shadow-apple-button hover:bg-gray-50 transition-colors duration-300"
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        코드
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center">
            <motion.button
              className="bg-transparent border-2 border-apple-blue text-apple-blue px-10 py-3.5 rounded-full text-lg font-medium shadow-apple-button hover:shadow-apple-hover transition-all duration-300 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              더 많은 프로젝트 보기
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Projects 