import React, { useState } from 'react';

import Header from '@/components/Header';
import List from '@/components/List';
import Footer from '@/components/Footer';

import { sampleData } from '@/utils/sample-data';
import { Todo } from '../interfaces';

function IndexPage() {
  const [todoList, setTodoList] = useState<Todo[]>(sampleData);

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
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) => ({
        ...todo,
        done: isDone,
      }));
    });
  };

  if (!todoList.length) {
    return <Header createTodo={createTodo} />;
  }

  return (
    <React.Fragment>
      <Header createTodo={createTodo} />
      <List
        todoList={todoList}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
        toggleAllTodo={toggleAllTodo}
      />
      <Footer
        activeTodoCount={todoList.filter(({ done }) => !done).length}
        completedTodoCount={todoList.filter(({ done }) => done).length}
        removeTodos={removeTodos}
      />
    </React.Fragment>
  );
}

export default IndexPage;
