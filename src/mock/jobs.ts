import dompixel from '@/public/dompixel.svg'
import { StaticImageData } from 'next/image'
import { ITechs, techs } from './techs'

interface IJobs {
  companyName: string
  companyLogo: StaticImageData
  actualJob: true
  duration: {
    start: string
    finish: string
  }
  description: string
  techs: ITechs[]
}

const { next, react, typescript, node, tailwind, sass } = techs

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
    techs: [next, react, typescript, node, tailwind, sass],
  },
]
