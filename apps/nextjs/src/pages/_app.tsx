import React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { ReactComponent as NxLogo } from '@nx-nextjs/shared/assets/images/nx-logo-white.svg';

import '@nx-nextjs/shared/assets/styles/fonts.scss';
import '@nx-nextjs/shared/assets/styles/tailwind.scss';
import '@nx-nextjs/shared/assets/styles/global.scss';

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
