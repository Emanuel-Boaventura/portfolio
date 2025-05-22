import bozo from '@/public/projects/bozo-web.png'
import coffee from '@/public/projects/coffee-delivery.png'
import compostagem from '@/public/projects/compostagem.png'
import devBlog from '@/public/projects/dev-blog.png'
import getCep from '@/public/projects/get-cep.png'
import biscoitos from '@/public/projects/lu-biscoitos.png'
import takis from '@/public/projects/takis.png'
import { StaticImageData } from 'next/image'
import { ITech, techs } from './techs'

export interface IProjects {
  name: string
  nameEn: string
  img: StaticImageData
  href: string
  description: string
  descriptionEn: string
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
    nameEn: 'Takis Memory Game',
    img: takis,
    href: 'https://github.com/Emanuel-Boaventura/takis-memory-game',
    description:
      'Um jogo de da memória para tablet/celular desenvolvido especialmente para uma marca de salgadinhos. Com visual temático e cronômetro integrado, o projeto proporciona uma interação divertida e dinâmica aos usuários.',
    descriptionEn:
      'A memory game for tablet/mobile developed especially for a snack brand. With a themed look and integrated timer, the project provides a fun and dynamic interaction for users.',
    techs: [react],
  },
  {
    name: 'Bozó Web',
    nameEn: 'Bozó Web',
    img: bozo,
    href: 'https://bozo-web.vercel.app/',
    description:
      'Bozó Web é um site funcional, criado para facilitar a marcação de pontos, controle de turnos e ranqueamento de jogadores. Desenvolvido para dispositivos móveis, ele opera offline e inclui um sistema de dados para garantir a acessibilidade dos usuários.',
    descriptionEn:
      'Bozó Web is a functional site created to facilitate scorekeeping, turn control, and player ranking. Developed for mobile devices, it works offline and includes a data system to ensure user accessibility.',
    techs: [react, next, tailwind, typescript],
  },
  {
    name: 'Biscoitos da Lu',
    nameEn: 'Lu Cookies',
    img: biscoitos,
    href: 'https://lu-biscoitos.vercel.app/',
    description:
      'Cardápio digital dos Biscoitos da Lu, o site veio para evitar que sejam feitas as mesmas perguntas, sobre os biscoitos e preços, agora a "Lu" apenas envia o site para os clientes onde eles podem tirar as duvidas antes de fazer o pedido, facilitando o processo de venda.',
    descriptionEn:
      'Digital menu for "Biscoitos da Lu" (Lu Cookies), the site was created to avoid repeated questions about cookies and prices. Now "Lu" just sends the site to customers where they can clear their doubts before ordering, making the sales process easier.',
    techs: [react, next, tailwind, typescript],
  },
  {
    name: 'Dev Blog',
    nameEn: 'Dev Blog',
    img: devBlog,
    href: 'https://github.com/Emanuel-Boaventura/dev-blog-next',
    description:
      'Um blog onde usuários criam contas para publicar textos, adicionar imagens e interagir com publicações. Posts e comentários podem ser editados ou excluídos. Desenvolvido com Next, NestJS e SQLite, projeto criado com para o aprendizado e prática de novas tecnologias.',
    descriptionEn:
      'A blog where users create accounts to publish texts, add images, and interact with posts. Posts and comments can be edited or deleted. Developed with Next, NestJS, and SQLite, this project was created for learning and practicing new technologies.',
    techs: [react, next, node, nest, sqlite],
  },
  {
    name: 'Compostagem',
    nameEn: 'Composting',
    img: compostagem,
    href: 'https://compostagem.vercel.app/',
    description:
      'Aplicação que auxilia pessoas a fazerem descarte correto de resto de alimentos. Nele ensinamos como descartar corretamente os restos orgânicos mais comum do dia a dia e também explicamos como fazer uma composteira caseira. Projeto feito no intuito de aprender Vue.',
    descriptionEn:
      'An application that helps people properly dispose of food waste. It teaches how to correctly discard the most common organic waste and also explains how to make a homemade composter. Project made with the intention of learning Vue.',
    techs: [vue, sass, typescript],
  },
  {
    name: 'Get-CEP',
    nameEn: 'Get-CEP',
    img: getCep,
    href: 'https://get-cep.vercel.app/',
    description:
      'Ferramenta online que permite aos usuários verificarem os endereços com base no CEP. Este projeto utiliza como base a API do ViaCEP, que funciona simples e perfeitamente para a ocasião. Projeto feito no intuito de aprender Angular.',
    descriptionEn:
      'Online tool that allows users to check addresses based on the Brazilian postal code (CEP). This project uses the ViaCEP API, which works simply and perfectly for the occasion. Project made with the intention of learning Angular.',
    techs: [angular, sass, typescript],
  },
  {
    name: 'Coffee Delivery',
    nameEn: 'Coffee Delivery',
    img: coffee,
    href: 'https://coffee-delivery-boaventura.vercel.app/',
    description:
      'Um exemplo de loja online de café, utiliza uma Context para o armazenamento de itens adicionados no carrinho para compra futuramente. Projeto desenvolvido para compreender o funcionamento de Context no React.',
    descriptionEn:
      'An example of an online coffee shop, uses a Context for storing items added to the cart for future purchase. Project developed to understand how Context works in React.',
    techs: [react, sass, typescript],
  },
]
