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
            Tenho como objetivo criar aplicações de alta qualidade, priorizando
            a experiência do usuário, desempenho e performance. Com atenção aos
            detalhes e uma mentalidade voltada à resolução de problemas, busco
            construir soluções que sejam tanto funcionais quanto elegantes.
            <br />
            <br />
            Trabalho como desenvolvedor Fullstack com foco principal no
            Frontend, onde me destaco na criação de interfaces intuitivas e
            responsivas. Atualmente, estou aprofundando meus conhecimentos em
            desenvolvimento Backend para ampliar ainda mais minhas habilidades e
            entregar soluções completas. Também possuo experiência no
            desenvolvimento Mobile, criando aplicativos eficientes e modernos.
          </p>
        </div>

        <div className='neon absolute right-0 h-full w-0.5' />
      </div>
    </section>
  )
}
