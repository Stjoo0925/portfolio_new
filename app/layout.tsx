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