import useInViewport from '@/hooks/use-in-viewport'
import { projects } from '@/mock/projects'
import Image from 'next/image'

export function Projects() {
  const ref = useInViewport()
  return (
    <section
      ref={ref}
      className='fade-element flex flex-col py-20'
      id='projects'
    >
      <div className='mx-auto flex w-full max-w-[1280px] flex-col items-center'>
        <h2 className='mb-10 text-center text-xl font-bold sm:text-2xl'>
          Projetos Pessoais
          <br />
        </h2>

        <div className='flex max-w-[100vw] gap-4 overflow-x-auto overflow-y-visible px-8 py-4 min-[1200px]:flex-wrap min-[1200px]:justify-center min-[1200px]:gap-8 min-[1200px]:px-0 min-[1700px]:flex-nowrap min-[1700px]:gap-4'>
          {projects.map(project => (
            <a
              key={project.name}
              className={`flex w-[300px] min-w-[260px] cursor-pointer flex-col bg-[rgba(20,_20,_20)] shadow-lg transition-transform hover:-translate-y-4`}
              href={project.href}
              target='_blank'
              rel='noreferrer'
            >
              <div className='h-48 overflow-hidden'>
                <Image
                  src={project.img}
                  alt={`Imagem do projeto: ${project.name}`}
                  quality={100}
                  className='w-full'
                />
              </div>

              <div className='neon h-px w-full' />

              <div className='flex h-[352px] flex-col gap-3 px-6 py-4'>
                <div>
                  <p className='text-sm sm:text-base'>Projeto:</p>
                  <p>
                    <span>{project.name}</span>
                  </p>
                </div>

                <div>
                  <p className='text-sm sm:text-base'>Descrição:</p>
                  <p className='text-xs'>
                    <span>{project.description}</span>
                  </p>
                </div>

                <div className='mt-auto'>
                  <p className='text-sm sm:text-base'>Tecnologias:</p>

                  <div className='mx-auto mt-2 flex gap-4 lg:mx-0 lg:grid-cols-5'>
                    {project.techs.map(tech => (
                      <Image
                        src={tech.img}
                        key={tech.alt}
                        alt={`Logo ${tech.alt}`}
                        className='h-7 w-7 object-contain sm:h-8 sm:w-8'
                      />
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
