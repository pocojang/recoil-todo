import React from 'react';

import Item from './Item';
import { Todo } from '../interfaces';

type Props = {
  todoList: Todo[];
  toggleAllTodo: (isDone: boolean) => void;
  removeTodo: (selectedId: number) => void;
};

function List({ todoList, toggleAllTodo, removeTodo }: Props) {
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
        {todoList.map((todo) => (
          <Item key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))}
      </ul>
    </section>
  );
}

export default List;
