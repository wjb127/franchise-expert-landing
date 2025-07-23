import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '가맹거래 전문 컨설팅 | 가맹계약부터 분쟁대응까지',
  description: '가맹계약부터 분쟁대응까지, 실무 경험 풍부한 가맹거래사가 함께합니다. 창업 전 가맹계약 검토, 본사 갑질 대응, 가맹사업 준비를 전문적으로 도와드립니다.',
  keywords: '가맹거래사, 가맹계약, 가맹분쟁, 창업컨설팅, 프랜차이즈',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: '가맹거래 전문 컨설팅',
    description: '가맹계약부터 분쟁대응까지, 실무 경험 풍부한 가맹거래사가 함께합니다.',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
