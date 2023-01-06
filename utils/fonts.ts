import { Roboto, Rubik_Mono_One } from '@next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-roboto',
});


export const rubikMono = Rubik_Mono_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-rubik',
});