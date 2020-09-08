import React from 'react';

import { Todo } from '../interfaces';

type Props = Pick<Todo, 'text' | 'done'>;

function Item({ text, done }: Props) {
  return (
    <li className={done ? 'completed' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={done} />
        <label>{text}</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" value={text} />
    </li>
  );
}

export default Item;
