import React from 'react'
import Navbar from '../components/Navbar'
import { useLanguageStore } from '../store/languageStore'

const Profile = () => {
  const { language } = useLanguageStore()

  const translations = {
    en: { title: 'User Profile' },
    ta: { title: 'பயனர் சுயவிவரம்' },
  }

  const t = translations[language]

  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-slate-900 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">{t.title}</h1>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow">
            <p className="text-gray-600 dark:text-gray-400">Profile module content coming soon...</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Profile
