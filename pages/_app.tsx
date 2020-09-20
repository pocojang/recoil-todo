import '../node_modules/todomvc-app-css/index.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { MutableSnapshot, RecoilRoot } from 'recoil';

import Header from '@/components/Header';
import Layout from '@/components/Layout';
import TodoContainer from '@/components/TodoContainer';
import { todoListState } from '@/store/atoms';
import { RecoilTransactionObserver } from '@/store/snapshots';

export default function App({ Component, pageProps }: AppProps) {
  // TODO: isolate local storage logic to hooks or util
  const initializeState = ({ set }: MutableSnapshot) => {
    if (!process.browser) {
      return;
    }

    try {
      const recoilTodoJSON = window.localStorage.getItem('recoil-todo');
      const initValue = recoilTodoJSON ? JSON.parse(recoilTodoJSON).value : [];

      if (!Array.isArray(initValue)) {
        throw new Error('Invalid Local Storage Data');
      }

      set(todoListState, initValue);
    } catch (error) {
      set(todoListState, []);

      window.localStorage.setItem('recoil-todo', JSON.stringify([]));
      console.error(error);
    }
  };

  // TODO: Error Warning: Expected server HTML to contain a matching <section> in <section>.
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
            <TodoContainer />
          </Component>
        </RecoilRoot>
      </Layout>
    </React.Fragment>
  );
}
