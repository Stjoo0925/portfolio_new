'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType, EmblaCarouselType, EmblaPluginType } from 'embla-carousel'
import ScrollReveal from './animations/ScrollReveal'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: 'web' | 'mobile' | 'design'
  codeUrl?: string
  period: string
  teamSize: string
  role: string
  details: string
}

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout>()
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: 'trimSnaps',
    loop: true,
    skipSnaps: false,
    dragFree: false,
    startIndex: 0,
  })
  
  // 스크롤 관련 상태와 참조 추가
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  
  // 스크롤 위치 상태 추가
  const [scrollProgress, setScrollProgress] = useState(0)
  
  // 자동 스크롤을 위한 타이머 참조
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null)
  const [previousIndex, setPreviousIndex] = useState(0)
  
  // 슬라이드 방향 (왼쪽: -1, 오른쪽: 1)
  const [slideDirection, setSlideDirection] = useState<number>(-1)
  
  // 카드 너비 참조 (반응형 지원)
  const cardWidthRef = useRef(320); // 카드 기본 너비 + 간격
  
  // 한 번에 보여줄 프로젝트 수 = 1 (전체화면 캐러셀)
  const projectsPerView = 1;
  
  // 샘플 프로젝트 데이터
  const projects: Project[] = [
    {
      id: 1,
      title: "Narrativa",
      description: "생성형 AI를 활용한 인터랙티브 스토리텔링 게임 프로젝트",
      image: "/images/projects/narrativa_main.png",
      technologies: ["React", "TypeScript", "Spring", "MySQL", "Docker", "Firebase", "AWS EC2", "AWS S3"],
      category: "web",
      codeUrl: "https://github.com/AI-X-4-A1-FINAL",
      period: "2024.11.06 - 12.20 (6주)",
      teamSize: "6명 (FE 3인 / BE 3인 / LLM 공동개발)",
      role: "프로젝트 전반적인 기획 및 설계 참여, 개발 일정 관리 및 업무 배정",
      details: "/images/projects/narrativa_details.png"
    },
    {
      id: 2,
      title: "Leafresh",
      description: "SNS스타일 원예 커뮤니티 플랫폼",
      image: "/images/projects/leafresh_main.png",
      technologies: ["Vue", "Pinia", "Spring", "MySQL", "Docker", "Jenkins", "Vercel"],
      category: "web",
      codeUrl: "https://github.com/Leafresh-2024",
      period: "2024.08.23 - 10.02 (6주)",
      teamSize: "6명 (FE 3인 / BE 3인)",
      role: "프로젝트 기획 및 리드, Git Flow 기반 협업 체계 고도화",
      details: "/images/projects/leafresh_details.png"
    },
    {
      id: 3,
      title: "Afterburner",
      description: "국비지원 교육생을 위한 커리어 성장 플랫폼",
      image: "/images/projects/afterburner_main.png",
      technologies: ["React", "TailwindCSS", "Mail.js", "Supabase", "Netlify"],
      category: "web",
      codeUrl: "https://github.com/Afterburner2024",
      period: "2024.10 - 진행중",
      teamSize: "7명 (FE 2인 / BE 2인 / APP 3인)",
      role: "프로젝트 기획 및 리드, 서비스 기획부터 개발 진행까지 프로젝트 진행",
      details: "/images/projects/afterburner_details.png"
    }
  ];
  
  // 모든 프로젝트 표시 (카테고리 필터링 제거)
  const currentProjects = projects;
  
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // 자동 스크롤 설정
  useEffect(() => {
    if (!emblaApi || !isAutoPlaying) return

    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [emblaApi, isAutoPlaying])

  // 자동 재생 일시 중지 및 재시작 함수
  const pauseAndResumeAutoPlay = useCallback(() => {
    setIsAutoPlaying(false)
    
    // 이전 타이머가 있다면 제거
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current)
    }
    
    // 5초 후 자동 재생 재시작
    autoPlayTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true)
    }, 5000)
  }, [])

  // 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current)
      }
    }
  }, [])

  // 스크롤 이벤트 감지 함수 수정
  useEffect(() => {
    const updateScrollProgress = () => {
      if (currentProjects.length === 0) return;
      
      // 전체 프로젝트 중 현재 위치 비율로 계산
      const progress = currentIndex / (currentProjects.length - 1);
      setScrollProgress(isNaN(progress) ? 0 : progress);
    };
    
    // 초기 상태 설정
    updateScrollProgress();
    
    // currentIndex가 변경될 때마다 프로그레스 업데이트
    return () => {
      // cleanup
    };
  }, [currentIndex, currentProjects.length]);

  // 키보드 내비게이션 추가
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        scrollPrev();
      } else if (e.key === 'ArrowRight') {
        scrollNext();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // 자동 스크롤 기능 개선 - currentIndex나 currentProjects 변경 시 스크롤 위치 조정
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerWidth = container.clientWidth;
      const newScrollLeft = containerWidth * currentIndex;
      
      container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  }, [currentIndex, currentProjects]);

  // 프로젝트 슬라이더 높이 조정을 위한 ref
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const [sliderHeight, setSliderHeight] = useState<number>(600);

  // 슬라이더 높이 계산
  useEffect(() => {
    const updateSliderHeight = () => {
      if (sliderContainerRef.current) {
        // 모든 슬라이드의 높이를 확인하고 가장 큰 값으로 설정
        const slideElements = sliderContainerRef.current.querySelectorAll('.project-slide');
        let maxHeight = 600; // 기본 높이
        
        slideElements.forEach((el) => {
          const height = (el as HTMLElement).offsetHeight;
          if (height > maxHeight) {
            maxHeight = height;
          }
        });
        
        setSliderHeight(maxHeight);
      }
    };
    
    // 초기화 및 창 크기 변경 시 업데이트
    updateSliderHeight();
    window.addEventListener('resize', updateSliderHeight);
    
    return () => {
      window.removeEventListener('resize', updateSliderHeight);
    };
  }, [currentIndex]);

  // 랜덤 위치 상태들 추가
  const [starPositions, setStarPositions] = useState<Array<{top: string, left: string, opacity: number, animation: string}>>([]);
  const [brightStarPositions, setBrightStarPositions] = useState<Array<{top: string, left: string, opacity: number, boxShadow: string, animationDelay: string}>>([]);
  const [meteorPositions, setMeteorPositions] = useState<Array<{top: string, width: string}>>([]);
  const [dustPositions, setDustPositions] = useState<Array<{top: string, left: string}>>([]);

  // 클라이언트 사이드에서만 랜덤 위치 계산
  useEffect(() => {
    // 별 위치 생성
    const stars = Array(50).fill(null).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.5 + 0.3,
      animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite ${Math.random() * 5}s`
    }));
    setStarPositions(stars);

    // 빛나는 별 위치 생성
    const brightStars = Array(8).fill(null).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.4 + 0.4,
      boxShadow: '0 0 12px 2px rgba(255, 255, 255, 0.7)',
      animationDelay: `${Math.random() * 10}s`
    }));
    setBrightStarPositions(brightStars);

    // 유성 위치 생성
    const meteors = Array(5).fill(null).map(() => ({
      top: `${Math.random() * 80}%`,
      width: `${Math.random() * 100 + 50}px`,
    }));
    setMeteorPositions(meteors);

    // 우주 먼지 위치 생성
    const dust = Array(15).fill(null).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setDustPositions(dust);
  }, []);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setCurrentIndex(emblaApi.selectedScrollSnap())
      })
    }
  }, [emblaApi])

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0);

  // 모달이 열려있을 때 배경 스크롤 잠금
  useEffect(() => {
    if (selectedProject) {
      // 현재 스크롤 위치 저장
      setScrollPosition(window.scrollY);
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      // 저장된 스크롤 위치로 복원
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, scrollPosition);
    }

    // 컴포넌트가 언마운트될 때 스타일 초기화
    return () => {
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [selectedProject, scrollPosition]);

  return (
    <section id="projects" className="bg-[#070B14] relative overflow-hidden min-h-screen py-20 flex items-center justify-center">
      {/* 우주 배경 효과 */}
      <div className="absolute inset-0 bg-[#070B14] bg-opacity-90 -z-10"></div>
      
      {/* 별이 빛나는 배경 */}
      <div className="absolute inset-0 bg-[url('/stars.svg')] bg-repeat opacity-40 -z-5"></div>
      
      {/* 큰 행성 요소 - 더 투명하게 */}
      <div className="absolute -top-20 -right-20 w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#1E3B70]/20 via-[#0D2452]/10 to-transparent blur-xl animate-planet-rotate opacity-30 -z-5"></div>
      
      {/* 작은 행성 */}
      <div className="absolute bottom-20 left-20 w-[15vw] h-[15vw] rounded-full bg-gradient-to-tr from-[#FD5F07]/10 via-[#FD5F07]/5 to-transparent blur-md animate-float-slow opacity-30 -z-5"></div>
      
      {/* 성운/은하 효과 */}
      <div className="absolute top-1/3 left-0 w-full h-[30vh] bg-gradient-to-r from-[#3B1D70]/10 via-[#FD5F07]/10 to-[#1E3B70]/10 blur-2xl animate-nebula-glow opacity-30 -z-5"></div>
      
      {/* 별들 (고정된 작은 점들) - 클라이언트 사이드 렌더링 */}
      {starPositions.length > 0 && starPositions.map((star, i) => (
        <div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: star.top,
            left: star.left,
            opacity: star.opacity,
            animation: star.animation
          }}
        />
      ))}
      
      {/* 빛나는 별들 (큰 별) - 클라이언트 사이드 렌더링 */}
      {brightStarPositions.length > 0 && brightStarPositions.map((star, i) => (
        <div
          key={`bright-star-${i}`}
          className="absolute w-1.5 h-1.5 bg-white rounded-full animate-glow-star"
          style={{
            top: star.top,
            left: star.left,
            opacity: star.opacity,
            boxShadow: star.boxShadow,
            animationDelay: star.animationDelay
          }}
        />
      ))}
      
      {/* 유성 효과 - 클라이언트 사이드 렌더링 */}
      {meteorPositions.length > 0 && meteorPositions.map((meteor, i) => (
        <motion.div
          key={`meteor-${i}`}
          className="absolute h-0.5 bg-white rounded-full meteor"
          style={{
            top: meteor.top,
            left: '100%',
            width: meteor.width,
            opacity: 0,
            transform: 'rotate(-15deg)',
            boxShadow: '0 0 12px 2px rgba(255, 255, 255, 0.7)',
          }}
          animate={{
            x: [0, -2000],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            repeat: Infinity,
            repeatDelay: Math.random() * 15 + 10,
            ease: "easeOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {/* 우주 먼지 효과 - 클라이언트 사이드 렌더링 */}
      {dustPositions.length > 0 && dustPositions.map((dust, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            top: dust.top,
            left: dust.left,
          }}
          animate={{
            y: [0, Math.random() * 70 - 35],
            x: [0, Math.random() * 70 - 35],
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 25 + Math.random() * 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      {/* 타원형 궤도 효과 - 두 개로 향상 */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] border border-[#3B1D70]/20 rounded-full animate-orbit hidden md:block"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[45vw] h-[25vw] border border-[#FD5F07]/10 rounded-full animate-orbit-reverse hidden md:block" style={{ animationDuration: '120s' }}></div>

      <div className="section-container relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FD5F07] to-[#FFFFFF]">
              Projects
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-200 max-w-2xl mx-auto text-lg"
          >
            개인 및 팀 프로젝트들을 소개합니다. 다양한 기술 스택과 협업 경험을 통해 성장했습니다.
          </motion.p>
        </motion.div>
        
        {/* 프로젝트 캐러셀 컨테이너 */}
        <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center">
          {/* 좌측 스크롤 버튼 */}
          <button 
            onClick={() => {
              emblaApi?.scrollPrev()
              pauseAndResumeAutoPlay()
            }}
            className="absolute -left-5 md:-left-16 z-20 bg-[#21262D]/80 hover:bg-[#21262D] text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[#FD5F07]/20 hover:translate-x-[-5px]"
            aria-label="이전 프로젝트 보기"
          >
            <IoIosArrowBack size={24} />
          </button>
          
          {/* Embla Carousel */}
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex">
              {currentProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="flex-[0_0_100%] min-w-0 relative px-4"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="project-slide"
                  >
                    <div 
                      className={`flex flex-col md:flex-row gap-8 items-center bg-gradient-to-br from-[#21262D]/70 to-[#131820]/80 backdrop-blur-md rounded-xl overflow-hidden border transition-all duration-500 p-6 mx-auto shadow-xl
                        ${index === currentIndex ? 'border-[#FD5F07]/50 shadow-lg shadow-[#FD5F07]/15' : 'border-[#21262D]/40'}`}
                    >
                      <div 
                        className="w-full md:w-1/2 relative h-64 md:h-80 rounded-lg overflow-hidden group"
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          unoptimized
                          className="object-cover transition-transform duration-1500"
                          style={{
                            transform: hoveredProject === project.id ? 'scale(1.1)' : 'scale(1)'
                          }}
                        />
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                        
                        {/* 카테고리 라벨 개선 */}
                        <motion.div 
                          className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm transition-all duration-300 border
                            ${project.category === 'web' 
                              ? 'bg-blue-500/30 text-blue-100 border-blue-400/30' 
                              : project.category === 'mobile' 
                                ? 'bg-green-500/30 text-green-100 border-green-400/30' 
                                : 'bg-purple-500/30 text-purple-100 border-purple-400/30'
                            }`}
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                        </motion.div>
                        
                        {/* 이미지 오버레이 효과 */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      <div className="w-full md:w-1/2 p-4">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm text-[#FD5F07] font-medium">{project.period}</span>
                            <span className="text-sm text-gray-400">|</span>
                            <span className="text-sm text-gray-400">{project.teamSize}</span>
                          </div>
                          
                          <motion.h3 
                            className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FD5F07] to-[#FF9D6C] mb-4"
                          >
                            {project.title}
                          </motion.h3>
                          
                          <motion.p 
                            className="text-gray-300 mb-6 text-lg"
                          >
                            {project.description}
                          </motion.p>
                          
                          <motion.div 
                            className="flex flex-wrap gap-2 mb-6"
                          >
                            {project.technologies.map((tech, techIndex) => (
                              <motion.span 
                                key={tech}
                                className="px-3 py-1 bg-gradient-to-r from-[#FD5F07]/20 to-[#FD5F07]/10 text-[#FD5F07] rounded-full text-sm border border-[#FD5F07]/20"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.3 + (techIndex * 0.05) }}
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(253, 95, 7, 0.3)' }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </motion.div>
                          
                          <motion.div 
                            className="bg-[#21262D]/50 p-4 rounded-lg mb-6"
                          >
                            <h4 className="text-[#FD5F07] font-medium mb-2">주요 역할</h4>
                            <p className="text-gray-300 text-sm">{project.role}</p>
                          </motion.div>
                          
                          <motion.div 
                            className="flex gap-6"
                          >
                            {project.codeUrl && (
                              <motion.a
                                href={project.codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-300 hover:text-white transition-all bg-[#21262D]/80 hover:bg-[#21262D] py-2 px-5 rounded-full border border-[#21262D]/80 hover:border-gray-600"
                                whileHover={{ scale: 1.05, x: -3 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <FaGithub className="text-lg" />
                                <span>Github Repository</span>
                              </motion.a>
                            )}
                            <motion.button
                              onClick={() => setSelectedProject(project)}
                              className="flex items-center gap-2 text-gray-300 hover:text-white transition-all bg-[#21262D]/80 hover:bg-[#21262D] py-2 px-5 rounded-full border border-[#21262D]/80 hover:border-gray-600"
                              whileHover={{ scale: 1.05, x: -3 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <FaInfoCircle className="text-lg" />
                              <span>상세 보기</span>
                            </motion.button>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 우측 스크롤 버튼 */}
          <button 
            onClick={() => {
              emblaApi?.scrollNext()
              pauseAndResumeAutoPlay()
            }}
            className="absolute -right-5 md:-right-16 z-20 bg-[#21262D]/80 hover:bg-[#21262D] text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[#FD5F07]/20 hover:translate-x-[5px]"
            aria-label="다음 프로젝트 보기"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>
        
        {/* 인디케이터 점들 */}
        <div className="flex justify-center mt-10 items-center gap-3">
          {currentProjects.map((_, index) => (
            <motion.button 
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.2 }}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-[#FD5F07] to-[#FD7E07] w-8 h-2 shadow-md shadow-[#FD5F07]/30' 
                  : 'bg-[#21262D] w-2 h-2 hover:bg-[#FD5F07]/50'
              }`}
              onClick={() => {
                if (emblaApi) {
                  emblaApi.scrollTo(index)
                }
              }}
              aria-label={`프로젝트 ${index + 1}번으로 이동`}
            />
          ))}
        </div>
      </div>

      {/* 프로젝트 상세 모달 */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-[210mm] h-[297mm] bg-white rounded-lg shadow-2xl overflow-hidden"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedProject.details}
              alt={`${selectedProject.title} 상세 이미지`}
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default Projects 