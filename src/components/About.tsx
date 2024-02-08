import hero from '@/public/hero.png'
import Image from 'next/image'

export function About() {
  return (
    <section
      id='about'
      className='flex flex-col h-screen py-[calc(64px_+_24px)] pb-6 items-center justify-center'
    >
      <div className='flex gap-28 items-center'>
        <div className='flex w-[320px] h-[320px] min-w-[320px] border-4 border-lime-500 items-center justify-center overflow-hidden'>
          <Image src={hero} alt='Uma foto minha' quality={100} />
        </div>

        <div className='flex flex-col gap-4 bg-neutral-950 p-4'>
          <p className='text-2xl'>
            Nascido em Brasil, Cuiabá-MT. A minha casa ficava em uma chacara
            afastada da cidade, e por não ter muitos vizinhos da minha idade,
            acabei passando boa parte da minha infancia no computador, conectado
            a internet. Essa proximidade desde pequeno me fez apaixonar pela
            tecnlogia e adentrar nesse mundo incrivel.
          </p>
        </div>
      </div>
    </section>
  )
}
