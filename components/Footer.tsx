import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>3</strong>
        <span> </span>
        <span>items</span>
        <span> left</span>
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
