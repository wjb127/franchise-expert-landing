# 🏢 가맹거래사 전문 컨설팅 랜딩페이지

> **크몽 첫번째 의뢰** - 가맹거래사 심상민님의 전문 컨설팅 서비스 랜딩페이지

## 📋 프로젝트 개요

가맹사업 전문가인 심상민 가맹거래사의 컨설팅 서비스를 홍보하는 현대적인 다크/네온 테마의 랜딩페이지입니다.

### 🎯 타겟 고객
- 창업 전 가맹계약이 걱정되는 예비 창업자
- 본사의 갑질이 의심되는 기존 점주
- 가맹사업을 준비 중인 예비 본부

## 🛠 기술 스택

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: TailwindCSS (다크/네온 테마)
- **Database**: Supabase
- **Deployment**: Vercel

## 🎨 디자인 특징

### 다크/네온 테마
- **배경**: 진한 네이비/다크 색상 (`dark-950`, `dark-900`)
- **네온 컬러**: 
  - 코랄/오렌지 (`#ff6b4a`) - 메인 CTA
  - 네온 시안 (`#22d3ee`) - 하이라이트
  - 에메랄드/민트 (`#4ade80`) - 서브 액센트

### 애니메이션 효과
- `animate-float`: 배경 요소 부유 효과
- `animate-glow`: 네온 글로우 효과
- `animate-pulse`: 미묘한 펄스 효과
- 호버 시 확대/축소 및 그림자 효과

## 🗄 데이터베이스 구조

### 테이블명: `kmong_1_contact_submissions`

```sql
CREATE TABLE kmong_1_contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT,
  type TEXT NOT NULL CHECK (type IN ('full_form', 'quick_contact')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);
```

### 문의 유형
- `full_form`: 전체 폼 문의 (이름, 연락처, 상세 문의 내용)
- `quick_contact`: 간편 문의 (하단 고정바 - 이름, 연락처만)

## 🚀 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 환경변수 설정
`.env.local` 파일 생성:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Supabase 테이블 생성
`supabase-setup.sql` 파일의 내용을 Supabase SQL Editor에서 실행

### 4. 개발 서버 실행
```bash
npm run dev
```

## 📊 관리자 대시보드

### 접속 방법
- URL: `http://localhost:3000/dashboard`
- 비밀번호: `kmong2024!`

### 기능
- 문의 데이터 실시간 조회
- 문의 유형별 필터링
- 접수 시간 순 정렬
- 다크 테마 인터페이스

## 🔧 주요 기능

### 1. 반응형 랜딩페이지
- 히어로 섹션 (서비스 소개)
- 서비스 대상 섹션 (3개 카테고리)
- 전문가 프로필 섹션
- CTA 섹션
- 문의 폼 섹션

### 2. 문의 수집 시스템
- **전체 폼**: 이름, 연락처, 상세 문의 내용
- **하단 고정바**: 간편 문의 (이름, 연락처만)
- 실시간 Supabase 연동
- 로딩 상태 및 에러 처리

### 3. 시각적 효과
- 글래스모피즘 효과
- 네온 테두리와 그림자
- 부드러운 전환 애니메이션
- 호버 인터랙션

## 📁 파일 구조

```
src/
├── app/
│   ├── dashboard/
│   │   └── page.tsx          # 관리자 대시보드
│   ├── globals.css           # 글로벌 스타일
│   ├── layout.tsx            # 루트 레이아웃
│   └── page.tsx              # 메인 랜딩페이지
├── lib/
│   └── supabase.ts           # Supabase 설정
└── ...
```

## 🔑 환경변수

| 변수명 | 설명 | 예시 |
|--------|------|------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase 프로젝트 URL | `https://xyz.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase 익명 키 | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |

## 🚀 배포

### Vercel 배포
```bash
npm run build
npm start
```

환경변수를 Vercel 대시보드에서 설정해야 합니다.

## 📞 문의 및 지원

**크몽 첫번째 의뢰 완료**
- 랜딩페이지: 다크/네온 테마 적용
- 데이터베이스: `kmong_1_contact_submissions` 테이블
- 대시보드: `/dashboard` (비밀번호: `kmong2024!`)

---

© 2024 가맹거래 전문 컨설팅. All rights reserved.
