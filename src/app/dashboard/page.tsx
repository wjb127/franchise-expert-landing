'use client'

import { useState, useEffect } from 'react'
import { supabase, type ContactSubmission, KMONG_1_TABLE_NAME } from '@/lib/supabase'

export default function Dashboard() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // 간단한 비밀번호 인증 (실제 프로덕션에서는 더 안전한 방법 사용)
  const DASHBOARD_PASSWORD = 'kmong2024!'

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === DASHBOARD_PASSWORD) {
      setIsAuthenticated(true)
      fetchContacts()
    } else {
      alert('비밀번호가 틀렸습니다.')
    }
  }

  const fetchContacts = async () => {
    try {
      const { data, error } = await supabase
        .from(KMONG_1_TABLE_NAME)
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching contacts:', error)
        return
      }

      setContacts(data || [])
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getTypeLabel = (type: string) => {
    return type === 'full_form' ? '전체 폼' : '간편 문의'
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="bg-gradient-to-br from-dark-800/50 to-dark-700/30 p-8 rounded-2xl border border-neon-cyan/20 shadow-2xl max-w-md w-full mx-4">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-white mb-2">크몽 1차 의뢰 대시보드</h1>
            <p className="text-gray-400">가맹거래사 랜딩페이지 문의 관리</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-dark-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan outline-none text-white placeholder-gray-400"
                placeholder="대시보드 비밀번호를 입력하세요"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-coral-gradient hover:shadow-lg hover:shadow-coral-500/50 text-white py-3 rounded-lg font-semibold transition-all duration-300"
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-cyan mx-auto mb-4"></div>
          <p className="text-white">데이터를 불러오는 중...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-transparent bg-neon-gradient bg-clip-text mb-2">
            크몽 1차 의뢰 대시보드
          </h1>
          <p className="text-gray-400">가맹거래사 랜딩페이지 문의 데이터 ({contacts.length}건)</p>
        </div>

        <div className="bg-gradient-to-br from-dark-800/50 to-dark-700/30 rounded-2xl border border-neon-cyan/20 shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-dark-800/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                    이름
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                    연락처
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                    문의 내용
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                    유형
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                    접수 시간
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {contacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-dark-800/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {contact.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      {contact.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {contact.phone}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300 max-w-xs truncate">
                      {contact.message || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        contact.type === 'full_form' 
                          ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30' 
                          : 'bg-coral-500/20 text-coral-400 border border-coral-500/30'
                      }`}>
                        {getTypeLabel(contact.type)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {contact.created_at ? formatDate(contact.created_at) : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {contacts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">아직 접수된 문의가 없습니다.</p>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => window.location.href = '/'}
            className="bg-gradient-to-r from-dark-800 to-dark-900 hover:from-dark-700 hover:to-dark-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-gray-600"
          >
            랜딩페이지로 돌아가기
          </button>
        </div>
      </div>
    </div>
  )
}