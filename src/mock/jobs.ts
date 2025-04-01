import dompixel from '@/public/dompixel.svg'
import trescon from '@/public/3con.png'
import { StaticImageData } from 'next/image'
import { ITech, techs } from './techs'

interface IJobs {
  companyName: string
  companyLogo: StaticImageData
  duration: {
    start: string
    finish: string
  }
  description: string
  techs: ITech[]
  actualJob: boolean
}

const {
  next,
  react,
  typescript,
  node,
  tailwind,
  sass,
  nest,
  mysql,
  postgresql,
  adonis,
} = techs

export const jobs: IJobs[] = [
  {
    companyName: '3CON Consultoria e Sistemas',
    companyLogo: trescon,
    duration: {
      start: 'jan/2025',
      finish: 'Atualmente',
    },
    description:
      'Atuo como Lead Mobile Developer responsável pelo desenvolvimento completo de aplicativos com React Native, trabalhando de forma autônoma na tomada de decisões técnicas e arquiteturais para os projetos. Além disso, participo como Dev Frontend em equipes multidisciplinares, contribuindo para o desenvolvimento e manutenção de uma plataforma interna utilizando React, assegurando qualidade e desempenho nas entregas.',
    actualJob: true,
    techs: [react, tailwind, typescript],
  },
  {
    companyName: 'DomPixel Tecnologia',
    companyLogo: dompixel,
    duration: {
      start: 'nov/2022',
      finish: 'dez/2024',
    },
    description:
      'Como Dev Full-Stack na DomPixel atuei na frente do desenvolvimento de aplicações do começo ao fim, entre elas: Plataformas de RH, sites de divulgação e gestão de cursos, plataforma para gestão de campanhas de doação e plataformas para controle de produtos e vendas. Participando em reuniões periódicas com o cliente e reuniões diárias com o time de desenvolvimento para tomada de decisão em relação aos projetos.',
    actualJob: false,
    techs: [
      react,
      next,
      tailwind,
      sass,
      node,
      nest,
      adonis,
      typescript,
      mysql,
      postgresql,
    ],
  },
]
