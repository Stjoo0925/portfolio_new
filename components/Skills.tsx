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
    <section id="skills" className="bg-[#070B14] relative overflow-hidden min-h-screen py-20">
      {/* 우주 배경 - 별자리 테마 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#070B14] -z-10"></div>
      
      {/* 별이 빛나는 배경 */}
      <div className="absolute inset-0 bg-[url('/stars.svg')] bg-repeat opacity-50 -z-5"></div>
      
      {/* 희미한 성운 */}
      <div className="absolute left-0 top-[20%] w-full h-[50vh] bg-gradient-to-r from-[#3F00FF]/5 via-[#8B5CF6]/5 to-[#3F00FF]/5 blur-3xl animate-nebula-fade opacity-20 -z-5"></div>
      
      {/* 별자리 라인 네트워크 */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#FFFFFF" strokeOpacity="0.07" strokeWidth="1">
          <line x1="10%" y1="20%" x2="30%" y2="35%" className="animate-constellation-line"></line>
          <line x1="30%" y1="35%" x2="45%" y2="25%" className="animate-constellation-line"></line>
          <line x1="45%" y1="25%" x2="60%" y2="40%" className="animate-constellation-line"></line>
          <line x1="60%" y1="40%" x2="80%" y2="30%" className="animate-constellation-line"></line>
          <line x1="80%" y1="30%" x2="90%" y2="45%" className="animate-constellation-line"></line>
          <line x1="10%" y1="55%" x2="25%" y2="65%" className="animate-constellation-line"></line>
          <line x1="25%" y1="65%" x2="40%" y2="70%" className="animate-constellation-line"></line>
          <line x1="40%" y1="70%" x2="60%" y2="60%" className="animate-constellation-line"></line>
          <line x1="60%" y1="60%" x2="75%" y2="75%" className="animate-constellation-line"></line>
          <line x1="75%" y1="75%" x2="90%" y2="65%" className="animate-constellation-line"></line>
          <line x1="30%" y1="35%" x2="25%" y2="65%" className="animate-constellation-line"></line>
          <line x1="60%" y1="40%" x2="60%" y2="60%" className="animate-constellation-line"></line>
        </g>
      </svg>
      
      {/* 별자리 결절점 */}
      {[
        { x: '10%', y: '20%' }, { x: '30%', y: '35%' }, { x: '45%', y: '25%' }, 
        { x: '60%', y: '40%' }, { x: '80%', y: '30%' }, { x: '90%', y: '45%' },
        { x: '10%', y: '55%' }, { x: '25%', y: '65%' }, { x: '40%', y: '70%' },
        { x: '60%', y: '60%' }, { x: '75%', y: '75%' }, { x: '90%', y: '65%' }
      ].map((point, i) => (
        <div 
          key={`constellation-point-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full animate-glow-star-small hidden md:block"
          style={{
            left: point.x,
            top: point.y,
            opacity: 0.6,
            boxShadow: '0 0 5px 1px rgba(255, 255, 255, 0.5)'
          }}
        ></div>
      ))}
      
      {/* 유성 효과 */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`skills-meteor-${i}`}
          className="absolute h-0.5 bg-white rounded-full hidden md:block"
          style={{
            top: `${i * 25 + 15}%`,
            left: '100%',
            width: `${Math.random() * 80 + 40}px`,
            opacity: 0,
            transform: 'rotate(-20deg)',
            boxShadow: '0 0 8px 1px rgba(255, 255, 255, 0.7)',
          }}
          animate={{
            x: [0, -2000],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: Math.random() * 1.5 + 1,
            repeat: Infinity,
            repeatDelay: Math.random() * 15 + 10,
            ease: "easeOut",
            delay: i * 7,
          }}
        />
      ))}
      
      {/* 움직이는 점/입자 (스킬 연결) */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`skills-particle-${i}`}
          className="absolute w-1 h-1 bg-[#FD5F07]/70 rounded-full hidden md:block"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      ))}

      <div className="section-container relative z-10">
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