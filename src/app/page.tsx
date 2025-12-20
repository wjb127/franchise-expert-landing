'use client'

import { useState } from 'react'
import { supabase, type ContactSubmission, KMONG_1_TABLE_NAME } from '@/lib/supabase'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const [fixedBarData, setFixedBarData] = useState({
    name: '',
    phone: ''
  })

  const [showFixedBar, setShowFixedBar] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFixedBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFixedBarData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return
    
    setIsSubmitting(true)
    
    try {
      const submission: Omit<ContactSubmission, 'id' | 'created_at'> = {
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
        type: 'full_form'
      }
      
      const { error } = await supabase
        .from(KMONG_1_TABLE_NAME)
        .insert([submission])
      
      if (error) {
        console.error('Supabase error:', error)
        alert('문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.')
        return
      }
      
      console.log('크몽 1차 의뢰 - 전체 폼 문의 데이터:', formData)
      alert('문의가 접수되었습니다. 빠른 시간 내에 연락드리겠습니다.')
      setFormData({ name: '', phone: '', message: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFixedBarSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!fixedBarData.name || !fixedBarData.phone) {
      alert('이름과 연락처를 모두 입력해주세요.')
      return
    }
    if (isSubmitting) return
    
    setIsSubmitting(true)
    
    try {
      const submission: Omit<ContactSubmission, 'id' | 'created_at'> = {
        name: fixedBarData.name,
        phone: fixedBarData.phone,
        message: '',
        type: 'quick_contact'
      }
      
      const { error } = await supabase
        .from(KMONG_1_TABLE_NAME)
        .insert([submission])
      
      if (error) {
        console.error('Supabase error:', error)
        alert('문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.')
        return
      }
      
      console.log('크몽 1차 의뢰 - 간편 문의 데이터:', fixedBarData)
      alert('문의가 접수되었습니다. 빠른 시간 내에 연락드리겠습니다.')
      setFixedBarData({ name: '', phone: '' })
      setShowFixedBar(false)
    } catch (error) {
      console.error('Error submitting quick contact:', error)
      alert('문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Hero Section */}
      <section className="relative bg-dark-gradient text-white py-24 lg:py-40 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-40 h-40 bg-neon-cyan rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-60 right-20 w-32 h-32 bg-neon-emerald rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-neon-orange rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-36 h-36 bg-accent-400 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 211, 238, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-8">
                <span className="inline-block bg-coral-500/20 text-coral-400 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-coral-500/30 animate-glow">
                  신규 가맹본사 · 프랜차이즈 본사 설립 · 가맹점주 상담대행
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight">
                <span className="text-coral-400">저희가 도와</span><br />
                <span className="text-white">드리겠습니다.</span><br />
                <span className="text-transparent bg-neon-gradient bg-clip-text animate-pulse-slow">
                  정보공개서 /
                </span><br />
                <span className="text-transparent bg-gradient-to-r from-neon-cyan via-accent-400 to-neon-emerald bg-clip-text">
                  가맹계약서
                </span><br />
                <span className="text-white">
                  제작, 등록
                </span>
              </h1>
              
              <p className="text-lg text-gray-300 mb-8 max-w-md">
                공정거래위원회 등록 제 657호 가맹거래사 심상민
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact-form')}
                  className="bg-coral-gradient hover:shadow-2xl hover:shadow-coral-500/50 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 border border-coral-500/30"
                >
                  무료 상담 신청
                </button>
                <button 
                  className="border-2 border-neon-cyan/50 hover:border-neon-cyan text-neon-cyan px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-neon-cyan/10 hover:shadow-lg hover:shadow-neon-cyan/30"
                >
                  서비스 자세히 보기
                </button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="flex-1 max-w-lg lg:max-w-xl">
              <div className="relative">
                <div className="bg-gradient-to-br from-dark-800/50 to-dark-700/30 p-8 rounded-3xl backdrop-blur-sm border border-neon-cyan/20 shadow-2xl hover:shadow-neon-cyan/30 transition-all duration-500">
                  <div className="bg-dark-950 rounded-2xl p-8 shadow-2xl border border-dark-700/50">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-coral-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-glow">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">전문 컨설팅 서비스</h3>
                      <p className="text-gray-400 text-sm">가맹사업 전반에 대한 종합적인 지원</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center p-3 bg-dark-800/50 rounded-lg border border-neon-cyan/20 hover:border-neon-cyan/50 transition-colors">
                        <div className="w-3 h-3 bg-neon-cyan rounded-full mr-3 animate-pulse"></div>
                        <span className="text-white text-sm font-medium">정보공개서 작성 및 검토</span>
                      </div>
                      <div className="flex items-center p-3 bg-dark-800/50 rounded-lg border border-accent-400/20 hover:border-accent-400/50 transition-colors">
                        <div className="w-3 h-3 bg-accent-400 rounded-full mr-3 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <span className="text-white text-sm font-medium">가맹계약서 제작 및 분석</span>
                      </div>
                      <div className="flex items-center p-3 bg-dark-800/50 rounded-lg border border-coral-400/20 hover:border-coral-400/50 transition-colors">
                        <div className="w-3 h-3 bg-coral-400 rounded-full mr-3 animate-pulse" style={{animationDelay: '1s'}}></div>
                        <span className="text-white text-sm font-medium">가맹사업 등록 및 신고</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-neon-cyan/20 to-accent-400/20 rounded-lg border border-neon-cyan/30">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-neon-cyan mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-neon-cyan font-bold text-sm">공정거래위원회 인증 전문가</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-dark-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-coral-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-neon-emerald rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-neon-cyan/20 text-neon-cyan px-4 py-2 rounded-full text-sm font-medium mb-6 border border-neon-cyan/30">
              전문 컨설팅 서비스
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              이런 분께 <span className="text-transparent bg-coral-gradient bg-clip-text">추천</span>합니다
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              가맹사업의 모든 단계에서 전문적인 도움이 필요하신 분들을 위한 맞춤 서비스
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-dark-800/50 to-dark-700/30 p-8 rounded-2xl border border-neon-cyan/20 hover:border-neon-cyan/50 hover:shadow-2xl hover:shadow-neon-cyan/20 transition-all duration-500 group hover:-translate-y-2">
              <div className="relative mb-8">
                <div className="w-full h-40 bg-neon-gradient rounded-xl overflow-hidden relative shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                  <div className="w-full h-full flex items-center justify-center relative z-10">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 border border-white/30">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-white font-bold text-lg">창업 준비</div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center leading-tight">
                창업 전에 가맹계약이<br/>걱정되시는 분
              </h3>
              <p className="text-gray-400 text-center leading-relaxed">
                가맹계약서 검토부터 조건 협상까지, 창업 전 꼼꼼한 준비로 성공적인 시작을 도와드립니다.
              </p>
            </div>

            <div className="bg-gradient-to-br from-dark-800/50 to-dark-700/30 p-8 rounded-2xl border border-coral-400/20 hover:border-coral-400/50 hover:shadow-2xl hover:shadow-coral-400/20 transition-all duration-500 group hover:-translate-y-2">
              <div className="relative mb-8">
                <div className="w-full h-40 bg-coral-gradient rounded-xl overflow-hidden relative shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                  <div className="w-full h-full flex items-center justify-center relative z-10">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 border border-white/30">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.866-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      <div className="text-white font-bold text-lg">분쟁 해결</div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center leading-tight">
                본사의 갑질이<br/>의심되는 점주님
              </h3>
              <p className="text-gray-400 text-center leading-relaxed">
                불공정한 대우나 계약 위반 사항에 대한 법적 대응과 협상을 전문적으로 지원해드립니다.
              </p>
            </div>

            <div className="bg-gradient-to-br from-dark-800/50 to-dark-700/30 p-8 rounded-2xl border border-accent-400/20 hover:border-accent-400/50 hover:shadow-2xl hover:shadow-accent-400/20 transition-all duration-500 group hover:-translate-y-2">
              <div className="relative mb-8">
                <div className="w-full h-40 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl overflow-hidden relative shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                  <div className="w-full h-full flex items-center justify-center relative z-10">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 border border-white/30">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="text-white font-bold text-lg">본부 설립</div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center leading-tight">
                가맹사업을 준비 중인<br/>예비 본부
              </h3>
              <p className="text-gray-400 text-center leading-relaxed">
                가맹사업 등록부터 계약서 작성, 운영 시스템 구축까지 체계적인 본부 설립을 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Profile Section */}
      <section className="py-24 bg-dark-gradient text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-neon-cyan rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-coral-500 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-coral-500/20 text-coral-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-coral-500/30">
              전문가 소개
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              가맹거래사 <span className="text-transparent bg-neon-gradient bg-clip-text">소개</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              풍부한 실무 경험과 전문 지식으로 고객의 성공을 함께 만들어갑니다
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-dark-800/50 to-dark-700/30 p-8 lg:p-12 rounded-3xl border border-neon-cyan/20 backdrop-blur-sm shadow-2xl hover:shadow-neon-cyan/20 transition-all duration-500">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Professional Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-64 h-64 bg-coral-gradient rounded-full overflow-hidden shadow-2xl border-4 border-neon-cyan/30 animate-glow">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center text-white">
                        <svg className="w-24 h-24 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        <div className="font-black text-xl">심상민</div>
                        <div className="text-sm font-bold opacity-80">가맹거래사</div>
                      </div>
                    </div>
                  </div>
                  {/* Credential Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-neon-cyan text-dark-950 p-3 rounded-full shadow-2xl border-2 border-white/30 animate-pulse">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-6">
                    심상민 <span className="text-transparent bg-coral-gradient bg-clip-text">가맹거래사</span>
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center justify-center lg:justify-start p-3 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20">
                      <div className="w-12 h-12 bg-neon-cyan/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <span className="text-white font-medium">가맹거래사 자격증 보유</span>
                    </div>
                    
                    <div className="flex items-center justify-center lg:justify-start p-3 rounded-lg bg-accent-400/10 border border-accent-400/20">
                      <div className="w-12 h-12 bg-accent-400/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-white font-medium">가맹사업 컨설팅 15년 경력</span>
                    </div>
                    
                    <div className="flex items-center justify-center lg:justify-start p-3 rounded-lg bg-coral-500/10 border border-coral-500/20">
                      <div className="w-12 h-12 bg-coral-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-coral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <span className="text-white font-medium">1,200건+ 상담 및 분쟁해결 실적</span>
                    </div>
                    
                    <div className="flex items-center justify-center lg:justify-start p-3 rounded-lg bg-primary-400/10 border border-primary-400/20">
                      <div className="w-12 h-12 bg-primary-400/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <span className="text-white font-medium">공정거래위원회 등록 전문가</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-neon-cyan/20 to-coral-500/20 p-6 rounded-xl border border-neon-cyan/30 backdrop-blur-sm">
                    <p className="text-gray-200 leading-relaxed text-lg italic">
                      "가맹사업의 성공은 올바른 계약과 투명한 관계에서 시작됩니다. 
                      저의 경험과 전문성으로 고객님의 소중한 사업을 지켜드리겠습니다."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-800 to-dark-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-neon-emerald rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-coral-500 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            가맹 전문 자문, 지금 바로 시작하세요
          </h2>
          <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            더 늦기 전에 전문가의 도움을 받으세요. 작은 투자로 큰 손실을 예방할 수 있습니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-lg border border-neon-cyan/20 hover:border-neon-cyan/50 transition-colors">
              <div className="flex items-center text-lg">
                <div className="w-12 h-12 bg-neon-cyan/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-neon-cyan">전화 상담: 010-1234-5678</span>
              </div>
            </div>
            
            <span className="text-gray-400">또는</span>
            
            <button 
              onClick={() => scrollToSection('contact-form')}
              className="bg-coral-gradient hover:shadow-2xl hover:shadow-coral-500/50 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 border border-coral-500/30"
            >
              온라인 문의하기
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              상담 문의
            </h2>
            <p className="text-lg text-gray-400">
              궁금한 점이나 상담이 필요하시면 언제든 연락해주세요
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-dark-800/50 to-dark-700/30 p-8 lg:p-12 rounded-2xl border border-neon-cyan/20 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    성함 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan outline-none transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="성함을 입력해주세요"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan outline-none transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="연락 가능한 번호를 입력해주세요"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  문의 내용 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan outline-none transition-all duration-300 resize-none text-white placeholder-gray-400"
                  placeholder="상담받고 싶은 내용을 자세히 적어주세요&#10;(예: 가맹계약 검토, 분쟁 상담, 가맹사업 등록 등)"
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-coral-gradient hover:shadow-2xl hover:shadow-coral-500/50 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none text-white px-12 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-coral-500/30"
                >
                  {isSubmitting ? '접수 중...' : '문의 접수하기'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-900 text-white py-12 border-t border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-neon-gradient bg-clip-text">가맹거래 전문 컨설팅</h3>
            <p className="text-gray-400 mb-6">
              신뢰할 수 있는 가맹사업 파트너
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-500">
              <span>© 2024 가맹거래 전문 컨설팅. All rights reserved.</span>
              <span className="hidden sm:inline text-gray-600">|</span>
              <span>가맹거래사 등록번호: 2024-001234</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed Bottom Contact Bar */}
      {showFixedBar && (
        <div className="fixed bottom-0 left-0 right-0 bg-dark-900/95 backdrop-blur-lg border-t border-neon-cyan/30 shadow-2xl z-50 transform transition-transform duration-300">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-coral-gradient rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">무료 상담 신청</p>
                  <p className="text-gray-400 text-xs">전문가가 빠르게 연락드립니다</p>
                </div>
              </div>

              <form onSubmit={handleFixedBarSubmit} className="flex items-center space-x-2 flex-1 max-w-md ml-4">
                <input
                  type="text"
                  name="name"
                  value={fixedBarData.name}
                  onChange={handleFixedBarChange}
                  placeholder="이름"
                  className="flex-1 px-3 py-2 bg-dark-800/50 border border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan outline-none text-white placeholder-gray-500"
                />
                <input
                  type="tel"
                  name="phone"
                  value={fixedBarData.phone}
                  onChange={handleFixedBarChange}
                  placeholder="연락처"
                  className="flex-1 px-3 py-2 bg-dark-800/50 border border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan outline-none text-white placeholder-gray-500"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-coral-gradient hover:shadow-lg hover:shadow-coral-500/50 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 whitespace-nowrap border border-coral-500/30"
                >
                  {isSubmitting ? '접수 중...' : '신청하기'}
                </button>
              </form>

              <button
                onClick={() => setShowFixedBar(false)}
                className="ml-4 p-2 text-gray-500 hover:text-gray-300 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Padding for Fixed Bar */}
      {showFixedBar && <div className="h-20"></div>}
    </div>
  )
}
