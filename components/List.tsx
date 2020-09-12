import React from 'react';

import Item from './Item';
import { Todo } from '../interfaces';

type Props = {
  todoList: Todo[];
  toggleAllTodo: (isDone: boolean) => void;
  updateTodo: <
    T1 extends keyof Pick<Todo, 'text' | 'done'>,
    T2 extends T1 extends 'text' ? string : boolean
  >(param: {
    selectedId: number;
    prop: T1;
    value: T2;
  }) => void;
  removeTodo: (selectedId: number) => void;
};

function List({ todoList, updateTodo, toggleAllTodo, removeTodo }: Props) {
  const onToggleAllTodo = () => {
    const isSomeActiveTodo = todoList.some(({ done }) => !done);

    if (isSomeActiveTodo) {
      toggleAllTodo(true);

      return;
    }

    toggleAllTodo(false);
  };

  const onToggleTodo = (selectedId: number, isDone: boolean) => {
    updateTodo({
      selectedId,
      prop: 'done',
      value: isDone,
    });
  };

  const onUpdateTodo = (selectedId: number, text: string) => {
    updateTodo({
      selectedId,
      prop: 'text',
      value: text,
    });
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
        {todoList.map((todo, index) => (
          <Item
            key={index}
            todo={todo}
            removeTodo={removeTodo}
            toggleTodo={onToggleTodo}
            updateTodo={onUpdateTodo}
          />
        ))}
      </ul>
    </section>
  );
}

export default List;
