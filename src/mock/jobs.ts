import trescon from '@/public/3con.png'
import dompixel from '@/public/dompixel.svg'
import midnightLabs from '@/public/midnight-labs.jpg'
import { StaticImageData } from 'next/image'
import { ITech, techs } from './techs'

interface IJobs {
  companyName: string
  companyLogo: StaticImageData
  duration: {
    start: string
    finish: string
  }
  durationEn: {
    start: string
    finish: string
  }
  description: string
  descriptionEn: string
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
      start: 'Jan/2025',
      finish: 'Atualmente',
    },
    durationEn: {
      start: 'Jan/2025',
      finish: 'Present',
    },
    description:
      'Atuando como Tech Lead Frontend, sou responsável por liderar uma equipe composta por dois estagiários e um desenvolvedor pleno, supervisionando a arquitetura dos projetos, melhores práticas, revisão de código e oferecendo suporte técnico em projetos React. Participo regularmente de reuniões com clientes para alinhar escopo, prazos e entregas, além de planejar e distribuir tarefas com foco em qualidade e consistência. Além do papel de liderança, também contribuo como desenvolvedor em outros projetos, apoiando demandas de desenvolvimento mobile (React Native) e web (React.js), conforme necessário.',
    descriptionEn:
      'Acting as a Frontend Tech Lead, I am responsible for leading a team of two interns and a mid-level developer, overseeing project architecture, best practices, code review, and providing technical support in React projects. I regularly participate in meetings with clients to align scope, deadlines, and deliveries, while planning and distributing tasks with a focus on quality and consistency. Beyond my leadership role, I also contribute as a developer in other projects, supporting both mobile (React Native) and web (React.js) development needs as required.',
    actualJob: true,
    techs: [react, tailwind, typescript],
  },
  {
    companyName: 'DomPixel Tecnologia',
    companyLogo: dompixel,
    duration: {
      start: 'Nov/2022',
      finish: 'Dez/2024',
    },
    durationEn: {
      start: 'Nov/2022',
      finish: 'Dec/2024',
    },
    description:
      'Como Dev Full-Stack na DomPixel atuei na frente do desenvolvimento de aplicações do começo ao fim, entre elas: Plataformas de RH, sites de divulgação e gestão de cursos, plataforma para gestão de campanhas de doação e plataformas para controle de produtos e vendas. Participando em reuniões periódicas com o cliente e reuniões diárias com o time de desenvolvimento para tomada de decisão em relação aos projetos.',
    descriptionEn:
      'As a Full-Stack Dev at DomPixel, I led the development of applications from start to finish, including: HR platforms, promotional and course management sites, a platform for managing donation campaigns, and platforms for product and sales control. Participated in regular client meetings and daily development team meetings for project decision-making.',
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
  {
    companyName: 'Midnight Labs',
    companyLogo: midnightLabs,
    duration: {
      start: 'Set/2020',
      finish: 'Out/2022',
    },
    durationEn: {
      start: 'Sep/2020',
      finish: 'Oct/2022',
    },
    description:
      'Iniciei minha carreira como desenvolvedor júnior, participando da manutenção e evolução de projetos existentes, aplicando conceitos de componentização e reaproveitamento de código com React, com foco em performance e boas práticas de programação. Colaborei com o time do Backend para consumir e integrar APIs REST, garantindo consistência entre dados enviados e recebidos. Aprofundei conhecimentos em HTML, CSS, Javascript e React, além de compreender o funcionamento do Git e Github.',
    descriptionEn:
      'I started my career as a Junior Developer, participating in the maintenance and evolution of existing projects, applying componentization concepts and code reuse with React, focusing on performance and best programming practices. I collaborated with the Backend team to consume and integrate REST APIs, ensuring consistency between sent and received data. I deepened my knowledge in HTML, CSS, Javascript, and React, as well as understanding the operation of Git and Github.',
    actualJob: false,
    techs: [react, sass, typescript, node],
  },
]
