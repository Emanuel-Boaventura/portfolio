import { LanguageContext } from '@/contexts/LanguageContext'
import { useLanguage } from '@/hooks/use-language'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useLanguage()
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Head>
        <title>Emanuel Boaventura Matos</title>
      </Head>

      <main>
        <Component {...pageProps} />
      </main>
    </LanguageContext.Provider>
  )
}
