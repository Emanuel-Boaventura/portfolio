import dompixel from '@/public/dompixel.svg'
import next from '@/public/techs/next.png'
import node from '@/public/techs/node.svg'
import tailwind from '@/public/techs/tailwind.png'
import typescript from '@/public/techs/typescript.svg'
import Image, { StaticImageData } from 'next/image'

interface IJobs {
  companyName: string
  companyLogo: StaticImageData
  actualJob: true
  duration: {
    start: string
    finish: string
  }
  techs: {
    img: StaticImageData
    alt: string
  }[]
}

const jobs: IJobs[] = [
  {
    companyName: 'DomPixel Tecnologia',
    companyLogo: dompixel,
    duration: {
      start: 'nov/2022',
      finish: '...',
    },
    actualJob: true,
    techs: [
      {
        img: next,
        alt: 'Next.JS',
      },
      {
        img: typescript,
        alt: 'TypeScript',
      },
      // {
      //   img: react,
      //   alt: 'React.JS',
      // },
      {
        img: node,
        alt: 'Node.JS',
      },
      {
        img: tailwind,
        alt: 'Tailwind',
      },
    ],
  },
]

export function Career() {
  function renderJobs() {
    return jobs.map(job => (
      <div
        key={job.companyName}
        className={`flex flex-col gap-4 items-center px-6 py-4 shadow-lg bg-[rgba(20,_20,_20)] w-fit text-center
        min-[425px]:flex-row min-[425px]:text-left sm:gap-8 sm:w-[460px]
        ${job.actualJob ? 'neon-shadow' : ''}`}
      >
        <Image
          src={job.companyLogo}
          alt={`Logo ${job.companyName}`}
          className='w-20 h-auto'
        />

        <div className='neon h-px w-full min-[425px]:h-[168px] min-[425px]:w-px' />

        <div className=' flex flex-col gap-3'>
          <p className='text-sm sm:text-base'>
            Empresa:
            <br />
            <span className='text-base sm:text-lg'>{job.companyName}</span>
          </p>

          <p className='text-sm sm:text-base'>
            Período:
            <br />
            <span className='text-base sm:text-lg'>
              {job.duration.start} a {job.duration.finish}
            </span>
          </p>

          <div>
            <p className='text-sm sm:text-base'>Tecnologias utilizadas:</p>

            <div className='grid grid-cols-4 mx-auto gap-4 mt-2 lg:mx-0 lg:grid-cols-5'>
              {job.techs.map(tech => (
                <Image
                  src={tech.img}
                  key={tech.alt}
                  alt={`Logo ${tech.alt}`}
                  className='w-7 h-7 sm:w-8 sm:h-8 object-contain'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <section className='flex flex-col py-20' id='career'>
      <div className='flex flex-col items-center mx-auto sm:container-sub'>
        <h2 className='text-xl font-bold text-center mb-10  sm:text-2xl'>
          Carreira
        </h2>

        {renderJobs()}
      </div>
    </section>
  )
}
