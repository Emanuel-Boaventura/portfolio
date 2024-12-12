import { projects } from '@/mock/projects'
import Image from 'next/image'

export function Projects() {
  return (
    <section className='flex flex-col py-20' id='projects'>
      <div className='flex flex-col items-center mx-auto sm:container-sub'>
        <h2 className='text-xl font-bold text-center mb-10  sm:text-2xl'>
          Projetos
          <br />
        </h2>

        <div className='max-w-[100vw] overflow-x-auto overflow-y-visible flex gap-4 px-8 py-4 min-[1200px]:flex-wrap min-[1200px]:px-0 min-[1200px]:justify-center min-[1200px]:gap-8 min-[1700px]:gap-4 min-[1700px]:flex-nowrap'>
          {projects.map(project => (
            <a
              key={project.name}
              className={`bg-[rgba(20,_20,_20)] flex flex-col shadow-lg min-w-[260px] w-[300px]  transition-transform hover:-translate-y-4 cursor-pointer`}
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

              <div className='flex flex-col gap-3 px-6 py-4 h-[352px]'>
                <div>
                  <p className='text-sm sm:text-base'>Projeto:</p>
                  <p>
                    <span>{project.name}</span>
                  </p>
                </div>

                <div>
                  <p className='text-sm sm:text-base'>Descrição:</p>
                  <p className='text-xs '>
                    <span>{project.description}</span>
                  </p>
                </div>

                <div className='mt-auto'>
                  <p className='text-sm sm:text-base'>Tecnologias:</p>

                  <div className='flex mx-auto gap-4 mt-2 lg:mx-0 lg:grid-cols-5'>
                    {project.techs.map(tech => (
                      <Image
                        src={tech.img}
                        key={tech.alt}
                        alt={`Logo ${tech.alt}`}
                        className='w-7 h-7 sm:w-8 sm:h-8 object-contain'
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
