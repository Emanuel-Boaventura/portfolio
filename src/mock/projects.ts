import bozo from '@/public/projects/bozo-web.png'
import coffee from '@/public/projects/coffee-delivery.png'
import compostagem from '@/public/projects/compostagem.png'
import takis from '@/public/projects/takis.png'
import devBlog from '@/public/projects/dev-blog.png'
import getCep from '@/public/projects/get-cep.png'
import biscoitos from '@/public/projects/lu-biscoitos.png'
import { StaticImageData } from 'next/image'
import { ITech, techs } from './techs'

export interface IProjects {
  name: string
  img: StaticImageData
  href: string
  description: string
  techs: ITech[]
}

const {
  next,
  react,
  typescript,
  tailwind,
  sass,
  vue,
  angular,
  nest,
  sqlite,
  node,
} = techs

export const projects: IProjects[] = [
  {
    name: 'Jogo da Memória Takis',
    img: takis,
    href: 'https://github.com/Emanuel-Boaventura/takis-memory-game',
    description:
      'Um jogo de da memória para tablet/celular desenvolvido especialmente para uma marca de salgadinhos. Com visual temático e cronômetro integrado, o projeto proporciona uma interação divertida e dinâmica aos usuários.',
    techs: [react],
  },
  {
    name: 'Bozó Web',
    img: bozo,
    href: 'https://bozo-web.vercel.app/',
    description:
      'Bozó Web é um site funcional, criado para facilitar a marcação de pontos, controle de turnos e ranqueamento de jogadores. Desenvolvido para dispositivos móveis, ele opera offline e inclui um sistema de dados para garantir a acessibilidade dos usuários.',
    techs: [react, next, tailwind, typescript],
  },
  {
    name: 'Biscoitos da Lu',
    img: biscoitos,
    href: 'https://lu-biscoitos.vercel.app/',
    description:
      'Cardápio digital dos Biscoitos da Lu, o site veio para evitar que sejam feitas as mesmas perguntas, sobre os biscoitos e preços, agora a "Lu" apenas envia o site para os clientes onde eles podem tirar as duvidas antes de fazer o pedido, facilitando o processo de venda.',
    techs: [react, next, tailwind, typescript],
  },

  {
    name: 'Dev Blog',
    img: devBlog,
    href: 'https://github.com/Emanuel-Boaventura/dev-blog-next',
    description:
      'Um blog onde usuários criam contas para publicar textos, adicionar imagens e interagir com publicações. Posts e comentários podem ser editados ou excluídos. Desenvolvido com Next, NestJS e SQLite, projeto criado com para o aprendizado e prática de novas tecnologias.',
    techs: [react, next, node, nest, sqlite],
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
    techs: [react, sass, typescript],
  },
]
