import hero from '@/public/my-photos/about.jpg'
import Image from 'next/image'

export function About() {
  return (
    <section
      id='about'
      className='flex flex-col items-center justify-center py-12'
    >
      <h2 className='mb-10 text-center text-xl font-bold sm:text-2xl'>
        Biografia
      </h2>

      <div className='container-sub relative flex w-[86.25vw] flex-col items-center gap-10 px-4 lg:flex-row lg:px-7 min-[1200px]:px-12 xl:justify-between'>
        <div className='neon absolute left-0 h-full w-0.5' />

        <div className='flex h-60 w-60 items-center justify-center overflow-hidden border-4 border-lime-500 lg:h-[320px] lg:w-[320px] lg:min-w-[320px]'>
          <Image src={hero} alt='Uma foto minha' quality={100} />
        </div>

        <div className='bg-[rgba(20,_20,_20)] p-4'>
          <p className='max-w-sm text-justify text-xs leading-relaxed sm:max-w-md sm:text-sm lg:max-w-none lg:text-lg'>
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

        <div className='neon absolute right-0 h-full w-0.5' />
      </div>
    </section>
  )
}
