import React from 'react';
import Head from 'next/head';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Codealo | Ideas para proyectos</title>
      <meta name="description" content="Una página creada por la comunidad de Codealo para ayudar a programadores a aprender, siguenos en IG como @codealo"></meta>
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/apple-touch-icon-144-precomposed.png" />
      <link rel="icon" type="image/png" href="favicon.png" />
      <script async defer data-domain="proyectos.codealo.dev" src="https://plausible.io/js/plausible.js"></script>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp