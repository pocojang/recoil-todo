import { Todo } from 'interfaces';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListState } from 'store/atoms';
import { computedTodoListState } from 'store/selectors';

import Item from './Item';

function List() {
  const { asPath } = useRouter();

  const computedTodoList = useRecoilValue(computedTodoListState(asPath));
  const [originTodoList, setOriginTodoList] = useRecoilState(todoListState);

  const onToggleAllTodo = () => {
    const isSomeCompletedTodo = originTodoList.some(({ done }) => done);

    setOriginTodoList((prevTodoList) =>
      prevTodoList.map((todo) => ({
        ...todo,
        done: !isSomeCompletedTodo,
      })),
    );
  };

  const removeTodo = (selectedId: number) => {
    setOriginTodoList((prevTodoList) =>
      prevTodoList.filter(({ id }) => id !== selectedId),
    );
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
    setOriginTodoList((prevTodoList) => {
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
