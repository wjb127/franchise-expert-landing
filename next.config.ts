import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Vercel 배포 최적화 설정
  output: 'standalone',
  
  // Turbopack 설정 (안정화됨)
  turbopack: {},
  
  // 실험적 기능 설정
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },

  // 이미지 최적화
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // 압축 설정
  compress: true,

  // 정적 파일 최적화
  trailingSlash: false,
  
  // 환경 변수 설정
  env: {
    CUSTOM_KEY: 'my-value',
  },

  // 헤더 설정
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

export default nextConfig