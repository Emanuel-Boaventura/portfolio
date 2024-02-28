import hero from '@/public/about.jpg'
import Image from 'next/image'

export function About() {
  return (
    <section
      id='about'
      className='flex flex-col pb-6 pt-12 items-center justify-center sm:pb-12'
    >
      <div
        className='flex flex-col gap-10 items-center relative w-[86.25vw] px-4 container-sub
        lg:flex-row lg:px-7
        min-[1200px]:px-12
        xl:justify-between
        '
      >
        <div className='neon left-0' />

        <div
          className='flex w-60 h-60 border-4 border-lime-500 items-center justify-center overflow-hidden
          lg:w-[320px] lg:h-[320px] lg:min-w-[320px]
          '
        >
          <Image src={hero} alt='Uma foto minha' quality={100} />
        </div>

        <div className='bg-neutral-950 p-4'>
          <p
            className='text-sm max-w-sm text-justify leading-relaxed
            sm:max-w-md
            lg:text-lg lg:max-w-none
            '
          >
            Brasileiro, nascido em Cuiabá-MT. Passai boa parte da minha infância
            no computador, conectado a internet. Essa proximidade desde pequeno
            me fez apaixonar pela tecnologia e adentrar nesse mundo incrível, o
            qual já faço parte como desenvolvedor a um bom tempo.
          </p>
        </div>

        <div className='neon right-0' />
      </div>
    </section>
  )
}
