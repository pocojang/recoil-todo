import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from 'store/atom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import List from '@/components/List';

export default function AppContainer() {
  const todoList = useRecoilValue(todoListState);
  const isEmptyTodo = !todoList.length;

  if (isEmptyTodo) {
    return <Header />;
  }

  return (
    <React.Fragment>
      <Header />
      <List />
      <Footer />
    </React.Fragment>
  );
}
