import React from 'react';

import Item from './Item';
import { Todo } from '../interfaces';

type Props = {
  todoList: Todo[];
};

function List({ todoList }: Props) {
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
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
