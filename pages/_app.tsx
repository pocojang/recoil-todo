import '../node_modules/todomvc-app-css/index.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { MutableSnapshot, RecoilRoot } from 'recoil';

import ContentContainer from '@/components/ContentContainer';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import { todoListState } from '@/store/atoms';
import { RecoilTransactionObserver } from '@/store/snapshots';

export default function App({ Component, pageProps }: AppProps) {
  const initializeState = ({ set }: MutableSnapshot) => {
    if (!process.browser) {
      return;
    }

    try {
      const recoilTodoJSON = window.localStorage.getItem('recoil-todo');
      const initValue = recoilTodoJSON ? JSON.parse(recoilTodoJSON).value : [];

      set(todoListState, initValue);
    } catch (error) {
      set(todoListState, []);
    }
  };

  // Error Warning: Expected server HTML to contain a matching <section> in <section>.
  return (
    <React.Fragment>
      <Head>
        <title>React • TodoMVC</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout>
        <RecoilRoot initializeState={initializeState}>
          <RecoilTransactionObserver />
          <Header />
          <Component {...pageProps}>
            <ContentContainer />
          </Component>
        </RecoilRoot>
      </Layout>
    </React.Fragment>
  );
}
