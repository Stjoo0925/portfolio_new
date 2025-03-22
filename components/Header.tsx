'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface HeaderProps {
  activeSection: string
  setActiveSection?: (section: string) => void
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navItems = [
    { id: 'main', label: 'Main' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      })
      if (setActiveSection) {
        setActiveSection(id)
      }
      setMobileMenuOpen(false)
    }
  }
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex justify-between items-center h-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-apple-dark"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-apple-blue to-apple-blue-dark">
            Soontae Joo
          </span>
        </motion.div>
        
        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:block">
          <motion.ul 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="flex space-x-8"
          >
            {navItems.map((item, index) => (
              <motion.li 
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium py-2 px-1 relative transition-colors duration-300 ${
                    activeSection === item.id 
                      ? 'text-apple-blue' 
                      : 'text-apple-dark hover:text-apple-blue'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-apple-blue rounded-full"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
        
        {/* 모바일 메뉴 토글 버튼 */}
        <button 
          className="block md:hidden p-2 rounded-full hover:bg-gray-200/80 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg 
            className="w-6 h-6 text-apple-dark" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      
      {/* 모바일 메뉴 */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`overflow-hidden md:hidden bg-white/95 backdrop-blur-sm shadow-sm`}
      >
        <nav className="container px-4 py-4">
          <ul className="flex flex-col space-y-3">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left font-medium py-2 px-3 rounded-lg transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'bg-apple-blue/10 text-apple-blue' 
                      : 'text-apple-dark hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full py-2.5 mt-2 btn flex items-center justify-center"
              >
                <span>연락하기</span>
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </motion.div>
    </header>
  )
}

export default Header 