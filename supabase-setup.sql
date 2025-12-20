-- 크몽 첫번째 의뢰: 가맹거래사 랜딩페이지 문의 테이블
-- Create kmong_1_contact_submissions table
CREATE TABLE kmong_1_contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT,
  type TEXT NOT NULL CHECK (type IN ('full_form', 'quick_contact')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index for better performance
CREATE INDEX idx_kmong_1_contact_submissions_created_at ON kmong_1_contact_submissions(created_at DESC);
CREATE INDEX idx_kmong_1_contact_submissions_type ON kmong_1_contact_submissions(type);

-- Enable Row Level Security (RLS)
ALTER TABLE kmong_1_contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for form submissions)
CREATE POLICY "Allow anonymous inserts on kmong_1_contact_submissions" ON kmong_1_contact_submissions
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Create policy to allow reads for authenticated users only (for dashboard)
CREATE POLICY "Allow authenticated reads on kmong_1_contact_submissions" ON kmong_1_contact_submissions
FOR SELECT 
TO authenticated
USING (true);

-- 테이블에 설명 추가
COMMENT ON TABLE kmong_1_contact_submissions IS '크몽 첫번째 의뢰 - 가맹거래사 전문 컨설팅 랜딩페이지 문의 데이터';
COMMENT ON COLUMN kmong_1_contact_submissions.type IS 'full_form: 전체 문의 폼, quick_contact: 하단 고정바 간편 문의';