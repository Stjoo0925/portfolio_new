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
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = 5
  const sections = ['main', 'about', 'skills', 'projects', 'contact']
  
  // 스크롤 위치에 따라 현재 페이지를 결정하는 함수
  const determineCurrentPage = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2
    
    let current = 0
    sections.forEach((section, index) => {
      const element = document.getElementById(section)
      if (element) {
        const sectionTop = element.offsetTop
        const sectionHeight = element.clientHeight
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = index
        }
      }
    })
    
    return current
  }
  
  useEffect(() => {
    // 페이지 로드 시 맨 위로 스크롤
    window.scrollTo(0, 0)
    
    // 약간의 지연 후 스크롤 이벤트 리스너 추가
    const timer = setTimeout(() => {
      const handleScroll = () => {
        const current = determineCurrentPage()
        setCurrentPage(current)
      }
      
      window.addEventListener('scroll', handleScroll)
      // 창 크기 변경 시에도 다시 계산
      window.addEventListener('resize', handleScroll)
      
      // 초기값 설정
      handleScroll()
      
      return () => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleScroll)
      }
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <main className="min-h-screen">
      <Header activeSection={sections[currentPage]} setActiveSection={(sectionId) => {
        const index = sections.indexOf(sectionId)
        if (index !== -1) {
          setCurrentPage(index)
        }
      }} />
      <PageIndicator currentPage={currentPage} totalPages={totalPages} />
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <Footer />
    </main>
  )
} 