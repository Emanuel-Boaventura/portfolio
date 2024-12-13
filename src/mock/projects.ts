import bozo from '@/public/projects/bozo-web.png'
import coffee from '@/public/projects/coffee-delivery.png'
import compostagem from '@/public/projects/compostagem.png'
import getCep from '@/public/projects/get-cep.png'
import biscoitos from '@/public/projects/lu-biscoitos.png'
import { StaticImageData } from 'next/image'
import { ITechs, techs } from './techs'

export interface IProjects {
  name: string
  img: StaticImageData
  href: string
  description: string
  techs: ITechs[]
}

const { next, react, typescript, tailwind, sass, vue, angular } = techs

export const projects: IProjects[] = [
  {
    name: 'Bozó Web',
    img: bozo,
    href: 'https://bozo-web.vercel.app/',
    description:
      'Bozó Web é um site funcional, criado para facilitar a marcação de pontos, controle de turnos e ranqueamento de jogadores. Desenvolvido para dispositivos móveis, ele opera offline e inclui um sistema de dados para garantir a acessibilidade dos usuários.',
    techs: [next, typescript, tailwind],
  },
  {
    name: 'Biscoitos da Lu',
    img: biscoitos,
    href: 'https://lu-biscoitos.vercel.app/',
    description:
      'Cardápio digital dos Biscoitos da Lu, o site veio para evitar que sejam sempre feitas as mesmas perguntas, sobre os biscoitos e preços, agora a "Lu" simplesmente envia o site para os clientes onde eles podem tirar todas as duvidas antes de fazer o pedido, facilitando o processo de comunicação com o cliente.',
    techs: [next, typescript, tailwind],
  },
  {
    name: 'Compostagem',
    img: compostagem,
    href: 'https://compostagem.vercel.app/',
    description:
      'Aplicação que auxilia pessoas a fazerem descarte correto de resto de alimentos. Nele ensinamos como descartar corretamente os restos orgânicos mais comum do dia a dia e também explicamos como fazer uma composteira caseira. Projeto feito no intuito de aprender Vue.',
    techs: [vue, sass, typescript],
  },
  {
    name: 'Get-CEP',
    img: getCep,
    href: 'https://get-cep.vercel.app/',
    description:
      'Ferramenta online que permite aos usuários verificarem os endereços com base no CEP. Este projeto utiliza como base a API do ViaCEP, que funciona simples e perfeitamente para a ocasião. Projeto feito no intuito de aprender Angular.',
    techs: [angular, sass, typescript],
  },
  {
    name: 'Coffee Delivery',
    img: coffee,
    href: 'https://coffee-delivery-boaventura.vercel.app/',
    description:
      'Um exemplo de loja online de café, utiliza uma Context para o armazenamento de itens adicionados no carrinho para compra futuramente. Projeto desenvolvido para compreender o funcionamento de Context no React.',
    techs: [react, typescript, sass],
  },
]
