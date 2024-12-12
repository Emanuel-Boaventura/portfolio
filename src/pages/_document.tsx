import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&family=Roboto:wght@900&display=swap'
          rel='stylesheet'
        />

        <link rel='icon' type='image/png' href='/favicon.png' />

        <meta property='og:locale' content='pt_BR' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Emanuel-Boaventura!' />
        <meta
          property='og:description'
          content='Portfolio de Emanuel Boaventura Matos.'
        />
        <meta property='og:url' content='https://emanuelboaventura.com/' />
        <meta property='og:site_name' content='Emanuel-Boaventura' />
        <meta
          name='description'
          content='Portfolio de Emanuel Boaventura Matos.'
        />

        <meta
          property='og:image'
          itemProp='image'
          content='https://www.indique.ai/my-photos/about.png'
        />
        <meta property='og:image:width' content='512' />
        <meta property='og:image:height' content='512' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:alt' content='Emanuel Boaventura Matos' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
