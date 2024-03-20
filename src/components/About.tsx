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
            Como desenvolvedor com mais de um ano de experiência na área, minha
            graduação em informática no Instituto Federal de Mato Grosso
            forneceu uma base sólida. Desenvolvi várias soluções web inovadoras
            e seguras, consolidando-me como um Desenvolvedor Web FullStack.
            <br />
            <br />
            Além disso, minha experiência inclui vivências profissionais em
            diversos ambientes, como o Exército Brasileiro, onde aprimorei
            habilidades essenciais, como foco, comunicação e agilidade na
            resolução de problemas. Minhas especialidades em JavaScript,
            TypeScript, Next.js, Tailwind, Node.js e Git me permitem oferecer
            soluções rápidas e eficazes.
            <br />
            <br />
            Atualmente, estou cursando Ciência da Computação para aprimorar
            ainda mais minhas habilidades e enfrentar desafios complexos no
            mundo da tecnologia.
          </p>
        </div>

        <div className='neon absolute w-0.5 h-full right-0 ' />
      </div>
    </section>
  )
}
