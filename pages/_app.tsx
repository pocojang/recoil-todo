import '../node_modules/todomvc-app-css/index.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useMemo, useState } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import List from '@/components/List';
import { sampleData } from '@/utils/sample-data';

import { Todo } from '../interfaces';

// TODO: 로직 분리하기 (contextAPI or redux or recoil)
export default function App({ Component, pageProps, router }: AppProps) {
  const [todoList, setTodoList] = useState<Todo[]>(sampleData);

  const computedTodoList = useMemo(() => {
    const computedStatus = router.asPath.split('/')[1];

    switch (computedStatus) {
      case 'active':
        return todoList.filter(({ done }) => !done);

      case 'completed':
        return todoList.filter(({ done }) => done);

      default:
        return todoList;
    }
  }, [router.asPath, todoList]);

  const createTodo = (text: string) => {
    setTodoList((prevTodoList) => {
      const newId = prevTodoList.length + 1;

      return [
        {
          id: newId,
          text: text,
          done: false,
        },
        ...prevTodoList,
      ];
    });
  };

  const removeTodo = (selectedId: number) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter(({ id }) => id !== selectedId),
    );
  };

  const removeTodos = () => {
    setTodoList((prevTodoList) => prevTodoList.filter(({ done }) => !done));
  };

  const updateTodo = <
    T1 extends keyof Pick<Todo, 'text' | 'done'>,
    T2 extends T1 extends 'text' ? string : boolean
  >({
    selectedId,
    prop,
    value,
  }: {
    selectedId: number;
    prop: T1;
    value: T2;
  }) => {
    setTodoList((prevTodoList) => {
      const selectedTodoIndex = prevTodoList.findIndex(
        ({ id }) => id === selectedId,
      );

      const newTodo = {
        ...prevTodoList[selectedTodoIndex],
        [prop]: value,
      };

      return [
        ...prevTodoList.slice(0, selectedTodoIndex),
        newTodo,
        ...prevTodoList.slice(selectedTodoIndex + 1),
      ];
    });
  };

  const toggleAllTodo = (isDone: boolean) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) => ({
        ...todo,
        done: isDone,
      })),
    );
  };

  return (
    <React.Fragment>
      <Head>
        <title>React • TodoMVC</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout>
        <Header createTodo={createTodo} />

        <Component {...pageProps}>
          <List
            todoList={computedTodoList}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
            toggleAllTodo={toggleAllTodo}
          />
        </Component>

        <Footer
          activeTodoCount={todoList.filter(({ done }) => !done).length}
          completedTodoCount={todoList.filter(({ done }) => done).length}
          removeTodos={removeTodos}
        />
      </Layout>
    </React.Fragment>
  );
}
