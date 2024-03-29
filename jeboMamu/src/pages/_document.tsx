import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
