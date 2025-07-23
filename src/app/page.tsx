'use client'

import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('문의 데이터:', formData)
    alert('문의가 접수되었습니다. 빠른 시간 내에 연락드리겠습니다.')
    setFormData({ name: '', phone: '', message: '' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-primary-800 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            가맹거래의 모든 것,<br />
            <span className="text-primary-300">전문가에게 맡기세요</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            가맹계약부터 분쟁대응까지,<br />
            실무 경험 풍부한 가맹거래사가 함께합니다
          </p>
          <button 
            onClick={() => scrollToSection('contact-form')}
            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            상담 신청하기
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              이런 분께 추천합니다
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              가맹사업의 모든 단계에서 전문적인 도움이 필요하신 분들을 위한 맞춤 서비스
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4 text-center">
                창업 전에 가맹계약이 걱정되시는 분
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                가맹계약서 검토부터 조건 협상까지, 창업 전 꼼꼼한 준비로 성공적인 시작을 도와드립니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.866-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4 text-center">
                본사의 갑질이 의심되는 점주님
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                불공정한 대우나 계약 위반 사항에 대한 법적 대응과 협상을 전문적으로 지원해드립니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4 text-center">
                가맹사업을 준비 중인 예비 본부
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                가맹사업 등록부터 계약서 작성, 운영 시스템 구축까지 체계적인 본부 설립을 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Profile Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              가맹거래사 소개
            </h2>
            <p className="text-lg text-gray-600">
              풍부한 실무 경험과 전문 지식으로 고객의 성공을 함께 만들어갑니다
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-navy-50 to-primary-50 p-8 lg:p-12 rounded-2xl shadow-lg">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-48 h-48 bg-gradient-to-br from-navy-200 to-primary-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-24 h-24 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
                    김전문 가맹거래사
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-center lg:justify-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="text-gray-700">가맹거래사 자격증 보유</span>
                    </div>
                    
                    <div className="flex items-center justify-center lg:justify-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">가맹사업 컨설팅 15년 경력</span>
                    </div>
                    
                    <div className="flex items-center justify-center lg:justify-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="text-gray-700">1,200건+ 상담 및 분쟁해결 실적</span>
                    </div>
                    
                    <div className="flex items-center justify-center lg:justify-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="text-gray-700">공정거래위원회 등록 전문가</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    &ldquo;가맹사업의 성공은 올바른 계약과 투명한 관계에서 시작됩니다. 
                    저의 경험과 전문성으로 고객님의 소중한 사업을 지켜드리겠습니다.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-800 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            가맹 전문 자문, 지금 바로 시작하세요
          </h2>
          <p className="text-xl mb-10 text-gray-200 max-w-2xl mx-auto">
            더 늦기 전에 전문가의 도움을 받으세요. 작은 투자로 큰 손실을 예방할 수 있습니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center text-lg">
                <svg className="w-6 h-6 mr-3 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>전화 상담: 010-1234-5678</span>
              </div>
            </div>
            
            <span className="text-gray-300">또는</span>
            
            <button 
              onClick={() => scrollToSection('contact-form')}
              className="bg-white text-navy-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              온라인 문의하기
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              상담 문의
            </h2>
            <p className="text-lg text-gray-600">
              궁금한 점이나 상담이 필요하시면 언제든 연락해주세요
            </p>
          </div>
          
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    성함 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="성함을 입력해주세요"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="연락 가능한 번호를 입력해주세요"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  문의 내용 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                  placeholder="상담받고 싶은 내용을 자세히 적어주세요&#10;(예: 가맹계약 검토, 분쟁 상담, 가맹사업 등록 등)"
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-12 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  문의 접수하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">가맹거래 전문 컨설팅</h3>
            <p className="text-gray-400 mb-6">
              신뢰할 수 있는 가맹사업 파트너
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-400">
              <span>© 2024 가맹거래 전문 컨설팅. All rights reserved.</span>
              <span className="hidden sm:inline">|</span>
              <span>가맹거래사 등록번호: 2024-001234</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
