import '../node_modules/todomvc-app-css/index.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { RecoilRoot } from 'recoil';

import ContentContainer from '@/components/ContentContainer';
import Header from '@/components/Header';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>React • TodoMVC</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout>
        <RecoilRoot>
          <Header />
          <Component {...pageProps}>
            <ContentContainer />
          </Component>
        </RecoilRoot>
      </Layout>
    </React.Fragment>
  );
}
