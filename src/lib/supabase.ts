import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 크몽 첫번째 의뢰 - 가맹거래사 랜딩페이지
export const KMONG_1_TABLE_NAME = 'kmong_1_contact_submissions'

export type ContactSubmission = {
  id?: number
  name: string
  phone: string
  message?: string
  type: 'full_form' | 'quick_contact'
  created_at?: string
}