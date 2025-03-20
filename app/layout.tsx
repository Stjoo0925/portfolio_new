import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SoontaeJoo\'s Portfolio',
  description: '주순태의 개발자 포트폴리오 입니다',
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