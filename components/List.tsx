import { Todo } from 'interfaces';
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { todoListState } from 'store/atom';
import { computedTodoListState } from 'store/selector';

import Item from './Item';

function List() {
  const computedTodoList = useRecoilValue(computedTodoListState);
  const setTodoListState = useSetRecoilState(todoListState);

  const removeTodo = (selectedId: number) => {
    setTodoListState((prevTodoList) =>
      prevTodoList.filter(({ id }) => id !== selectedId),
    );
  };

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        // onClick={onToggleAllTodo}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {computedTodoList.map((todo: Todo, index: number) => (
          <Item key={index} todo={todo} removeTodo={removeTodo} />
        ))}
      </ul>
    </section>
  );
}

export default List;
