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
  const [activeSection, setActiveSection] = useState('section-0')
  const [isScrolling, setIsScrolling] = useState(false)
  
  // 스크롤 위치에 따라 활성 섹션을 결정하는 함수
  const determineActiveSection = () => {
    const sections = document.querySelectorAll('section[id]')
    const scrollPosition = window.scrollY + window.innerHeight / 2
    
    let currentSection = 'section-0'
    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop
      const sectionHeight = section.clientHeight
      const sectionId = section.getAttribute('id') || ''
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = sectionId
      }
    })
    
    return currentSection
  }
  
  // 섹션으로 스크롤하는 함수
  const scrollToSection = (sectionId: string) => {
    if (isScrolling) return
    
    setIsScrolling(true)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
    
    // 스크롤 애니메이션이 끝난 후 상태 초기화
    setTimeout(() => {
      setIsScrolling(false)
    }, 1000)
  }
  
  useEffect(() => {
    // 초기 로딩 시 한 번 실행
    const initialActiveSection = determineActiveSection()
    setActiveSection(initialActiveSection)
    
    const handleScroll = () => {
      if (isScrolling) return
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
  }, [isScrolling])
  
  return (
    <main className="min-h-screen">
      <Header activeSection={activeSection} setActiveSection={scrollToSection} />
      <PageIndicator activeSection={activeSection} setActiveSection={scrollToSection} />
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <Footer />
    </main>
  )
} 