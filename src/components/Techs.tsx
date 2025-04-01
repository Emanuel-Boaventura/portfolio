import useInViewport from '@/hooks/use-in-viewport'
import { techs } from '@/mock/techs'
import Image from 'next/image'

export function Techs() {
  const ref = useInViewport()
  // caso alterar essa variável, alterar também o keyframe infiniteSlide no global.scss
  const techsArray = Object.values(techs)
  const width = 64
  const slideMinWidth = width * techsArray.length * 1.25

  return (
    <section
      ref={ref}
      className='fade-element flex flex-col items-center justify-center pb-20'
    >
      <div className='slider-mask mt-10 h-[80px] w-screen overflow-hidden bg-neutral-900'>
        <div
          className='relative flex w-full'
          style={{ minWidth: `${slideMinWidth}px` }}
        >
          {techsArray.map(({ alt, img }, idx) => (
            <div
              key={alt}
              className='infinite-slide absolute left-full mt-2'
              style={{ animationDelay: `${-idx}s` }}
            >
              <Image
                src={img}
                alt={alt}
                quality={100}
                className='flex h-16 w-16 object-contain'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
