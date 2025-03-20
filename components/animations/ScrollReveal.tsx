'use client'

import { ReactNode, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  className?: string
}

export const ScrollReveal = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.5,
  className = '',
}: ScrollRevealProps) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  const getDirectionValues = () => {
    switch (direction) {
      case 'up':
        return { y: 40 }
      case 'down':
        return { y: -40 }
      case 'left':
        return { x: 40 }
      case 'right':
        return { x: -40 }
      case 'none':
        return {}
      default:
        return { y: 40 }
    }
  }
  
  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        },
      })
    }
  }, [controls, isInView, delay, duration])
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getDirectionValues() }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal 