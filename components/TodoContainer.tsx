import React from 'react';
import { useRecoilValue } from 'recoil';

import Footer from '@/components/Footer';
import TodoList from '@/components/TodoList';
import { todoListState } from '@/store/atoms';

export default function TodoContainer() {
  const todoList = useRecoilValue(todoListState);
  const isEmptyTodo = !todoList || !todoList.length;

  if (isEmptyTodo) {
    return null;
  }

  return (
    <React.Fragment>
      <TodoList />
      <Footer />
    </React.Fragment>
  );
}
