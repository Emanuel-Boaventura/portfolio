import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import { JetBrains_Mono } from 'next/font/google'

// const jetBrains = JetBrains_Mono({
//   subsets: ['latin'],
//   variable: '--font-jetBrains',
//   display: 'swap',
// })

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <main className={`${jetBrains.variable} font-jetBrains`}>
    <main>
      <Component {...pageProps} />
    </main>
  )
}
