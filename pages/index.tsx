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

  return (
    <React.Fragment>
      <Header createTodo={createTodo} />
      <List />
      <Footer />
    </React.Fragment>
  );
}

export default IndexPage;
