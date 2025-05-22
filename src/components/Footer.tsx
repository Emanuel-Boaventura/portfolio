import { useLanguageContext } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/translations'

export function Footer() {
  const { language } = useLanguageContext()
  const t = translations[language as 'en' | 'pt-br']

  return (
    <footer className='mt-36 bg-[#0a0a0a] py-3 sm:py-4'>
      <div className='container mx-auto flex justify-center'>
        <p className='text-center text-xs sm:text-base'>
          {t.footer.developedBy}{' '}
          <a
            href='https://www.linkedin.com/in/emanuelboaventura/'
            target='_blank'
            rel='noopener noreferrer'
            className='sections text-lime-500'
          >
            Emanuel-Boaventura
          </a>
        </p>
      </div>
    </footer>
  )
}
