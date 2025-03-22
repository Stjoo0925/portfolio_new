'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FrontendIcon, BackendIcon, DevOpsIcon, CollaborationIcon,
  VueIcon, ReactIcon, JavaScriptIcon, TypeScriptIcon,
  JavaIcon, SpringIcon, PythonIcon, PyTorchIcon,
  MySQLIcon, AWSIcon, DockerIcon, GitHubActionsIcon,
  FigmaIcon, GitHubIcon
} from './icons/icons'

interface Skill {
  name: string
  icon: React.FC 
  color: string
}

const Skills = () => {
  const currentPage = 2

  const frontendSkills: Skill[] = [
    { name: 'Vue', icon: VueIcon, color: '4FC08D' },
    { name: 'React', icon: ReactIcon, color: '61DAFB' },
    { name: 'JavaScript', icon: JavaScriptIcon, color: 'F7DF1E' },
    { name: 'TypeScript', icon: TypeScriptIcon, color: '3178C6' },
  ]
  
  const backendSkills: Skill[] = [
    { name: 'Java', icon: JavaIcon, color: '437291' },
    { name: 'Spring', icon: SpringIcon, color: '6DB33F' },
    { name: 'Python', icon: PythonIcon, color: '3776AB' },
    { name: 'PyTorch', icon: PyTorchIcon, color: 'EE4C2C' },
  ]
  
  const devopsSkills: Skill[] = [
    { name: 'MySQL', icon: MySQLIcon, color: '4479A1' },
    { name: 'AWS EC2', icon: AWSIcon, color: '232F3E' },
    { name: 'Docker', icon: DockerIcon, color: '2496ED' },
    { name: 'GitHub Actions', icon: GitHubActionsIcon, color: '2088FF' },
  ]
  
  const collaborationSkills: Skill[] = [
    { name: 'Figma', icon: FigmaIcon, color: 'F24E1E' },
    { name: 'GitHub', icon: GitHubIcon, color: '181717' },
  ]
  
  const SkillItem = ({ skill, index }: { skill: Skill, index: number }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="mb-4"
    >
      <div className="flex items-center p-3 bg-white/80 rounded-xl hover:bg-white hover:shadow-sm transition-all">
        <div 
          className="w-12 h-12 mr-3 flex items-center justify-center rounded-xl text-white"
          style={{ 
            backgroundColor: `#${skill.color}`,
            boxShadow: `0 4px 8px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.3)`
          }}
        >
          <skill.icon />
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
              <div className="p-2 bg-[#FD5F07] rounded-lg flex items-center justify-center text-white">
                <FrontendIcon />
              </div>
              <h3 className="text-xl font-bold text-[#FD5F07]">Frontend</h3>
            </div>
            <ul className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div 
                    className="w-12 h-12 mr-3 flex items-center justify-center rounded-xl text-white"
                    style={{ 
                      backgroundColor: `#${skill.color}`,
                      boxShadow: `0 4px 8px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.3)`
                    }}
                  >
                    <skill.icon />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">{skill.name}</p>
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
              <div className="p-2 bg-[#FD5F07] rounded-lg flex items-center justify-center text-white">
                <BackendIcon />
              </div>
              <h3 className="text-xl font-bold text-[#FD5F07]">Backend</h3>
            </div>
            <ul className="space-y-4">
              {backendSkills.map((skill, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div 
                    className="w-12 h-12 mr-3 flex items-center justify-center rounded-xl text-white"
                    style={{ 
                      backgroundColor: `#${skill.color}`,
                      boxShadow: `0 4px 8px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.3)`
                    }}
                  >
                    <skill.icon />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">{skill.name}</p>
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
              <div className="p-2 bg-[#FD5F07] rounded-lg flex items-center justify-center text-white">
                <DevOpsIcon />
              </div>
              <h3 className="text-xl font-bold text-[#FD5F07]">DevOps</h3>
            </div>
            <ul className="space-y-4">
              {devopsSkills.map((skill, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div 
                    className="w-12 h-12 mr-3 flex items-center justify-center rounded-xl text-white"
                    style={{ 
                      backgroundColor: `#${skill.color}`,
                      boxShadow: `0 4px 8px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.3)`
                    }}
                  >
                    <skill.icon />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">{skill.name}</p>
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
              <div className="p-2 bg-[#FD5F07] rounded-lg flex items-center justify-center text-white">
                <CollaborationIcon />
              </div>
              <h3 className="text-xl font-bold text-[#FD5F07]">Collaboration</h3>
            </div>
            <ul className="space-y-4">
              {collaborationSkills.map((skill, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div 
                    className="w-12 h-12 mr-3 flex items-center justify-center rounded-xl text-white"
                    style={{ 
                      backgroundColor: `#${skill.color}`,
                      boxShadow: `0 4px 8px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.3)`
                    }}
                  >
                    <skill.icon />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">{skill.name}</p>
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