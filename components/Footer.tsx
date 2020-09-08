import React from 'react';

type Props = {
  activeTodoCount: number;
};

function Footer({ activeTodoCount }: Props) {
  const isPluralNouns = activeTodoCount !== 1;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeTodoCount}</strong>
        <span> item{isPluralNouns && 's'} left</span>
      </span>
      <ul className="filters">
        <li>
          <a href="#/" className="">
            All
          </a>
        </li>
        <span></span>
        <li>
          <a href="#/active" className="selected">
            Active
          </a>
        </li>
        <span> </span>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
