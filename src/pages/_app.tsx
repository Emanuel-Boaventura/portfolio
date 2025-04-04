import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Emanuel Boaventura Matos</title>
      </Head>

      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}
