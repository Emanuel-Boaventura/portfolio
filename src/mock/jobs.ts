import dompixel from '@/public/dompixel.svg'
import next from '@/public/techs/next.png'
import node from '@/public/techs/node.svg'
import react from '@/public/techs/react.png'
import sass from '@/public/techs/sass.png'
import tailwind from '@/public/techs/tailwind.png'
import typescript from '@/public/techs/typescript.svg'
import { StaticImageData } from 'next/image'

interface IJobs {
  companyName: string
  companyLogo: StaticImageData
  actualJob: true
  duration: {
    start: string
    finish: string
  }
  description: string
  techs: {
    img: StaticImageData
    alt: string
  }[]
}

export const jobs: IJobs[] = [
  {
    companyName: 'DomPixel Tecnologia',
    companyLogo: dompixel,
    duration: {
      start: 'nov/2022',
      finish: 'Atualmente',
    },
    description:
      'Como Dev Full-Stack na DomPixel atuei na frente do desenvolvimento de aplicações do começo ao fim, entre elas: Plataformas de RH, sites de divulgação e gestão de cursos, plataforma para gestão de campanhas de doação e plataformas para controle de produtos e vendas. Participando em reuniões periódicas com o cliente e reuniões diárias com o time de desenvolvimento para tomada de decisão em relação aos projetos.',
    actualJob: true,
    techs: [
      {
        img: next,
        alt: 'Next.JS',
      },
      {
        img: react,
        alt: 'React.JS',
      },
      {
        img: typescript,
        alt: 'TypeScript',
      },
      {
        img: node,
        alt: 'Node.JS',
      },
      {
        img: tailwind,
        alt: 'Tailwind',
      },
      {
        img: sass,
        alt: 'SASS',
      },
    ],
  },
]
