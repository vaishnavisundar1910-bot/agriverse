import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useLanguageStore = create(
  persist(
    (set) => ({
      language: 'en',
      setLanguage: (lang) => set({ language: lang }),
      toggleLanguage: () =>
        set((state) => ({
          language: state.language === 'en' ? 'ta' : 'en',
        })),
    }),
    {
      name: 'language-store',
    }
  )
)

export { useLanguageStore }
