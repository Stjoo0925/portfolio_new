'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface HeaderProps {
  activeSection: string
  setActiveSection?: (section: string) => void
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navItems = [
    { id: 'main', label: 'Main' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
      if (setActiveSection) {
        setActiveSection(sectionId)
      }
    }
  }
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0D1117]/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FD5F07] to-[#ffffff]">
              SoonTae Joo
            </span>
          </motion.div>
          
          {/* 데스크톱 메뉴 */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors relative ${
                  activeSection === item.id 
                    ? 'text-[#FD5F07] font-medium' 
                    : 'text-gray-300 hover:text-[#FD5F07]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FD5F07] rounded-full"
                    layoutId="activeIndicator"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>
          
          {/* 모바일 메뉴 버튼 */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
        
        {/* 모바일 메뉴 */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map(item => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left transition-colors ${
                  activeSection === item.id 
                    ? 'text-[#F78166] font-medium' 
                    : 'text-gray-300 hover:text-[#F78166]'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  )
}

export default Header 