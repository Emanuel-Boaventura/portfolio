import hero from '@/public/my-photos/about.jpg'
import Image from 'next/image'

export function About() {
  return (
    <section
      id='about'
      className='flex flex-col py-20 items-center justify-center'
    >
      <h2 className='text-xl font-bold text-center mb-10  sm:text-2xl'>
        Biografia
      </h2>

      <div
        className='flex flex-col gap-10 items-center relative w-[86.25vw] px-4 container-sub
        lg:flex-row lg:px-7
        min-[1200px]:px-12
        xl:justify-between
        '
      >
        <div className='neon absolute w-0.5 h-full left-0' />

        <div
          className='flex w-60 h-60 border-4 border-lime-500 items-center justify-center overflow-hidden
          lg:w-[320px] lg:h-[320px] lg:min-w-[320px]
          '
        >
          <Image src={hero} alt='Uma foto minha' quality={100} />
        </div>

        <div className='bg-[rgba(20,_20,_20)] p-4'>
          <p
            className='text-xs max-w-sm text-justify leading-relaxed
            sm:max-w-md sm:text-sm
            lg:text-lg lg:max-w-none
            '
          >
            Desenvolvedor Fullstack com alta experiência no desenvolvimento
            Frontend. Especializado em construções de aplicações robustas com
            TypeScript e NextJS. Seguindo padrões estabelecidos em Figma com
            base no UX/UI.
            <br />
            <br />
            Também possuo experiência em desenvolvimento Mobile com React Native
            e desenvolvimento backend em APIs REST com NodeJS e os frameworks
            AdonisJS e NestJS. Utilizando bancos relacionais e não relacionais
            em MySQL, PostgreSQL e MongoDB.
            <br />
            <br />
            Proficiente no uso de Git, Github e GitLab para controle de versão e
            colaboração em projetos, experiencia prática com Docker para
            conteinerização e gerenciamento de ambientes. Experiência em
            metodologias ágeis como Scrum e Kanban.
          </p>
        </div>

        <div className='neon absolute w-0.5 h-full right-0 ' />
      </div>
    </section>
  )
}
