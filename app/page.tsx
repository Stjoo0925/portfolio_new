'use client'

import React, { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageIndicator from '@/components/PageIndicator'

export default function Home() {
  const [activeSection, setActiveSection] = useState('main')
  
  // 스크롤 위치에 따라 활성 섹션을 결정하는 함수
  const determineActiveSection = () => {
    const sections = document.querySelectorAll('section[id]')
    const scrollPosition = window.scrollY + 100
    
    let currentSection = 'main'
    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop
      const sectionHeight = section.clientHeight
      const sectionId = section.getAttribute('id') || ''
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = sectionId
      }
    })
    
    // 페이지 맨 아래에 도달했을 때 마지막 섹션(contact) 활성화
    const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200
    if (isAtBottom) {
      return 'contact'
    }
    
    return currentSection
  }
  
  useEffect(() => {
    // 초기 로딩 시 한 번 실행
    const initialActiveSection = determineActiveSection()
    setActiveSection(initialActiveSection)
    
    const handleScroll = () => {
      const currentSection = determineActiveSection()
      setActiveSection(currentSection)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    // 창 크기 변경 시에도 다시 계산
    window.addEventListener('resize', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])
  
  return (
    <main className="min-h-screen">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <PageIndicator activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <Footer />
    </main>
  )
} 