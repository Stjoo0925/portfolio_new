import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SoontaeJoo\'s Portfolio',
  description: '주순태의 개발자 포트폴리오 입니다',
  manifest: '/icons/site.webmanifest',
  icons: {
    icon: '/icons/favicon.ico',
    shortcut: '/icons/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'SoontaeJoo\'s Portfolio',
    description: '주순태의 개발자 포트폴리오 입니다',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: '포트폴리오 썸네일',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoontaeJoo\'s Portfolio',
    description: '주순태의 개발자 포트폴리오 입니다',
    images: ['/images/og-image.webp'],
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  )
} 