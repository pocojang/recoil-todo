import React from 'react';

import Link from 'next/link';

type Props = {
  activeTodoCount: number;
  completedTodoCount: number;
  removeTodos: () => void;
};

// TODO: active style
function Footer({ activeTodoCount, completedTodoCount, removeTodos }: Props) {
  const isPluralNouns = activeTodoCount !== 1;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeTodoCount}</strong>
        <span> item{isPluralNouns && 's'} left</span>
      </span>
      <ul className="filters">
        <Link href="/" as="/">
          <li>
            <a className="">All</a>
          </li>
        </Link>
        <span></span>
        <Link href="/[status]" as="/active">
          <li>
            <a className="selected">Active</a>
          </li>
        </Link>
        <span> </span>
        <Link href="/[status]" as="/completed">
          <li>
            <a>Completed</a>
          </li>
        </Link>
      </ul>
      {!!completedTodoCount && (
        <button className="clear-completed" onClick={removeTodos}>
          Clear completed
        </button>
      )}
    </footer>
  );
}

export default Footer;
