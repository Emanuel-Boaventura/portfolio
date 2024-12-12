import useInViewport from '@/hooks/use-in-viewport'
import hero from '@/public/my-photos/about.jpg'
import Image from 'next/image'

export function About() {
  const ref = useInViewport()
  return (
    <section
      ref={ref}
      className='fade-element flex flex-col items-center justify-center py-20'
      id='about'
    >
      <h2 className='mb-10 text-center text-xl font-bold sm:text-2xl'>
        Biografia
      </h2>

      <div className='relative flex max-w-[1280px] flex-col items-center justify-around gap-10 px-4 sm:px-16 lg:w-[86.25vw] lg:flex-row lg:px-7 min-[1200px]:px-12 xl:justify-between'>
        <div className='neon absolute left-0 h-full w-0.5' />

        <div className='flex h-60 w-60 min-w-[240px] items-center justify-center overflow-hidden border-4 border-lime-500'>
          <Image src={hero} alt='Uma foto minha' quality={100} />
        </div>

        <div className='bg-[rgba(20,_20,_20)] p-4'>
          <p className='max-w-sm text-xs leading-relaxed sm:max-w-md sm:text-sm lg:max-w-none lg:text-lg'>
            Desenvolvedor Fullstack com foco no desenvolvimento Frontend.
            Especializado em construções de aplicações robustas com base em{' '}
            <span>JavaScript</span> com <span>TypeScript</span>.
            <br />
            <br />
            No frontend utilizo principalmente <span>React</span>, mas também
            possuo conhecimento de <span>Angular</span> e <span>Vue.js</span>.
            Também possuo experiência em desenvolvimento Mobile com{' '}
            <span>React Native</span> e <span>Expo</span>. No backend utilizo{' '}
            <span>Node.js</span> com <span>Express</span>, <span>AdonisJS</span>{' '}
            e <span>NestJS</span>. Utilizando bancos relacionais e não
            relacionais em <span>MySQL</span>, <span>PostgreSQL</span> e{' '}
            <span>MongoDB</span>.
            <br />
            <br />
            Proficiente no uso de <span>Git</span>, <span>Github</span> e{' '}
            <span>GitLab</span> para controle de versão e colaboração em
            projetos, experiencia prática com <span>Docker</span> para
            conteinerização e gerenciamento de ambientes. Experiência em
            metodologias ágeis como <span>Scrum</span> e <span>Kanban</span>.
          </p>
        </div>

        <div className='neon absolute right-0 h-full w-0.5' />
      </div>
    </section>
  )
}
