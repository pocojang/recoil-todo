import React, { useState } from 'react';

import Header from '../components/Header';
import List from '../components/List';
import Footer from '../components/Footer';

import { sampleData } from '../utils/sample-data';
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
        toggleAllTodo={toggleAllTodo}
        removeTodo={removeTodo}
      />
      <Footer activeTodoCount={todoList.filter(({ done }) => !done).length} />
    </React.Fragment>
  );
}

export default IndexPage;
