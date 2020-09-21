import { Todo } from 'interfaces';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilValue } from 'recoil';

import useTodo from '@/hooks/useTodo';
import { computedTodoListState } from '@/store/selectors';

import TodoItem from './TodoItem';

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

  const onToggleAllTodo = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    updateAllTodo({
      prop: 'done',
      value: target.checked,
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
        onChange={onToggleAllTodo}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {computedTodoList.map((todo: Todo, index: number) => (
          <TodoItem
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
