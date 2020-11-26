import React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { ReactComponent as NxLogo } from '../../public/nx-logo-white.svg';

import '../styles/tailwind.scss';
import '../styles/global.scss';

export const CustomApp: React.FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}) => (
  <>
    <Head>
      <title>Welcome to nextjs!</title>
    </Head>
    <div className="app">
      <header className="flex">
        <NxLogo width="75" height="50" />
        <h1 className="text-red-500">Welcome to nextjs!</h1>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  </>
);

export default CustomApp;
