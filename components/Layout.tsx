import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <React.Fragment>
      <section className="todoapp">{children}</section>

      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>
          Created by <a href="http://github.com/devJang/">devJang</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </React.Fragment>
  );
}

export default Layout;
