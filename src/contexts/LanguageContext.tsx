import { createContext, useContext } from 'react'

export type Language = 'en' | 'pt-br'

interface LanguageContextProps {
  language: Language
  setLanguage: (lang: Language) => void
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  setLanguage: () => {},
})

export function useLanguageContext() {
  return useContext(LanguageContext)
}
