import { useLanguageContext } from '@/contexts/LanguageContext'
import useInViewport from '@/hooks/use-in-viewport'
import { translations } from '@/i18n/translations'
import { jobs } from '@/mock/jobs'
import Image from 'next/image'
import { Fragment } from 'react'

export function Career() {
  const ref = useInViewport()
  const { language } = useLanguageContext()
  const t = translations[language as 'en' | 'pt-br']

  function renderJobs() {
    return jobs.map((job, idx) => (
      <Fragment key={job.companyName}>
        <div
          className={`flex w-full flex-col items-center gap-4 bg-[rgba(20,_20,_20)] px-3 py-4 text-center shadow-lg min-[425px]:px-6 min-[425px]:text-left sm:max-w-[720px] ${
            job.actualJob ? 'neon-shadow' : ''
          }`}
        >
          <div className='flex flex-col gap-3 min-[425px]:w-full min-[425px]:flex-row min-[425px]:gap-6'>
            <Image
              src={job.companyLogo}
              alt={`Logo ${job.companyName}`}
              className='h-20 w-20 self-center min-[425px]:mx-0'
            />

            <div className='neon h-px w-full min-[425px]:h-auto min-[425px]:w-px' />

            <div>
              <div>
                <p className='text-sm sm:text-base'>{t.career.company}</p>
                <p className='text-base text-lime-500 sm:text-lg'>
                  {job.companyName}
                </p>
              </div>

              <div>
                <p className='text-sm sm:text-base'>{t.career.period}</p>
                <p className='text-base text-lime-500 sm:text-lg'>
                  {job.duration.start} - {job.duration.finish}
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <div>
              <p className='text-sm sm:text-base'>{t.career.description}</p>
              <p className='text-xs text-lime-500 sm:text-sm'>
                {job.description}
              </p>
            </div>

            <div>
              <p className='text-sm sm:text-base'>{t.career.techs}</p>
              <div className='mx-auto mt-2 flex flex-wrap justify-center gap-6 min-[425px]:justify-normal lg:mx-0'>
                {job.techs.map(tech => (
                  <Image
                    src={tech.img}
                    key={tech.alt}
                    alt={`Logo ${tech.alt}`}
                    className='h-7 w-7 object-contain sm:h-8 sm:w-8'
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {idx !== jobs.length - 1 && (
          <div className='neon -z-10 h-16 w-px overflow-hidden' />
        )}
      </Fragment>
    ))
  }

  return (
    <section
      ref={ref}
      className='fade-element flex flex-col px-8 py-20'
      id='career'
    >
      <div className='mx-auto flex w-full max-w-[1280px] flex-col items-center'>
        <h2 className='mb-10 text-center text-xl font-bold sm:text-2xl'>
          {t.career.title}
        </h2>

        <div className='flex w-full flex-col items-center'>{renderJobs()}</div>
      </div>
    </section>
  )
}
