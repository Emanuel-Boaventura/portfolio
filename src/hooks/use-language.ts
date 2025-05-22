import { useEffect, useState } from 'react'

type Language = 'en' | 'pt-br'

export function useLanguage(): [Language, (lang: Language) => void] {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Language | null
    if (stored === 'en' || stored === 'pt-br') {
      setLanguage(stored)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('lang', lang)
  }

  return [language, changeLanguage]
}
