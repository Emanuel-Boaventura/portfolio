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

        {/* HTML Meta Tags  */}
        <meta
          name='description'
          content='Portfolio de Emanuel Boaventura Matos.'
        />

        {/* Facebook Meta Tags  */}
        <meta property='og:url' content='https://emanuelboaventura.com/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Emanuel Boaventura Matos' />
        <meta
          property='og:description'
          content='Portfolio de Emanuel Boaventura Matos.'
        />
        <meta
          property='og:image'
          content='https://emanuelboaventura.com/og-image.png'
        />

        {/* Twitter Meta Tags  */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='emanuelboaventura.com' />
        <meta property='twitter:url' content='https://emanuelboaventura.com/' />
        <meta name='twitter:title' content='Emanuel Boaventura Matos' />
        <meta
          name='twitter:description'
          content='Portfolio de Emanuel Boaventura Matos.'
        />
        <meta
          name='twitter:image'
          content='https://emanuelboaventura.com/og-image.png'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
