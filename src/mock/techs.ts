import adonis from '@/public/techs/adonis.svg'
import angular from '@/public/techs/angular.png'
import css from '@/public/techs/css.png'
import html from '@/public/techs/html.png'
import mysql from '@/public/techs/mysql.png'
import nest from '@/public/techs/nest.png'
import next from '@/public/techs/next.png'
import node from '@/public/techs/node.svg'
import postgresql from '@/public/techs/postgresql.png'
import react from '@/public/techs/react.png'
import sass from '@/public/techs/sass.png'
import sqlite from '@/public/techs/sqlite.png'
import tailwind from '@/public/techs/tailwind.png'
import typescript from '@/public/techs/typescript.svg'
import vue from '@/public/techs/vue.png'
import { StaticImageData } from 'next/image'

export interface ITech {
  img: StaticImageData
  alt: string
}

const createTechs = <T extends Record<string, ITech>>(techs: T) => techs

export const techs = createTechs({
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
  sqlite: {
    img: sqlite,
    alt: 'SQLite',
  },
  nest: {
    img: nest,
    alt: 'NestJS',
  },
  postgresql: {
    img: postgresql,
    alt: 'PostgreSQL',
  },
  mysql: {
    img: mysql,
    alt: 'MySQL',
  },
  adonis: {
    img: adonis,
    alt: 'AdonisJS',
  },
})
