import { Todo } from 'interfaces';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { computedTodoListState } from 'store/selector';

import Item from './Item';

function List() {
  const computedTodoList = useRecoilValue(computedTodoListState);

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
          <Item key={index} todo={todo} />
        ))}
      </ul>
    </section>
  );
}

export default List;
