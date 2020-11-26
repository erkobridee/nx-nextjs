// it's not needed with React v17
// import React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { ReactComponent as NxLogo } from '../../public/nx-logo-white.svg';

import '../styles/global.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to nextjs!</title>
      </Head>
      <div className="app">
        <header className="flex">
          <NxLogo width="75" height="50" />
          <h1>Welcome to nextjs!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;