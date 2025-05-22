import { useLanguageContext } from '@/contexts/LanguageContext'
import Image from 'next/image'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguageContext()
  const lang = language as 'en' | 'pt-br'
  const nextLang = lang === 'en' ? 'pt-br' : 'en'
  const flagSrc = nextLang === 'en' ? '/us.svg' : '/br.svg'
  const flagAlt = nextLang === 'en' ? 'USA flag' : 'Brazil flag'
  const langLabel = nextLang === 'en' ? 'EN' : 'PT-BR'

  return (
    <button
      onClick={() => setLanguage(nextLang)}
      className='flex items-center gap-2 rounded border border-lime-500 px-2 py-1 text-xs transition-colors hover:bg-lime-500 hover:text-black'
      aria-label='Toggle language'
    >
      <Image src={flagSrc} alt={flagAlt} width={20} height={14} />
      {langLabel}
    </button>
  )
}
