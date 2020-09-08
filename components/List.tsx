import React from 'react';

import Item from './Item';
import { Todo } from '../interfaces';

type Props = {
  todoList: Todo[];
  toggleAllTodo: (isDone: boolean) => void;
};

function List({ todoList, toggleAllTodo }: Props) {
  const onToggleAllTodo = () => {
    const isSomeActiveTodo = todoList.some(({ done }) => !done);

    if (isSomeActiveTodo) {
      toggleAllTodo(true);

      return;
    }

    toggleAllTodo(false);
  };

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onClick={onToggleAllTodo}
      />
      <label htmlFor="toggle-all" />
      <ul className="todo-list">
        {todoList.map(({ id, text, done }) => (
          <Item key={id} text={text} done={done} />
        ))}
      </ul>
    </section>
  );
}

export default List;
