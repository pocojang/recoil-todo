import React from 'react';

function Item() {
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>123</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" value="123" />
    </li>
  );
}

export default Item;
