import React from 'react';

import Item from './Item';

function List() {
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all" />
      <ul className="todo-list">
        {[1, 2, 3, 4].map((_, i) => (
          <Item key={i} />
        ))}
      </ul>
    </section>
  );
}

export default List;
