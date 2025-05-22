import { useLanguageContext } from '@/contexts/LanguageContext'
import useInViewport from '@/hooks/use-in-viewport'
import { translations } from '@/i18n/translations'
import hero from '@/public/my-photos/about.jpg'
import Image from 'next/image'

export function About() {
  const ref = useInViewport()
  const { language } = useLanguageContext()
  const t = translations[language as 'en' | 'pt-br']

  return (
    <section
      ref={ref}
      className='fade-element flex flex-col items-center justify-center pb-10 pt-20'
      id='about'
    >
      <h2 className='mb-10 text-center text-xl font-bold sm:text-2xl'>
        {t.about.title}
      </h2>

      <div className='relative flex max-w-[1280px] flex-col items-center justify-around gap-10 px-4 sm:px-16 lg:w-[86.25vw] lg:flex-row lg:px-7 min-[1200px]:px-12 xl:justify-between'>
        <div className='neon absolute left-0 h-full w-0.5' />

        <div className='flex h-60 w-60 min-w-[240px] items-center justify-center overflow-hidden border-4 border-lime-500'>
          <Image src={hero} alt='Uma foto minha' quality={100} />
        </div>

        <div className='bg-[rgba(20,_20,_20)] p-4'>
          <p
            className='max-w-sm text-xs leading-relaxed sm:max-w-md sm:text-sm lg:max-w-none lg:text-lg'
            style={{ whiteSpace: 'pre-line' }}
          >
            {t.about.text}
          </p>
        </div>

        <div className='neon absolute right-0 h-full w-0.5' />
      </div>
    </section>
  )
}
