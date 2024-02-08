import hero from '@/public/hero.png'
import next from '@/public/next-n.png'
import node from '@/public/node.svg'
import react from '@/public/react.png'
import typescript from '@/public/typescript.svg'
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
  {
    img: react,
    alt: 'React.JS',
  },
  {
    img: node,
    alt: 'Node.JS',
  },
]

export function Hero() {
  return (
    <section className='flex flex-col h-screen py-[calc(64px_+_24px)] pb-6 items-center justify-center'>
      <div className='flex gap-28 items-center'>
        <div className='flex flex-col gap-4'>
          <p className='text-2xl'>Olá, eu sou</p>

          <h1 className='text-lime-500 text-6xl font-extrabold'>
            {`<`} Emanuel <br /> Boaventura {`/>`}
          </h1>

          <p className='text-3xl font-semibold'>
            Desenvolvedor{' '}
            <span className='underline underline-offset-4'>FullStack</span>
          </p>

          <div className='flex gap-10 mt-4'>
            <div className='flex gap-2'>
              <p className='text-5xl font-["Roboto"]'>12</p>
              <p>
                MESES DE <br /> EXPERIÊNCIA
              </p>
            </div>

            <div className='flex gap-2'>
              <p className='text-5xl font-["Roboto"]'>12</p>
              <p>
                PROJETOS DESENVOLVIDOS <br /> NA CARREIRA
              </p>
            </div>
          </div>
        </div>

        <div>
          <Image
            src={hero}
            alt='Uma foto minha'
            quality={100}
            className='w-full object-contain max-w-xl min-h-[304px] h-fit max-h-[680px] border-r-4 border-b-4 border-lime-500 teste'
          />
        </div>
      </div>

      <div className='self-start'>
        <h2 className='text-2xl font-bold mb-4'>
          Principais <span>Tecnlogias</span>:
        </h2>

        <div className='flex gap-4'>
          {techs.map(tech => (
            <div key={tech.alt} className={tech.alt === 'Next.JS' ? '' : ''}>
              <Image
                src={tech.img}
                alt={`Logo ${tech.alt}`}
                className='w-11 h-11 object-contain'
              />
            </div>
          ))}
        </div>
      </div>

      <p>
        <span>Ver mais ↓</span>
      </p>
    </section>
  )
}
