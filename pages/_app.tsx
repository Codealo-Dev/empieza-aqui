import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Codealo | Guía para empezar</title>
      <meta name="description" content="Una página creada por la comunidad de Codealo para ayudar a programadores a aprender, siguenos en IG como @codealo"></meta>
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/apple-touch-icon-144-precomposed.png" />
      <link rel="icon" type="image/png" href="favicon.png" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp