import React from 'react'
import { motion } from 'framer-motion'

interface PageIndicatorProps {
  activeSection: string
  setActiveSection?: (section: string) => void
}

const PageIndicator: React.FC<PageIndicatorProps> = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'main', label: 'Main' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    if (setActiveSection) {
      setActiveSection(id)
    }
  }

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col items-center">
      <motion.div 
        className="py-3 px-4 bg-white/70 backdrop-blur-md rounded-full shadow-sm border border-gray-100 flex flex-col items-center gap-5"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {sections.map(section => (
          <div key={section.id} className="relative group">
            <button 
              className="w-6 h-6 flex items-center justify-center focus:outline-none"
              onClick={() => scrollToSection(section.id)}
              aria-label={`스크롤 ${section.label}로 이동`}
            >
              <motion.div
                className="w-[10px] h-[10px] rounded-full"
                style={{ 
                  backgroundColor: activeSection === section.id 
                    ? 'rgb(59, 130, 246)' 
                    : 'rgba(209, 213, 219, 0.8)' 
                }}
                animate={{ 
                  scale: activeSection === section.id ? 1.2 : 1,
                  backgroundColor: activeSection === section.id 
                    ? 'rgb(59, 130, 246)' 
                    : 'rgba(209, 213, 219, 0.8)'
                }}
                transition={{ 
                  duration: 0.3,
                  ease: [0.32, 0.72, 0, 1] 
                }}
                whileHover={{ 
                  scale: 1.4,
                  backgroundColor: activeSection === section.id 
                    ? 'rgb(59, 130, 246)' 
                    : 'rgba(156, 163, 175, 0.9)'
                }}
                whileTap={{ scale: 0.9 }}
              />
            </button>
            
            <motion.div 
              className="absolute right-8 top-0 opacity-0 group-hover:opacity-100 pointer-events-none"
              animate={{
                x: activeSection === section.id ? 0 : 5,
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="bg-white/90 backdrop-blur-sm shadow-sm border border-gray-100 px-2.5 py-1.5 rounded-md text-xs font-medium text-gray-800 whitespace-nowrap"
                initial={{ opacity: 0, scale: 0.8, x: 10 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                {section.label}
              </motion.div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default PageIndicator 