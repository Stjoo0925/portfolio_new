'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './animations/ScrollReveal'
import Script from 'next/script'

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
}

const Skills = () => {
  const frontendSkills: Skill[] = [
    { name: 'Vue', icon: 'vuedotjs', color: '4FC08D' },
    { name: 'React', icon: 'react', color: '61DAFB' },
    { name: 'JavaScript', icon: 'javascript', color: 'F7DF1E' },
    { name: 'TypeScript', icon: 'typescript', color: '3178C6' },
  ]
  
  const backendSkills: Skill[] = [
    { name: 'Java', icon: 'openjdk', color: '437291' },
    { name: 'Spring', icon: 'spring', color: '6DB33F' },
    { name: 'Python', icon: 'python', color: '3776AB' },
    { name: 'PyTorch', icon: 'pytorch', color: 'EE4C2C' },
  ]
  
  const devopsSkills: Skill[] = [
    { name: 'MySQL', icon: 'mysql', color: '4479A1' },
    { name: 'AWS EC2', icon: 'amazonec2', color: '232F3E' },
    { name: 'Docker', icon: 'docker', color: '2496ED' },
    { name: 'GitHub Actions', icon: 'githubactions', color: '2088FF' },
  ]
  
  const collaborationSkills: Skill[] = [
    { name: 'Figma', icon: 'figma', color: 'F24E1E' },
    { name: 'Git', icon: 'git', color: 'F05032' },
    { name: 'GitHub', icon: 'github', color: '181717' },
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
            src={`https://cdn.simpleicons.org/${skill.icon}/${skill.color}`} 
            alt={skill.name} 
            className="w-5 h-5" 
          />
        </div>
        <span className="font-medium text-md">{skill.name}</span>
      </div>
    </motion.div>
  )
  
  return (
    <section id="skills" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-bl from-blue-100 to-transparent rounded-full opacity-80 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-100 to-transparent rounded-full opacity-50 blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-apple-blue to-blue-600">
              Skills
            </span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            다양한 프로젝트를 통해 습득한 기술들입니다.
          </p>
        </ScrollReveal>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
            <ScrollReveal delay={0.2}>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-apple hover:shadow-apple-hover border border-gray-100 transition-all duration-300 h-[360px]">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg">
                    <FrontendIcon />
                  </div>
                  <h3 className="text-xl font-bold ml-4 text-apple-dark">Frontend</h3>
                </div>
                
                <div>
                  {frontendSkills.map((skill, index) => (
                    <SkillItem key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-apple hover:shadow-apple-hover border border-gray-100 transition-all duration-300 h-[360px]">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                    <BackendIcon />
                  </div>
                  <h3 className="text-xl font-bold ml-4 text-apple-dark">Backend</h3>
                </div>
                
                <div>
                  {backendSkills.map((skill, index) => (
                    <SkillItem key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-apple hover:shadow-apple-hover border border-gray-100 transition-all duration-300 h-[360px]">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white shadow-lg">
                    <DevOpsIcon />
                  </div>
                  <h3 className="text-xl font-bold ml-4 text-apple-dark">DB & DevOps</h3>
                </div>
                
                <div>
                  {devopsSkills.map((skill, index) => (
                    <SkillItem key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.5}>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-apple hover:shadow-apple-hover border border-gray-100 transition-all duration-300 h-[360px]">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white shadow-lg">
                    <CollaborationIcon />
                  </div>
                  <h3 className="text-xl font-bold ml-4 text-apple-dark">Collaboration</h3>
                </div>
                
                <div>
                  {collaborationSkills.map((skill, index) => (
                    <SkillItem key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 