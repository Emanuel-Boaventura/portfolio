import hero from '@/public/my-photos/hero.png'
import next from '@/public/techs/next.png'
import node from '@/public/techs/node.svg'
import tailwind from '@/public/techs/tailwind.png'
import typescript from '@/public/techs/typescript.svg'
import Image from 'next/image'

const techs = [
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
]

export function Hero() {
  return (
    <section className='flex flex-col pt-[calc(64px_+_24px)] pb-20 items-center justify-center relative'>
      <div
        className='flex flex-col items-center relative
        sm:container-sub sm:justify-between
        lg:flex-row
        '
      >
        <div className='flex flex-col text-center sm:gap-4 lg:text-start'>
          <p className='sm:text-2xl'>Olá, eu sou</p>

          <h1
            className='text-lime-500 text-lg my-2 font-extrabold
            min-[300px]:text-xl
            sm:text-3xl sm:my-0
            lg:text-5xl lg:my-2
            xl:text-6xl
            '
          >
            {`<`} Emanuel <br className='hidden lg:inline' /> Boaventura {`/>`}
          </h1>

          <p
            className='font-semibold
            sm:text-2xl
            lg:text-3xl
            '
          >
            Desenvolvedor{' '}
            <span className='underline underline-offset-4'>FullStack</span>
          </p>

          <div
            className='self-start mx-auto mt-4 bottom-0 left-0
            sm:mt-0
            /lg:absolute lg:mx-0 lg:mt-4
            '
          >
            <h2 className='sm:text-2xl font-bold sm:mb-4'>
              Principais <span>Tecnologias</span>:
            </h2>

            <div className='grid grid-cols-4 w-fit mx-auto gap-4 mt-2 lg:mx-0 lg:grid-cols-5'>
              {techs.map(tech => (
                <Image
                  src={tech.img}
                  key={tech.alt}
                  alt={`Logo ${tech.alt}`}
                  className='w-7 h-7 sm:w-11 sm:h-11 object-contain'
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
            className='w-64 object-contain min-h-[304px] h-fit max-h-[680px] border-r-4 border-b-4 border-lime-500
            sm:w-80
            lg:w-full
            '
          />
        </div>
      </div>

      <span className='my-8 '>
        Ver mais <span className='animate-bounce inline-flex'>↓</span>
      </span>
    </section>
  )
}
