import useInViewport from '@/hooks/use-in-viewport'
import hero from '@/public/my-photos/hero.png'
import next from '@/public/techs/next.png'
import node from '@/public/techs/node.svg'
import react from '@/public/techs/react.png'
import tailwind from '@/public/techs/tailwind.png'
import typescript from '@/public/techs/typescript.svg'
import Image from 'next/image'

const techs = [
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
]

export function Hero() {
  const ref = useInViewport(true)
  return (
    <section
      ref={ref}
      className='fade-element relative flex flex-col items-center justify-center pb-20 pt-[calc(64px_+_24px)]'
      id=''
    >
      <div className='sm:container-hero relative flex flex-col items-center sm:justify-between lg:flex-row'>
        <div className='flex flex-col text-center sm:gap-4 lg:text-start'>
          <p className='sm:text-2xl'>Olá, eu sou</p>

          <h1 className='my-2 text-lg font-extrabold text-lime-500 min-[300px]:text-xl sm:my-0 sm:text-3xl lg:my-2 lg:text-5xl xl:text-6xl'>
            {`<`} Emanuel <br className='hidden lg:inline' /> Boaventura {`/>`}
          </h1>

          <p className='font-semibold sm:text-2xl lg:text-3xl'>
            Desenvolvedor{' '}
            <span className='underline underline-offset-4'>FullStack</span>
          </p>

          <div className='/lg:absolute bottom-0 left-0 mx-auto mt-4 self-start sm:mt-0 lg:mx-0 lg:mt-4'>
            <h2 className='font-bold sm:mb-4 sm:text-2xl'>
              Principais <span>Tecnologias</span>:
            </h2>

            <div className='mx-auto mt-2 grid w-fit grid-cols-4 gap-4 lg:mx-0 lg:grid-cols-5'>
              {techs.map(tech => (
                <Image
                  src={tech.img}
                  key={tech.alt}
                  alt={`Logo ${tech.alt}`}
                  className='h-7 w-7 object-contain sm:h-11 sm:w-11'
                />
              ))}
            </div>
          </div>
        </div>

        <div>
          <Image
            src={hero}
            alt='Uma foto minha'
            quality={100}
            className='h-fit max-h-[680px] min-h-[304px] w-64 border-b-4 border-r-4 border-lime-500 object-contain sm:w-80 lg:w-full'
          />
        </div>
      </div>

      <span className='my-8'>
        Ver mais <span className='inline-flex animate-bounce'>↓</span>
      </span>
    </section>
  )
}
