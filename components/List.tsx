import { Todo } from 'interfaces';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { computedTodoListState } from 'store/selectors';

import useTodo from '@/hooks/useTodo';

import Item from './Item';

function List() {
  const { asPath } = useRouter();
  const { updateTodo, updateAllTodo, removeTodo } = useTodo();

  const computedTodoList = useRecoilValue(computedTodoListState(asPath));

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
        onClick={updateAllTodo}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {computedTodoList.map((todo: Todo, index: number) => (
          <Item
            key={index}
            todo={todo}
            updateTodo={onUpdateTodo}
            toggleTodo={onToggleTodo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </section>
  );
}

export default List;
