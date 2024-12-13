import angular from '@/public/techs/angular.png'
import css from '@/public/techs/css.png'
import html from '@/public/techs/html.png'
import next from '@/public/techs/next.png'
import node from '@/public/techs/node.svg'
import react from '@/public/techs/react.png'
import sass from '@/public/techs/sass.png'
import tailwind from '@/public/techs/tailwind.png'
import typescript from '@/public/techs/typescript.svg'
import vue from '@/public/techs/vue.png'
import { StaticImageData } from 'next/image'

export interface ITechs {
  img: StaticImageData
  alt: string
}

export const techs: Record<string, ITechs> = {
  angular: {
    img: angular,
    alt: 'Angular',
  },
  css: {
    img: css,
    alt: 'CSS',
  },
  html: {
    img: html,
    alt: 'HTML',
  },
  next: {
    img: next,
    alt: 'Next.JS',
  },
  node: {
    img: node,
    alt: 'Node.JS',
  },
  react: {
    img: react,
    alt: 'React.JS',
  },
  sass: {
    img: sass,
    alt: 'Sass',
  },
  tailwind: {
    img: tailwind,
    alt: 'Tailwind',
  },
  typescript: {
    img: typescript,
    alt: 'TypeScript',
  },
  vue: {
    img: vue,
    alt: 'Vue.JS',
  },
}
