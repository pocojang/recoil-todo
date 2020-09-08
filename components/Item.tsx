import React from 'react';

import { Todo } from '../interfaces';

type Props = {
  todo: Todo;
  removeTodo: (selectedId: number) => void;
};

function Item({ todo: { id, text, done }, removeTodo }: Props) {
  const onRemoveTodo = () => {
    removeTodo(id);
  };

  return (
    <li className={done ? 'completed' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={done} />
        <label>{text}</label>
        <button className="destroy" onClick={onRemoveTodo}></button>
      </div>
      <input className="edit" value={text} />
    </li>
  );
}

export default Item;
