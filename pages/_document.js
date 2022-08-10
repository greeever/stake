import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className="dark" lang="en">
         <Head>
        {/* <title>Chase Finance</title> */}
            <meta name="description" content="Chase Fintoken. Digital Assets Portfolio Manager" />
            <link rel="icon" href="/logo.svg" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Ramaraja&display=swap" rel="stylesheet" />
    </Head>
        <body className="bg-gray-900 text-white focus:outline-none outline-hidden font-serif">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument