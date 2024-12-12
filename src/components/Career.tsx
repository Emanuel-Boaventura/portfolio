import useInViewport from '@/hooks/use-in-viewport'
import dompixel from '@/public/dompixel.svg'
import next from '@/public/techs/next.png'
import node from '@/public/techs/node.svg'
import react from '@/public/techs/react.png'
import sass from '@/public/techs/sass.png'
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
  description: string
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
    description:
      'Como Dev Full-Stack na DomPixel atuei na frente do desenvolvimento de aplicações do começo ao fim, entre elas: Plataformas de RH, sites de divulgação e gestão de cursos, plataforma para gestão de campanhas de doação e plataformas para controle de produtos e vendas. Participando em reuniões periódicas com o cliente e reuniões diárias com o time de desenvolvimento para tomada de decisão em relação aos projetos.',
    actualJob: true,
    techs: [
      {
        img: next,
        alt: 'Next.JS',
      },
      {
        img: react,
        alt: 'React.JS',
      },
      {
        img: typescript,
        alt: 'TypeScript',
      },
      {
        img: node,
        alt: 'Node.JS',
      },
      {
        img: tailwind,
        alt: 'Tailwind',
      },
      {
        img: sass,
        alt: 'SASS',
      },
    ],
  },
]

export function Career() {
  const ref = useInViewport()

  function renderJobs() {
    return jobs.map(job => (
      <div
        key={job.companyName}
        className={`flex w-full flex-col items-center gap-4 bg-[rgba(20,_20,_20)] px-3 py-4 text-center shadow-lg min-[425px]:px-6 min-[425px]:text-left sm:max-w-[720px] ${
          job.actualJob ? 'neon-shadow' : ''
        }`}
      >
        <div className='flex flex-col gap-3 min-[425px]:w-full min-[425px]:flex-row min-[425px]:gap-6'>
          <Image
            src={job.companyLogo}
            alt={`Logo ${job.companyName}`}
            className='mx-auto h-auto w-20 min-[425px]:mx-0'
          />

          <div className='neon h-px w-full min-[425px]:h-auto min-[425px]:w-px' />

          <div>
            <div>
              <p className='text-sm sm:text-base'>Empresa:</p>
              <p className='text-base text-lime-500 sm:text-lg'>
                {job.companyName}
              </p>
            </div>

            <div>
              <p className='text-sm sm:text-base'>Período:</p>
              <p className='text-base text-lime-500 sm:text-lg'>
                {job.duration.start} a {job.duration.finish}
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div>
            <p className='text-sm sm:text-base'>Descrição:</p>
            <p className='text-xs text-lime-500 sm:text-sm'>
              {job.description}
            </p>
          </div>

          <div>
            <p className='text-sm sm:text-base'>Tecnologias utilizadas:</p>
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
          Carreira
        </h2>

        {renderJobs()}
      </div>
    </section>
  )
}
