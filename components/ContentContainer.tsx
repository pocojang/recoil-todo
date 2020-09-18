import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from 'store/atom';

import Footer from '@/components/Footer';
import List from '@/components/List';

export default function ContentContainer() {
  const todoList = useRecoilValue(todoListState);
  const isEmptyTodo = !todoList.length;

  if (isEmptyTodo) {
    return null;
  }

  return (
    <React.Fragment>
      <List />
      <Footer />
    </React.Fragment>
  );
}
