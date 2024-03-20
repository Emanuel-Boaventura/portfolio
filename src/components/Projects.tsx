import bozo from '@/public/projects/bozo-web.png'
import coffee from '@/public/projects/coffee-delivery.png'
import omnifood from '@/public/projects/omnifood.png'
import next from '@/public/techs/next.png'
import html from '@/public/techs/html.png'
import react from '@/public/techs/react.png'
import sass from '@/public/techs/sass.png'
import css from '@/public/techs/css.png'
import tailwind from '@/public/techs/tailwind.png'
import typescript from '@/public/techs/typescript.svg'
import Image, { StaticImageData } from 'next/image'

interface IProjects {
  name: string
  img: StaticImageData
  href: string
  description: string
  techs: {
    img: StaticImageData
    alt: string
  }[]
}

const projects: IProjects[] = [
  {
    name: 'Bozó Web',
    img: bozo,
    href: 'https://bozo-web.vercel.app/',
    description:
      'Bozó Web é um aplicativo funcional e real, projetado para facilitar a marcação de pontos, controle de turnos e visualização do ranking de jogadores. Desenvolvido com Next.js, TypeScript e Tailwind, demonstra minha habilidade em construir soluções práticas e eficazes.',
    techs: [
      {
        img: next,
        alt: 'Next.JS',
      },
      {
        img: typescript,
        alt: 'TypeScript',
      },
      {
        img: tailwind,
        alt: 'Tailwind',
      },
    ],
  },
  {
    name: 'Coffee Delivery',
    img: coffee,
    href: 'https://coffee-delivery-sigma-jet.vercel.app/',
    description:
      'Coffee Delivery é um exemplo de loja online de café, demonstrando minha capacidade de desenvolvimento web. Com React.js, TypeScript e Sass, o projeto destaca minha habilidade em criar interfaces intuitivas e eficientes para clientes.',
    techs: [
      {
        img: react,
        alt: 'React.JS',
      },
      {
        img: typescript,
        alt: 'TypeScript',
      },
      {
        img: sass,
        alt: 'Sass',
      },
    ],
  },
  {
    name: 'Omnifood',
    img: omnifood,
    href: 'https://omnifood-flax.vercel.app/',
    description:
      'Omnifood é um exemplo da minha capacidade de desenvolvimento com HTML e CSS puro. A página de divulgação de um serviço de assinatura de refeições destaca-se pela sua simplicidade e elegância, demonstrando meu domínio das tecnologias fundamentais da web.',
    techs: [
      {
        img: html,
        alt: 'Pure HTML',
      },
      {
        img: css,
        alt: 'Pure CSS',
      },
    ],
  },
]

export function Projects() {
  return (
    <section className='flex flex-col py-20' id='projects'>
      <div className='flex flex-col items-center mx-auto sm:container-sub'>
        <h2 className='text-xl font-bold text-center mb-10  sm:text-2xl'>
          Projetos
          <br />
        </h2>

        <div className='max-w-[100vw] overflow-x-auto overflow-y-visible flex gap-4 px-8 py-4'>
          {projects.map(project => (
            <a
              key={project.name}
              className={`bg-[rgba(20,_20,_20)] flex flex-col shadow-lg min-w-[260px] w-[300px] transition-transform hover:-translate-y-4 cursor-pointer`}
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

              <div className='flex flex-col gap-3 px-6 py-4 h-[336px]'>
                <div>
                  <p className='text-sm sm:text-base'>Projeto:</p>
                  <p>
                    <span>{project.name}</span>
                  </p>
                </div>

                <div>
                  <p className='text-sm sm:text-base'>Descrição:</p>
                  <p className='text-xs text-justify'>
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
