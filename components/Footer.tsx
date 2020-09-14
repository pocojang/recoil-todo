import { useRouter } from 'next/router';
import React from 'react';

import FooterNavLink from './FooterNavLink';

type Props = {
  activeTodoCount: number;
  completedTodoCount: number;
  removeTodos: () => void;
};

// TODO: active style
function Footer({ activeTodoCount, completedTodoCount, removeTodos }: Props) {
  const { asPath } = useRouter();

  const isPluralNouns = activeTodoCount !== 1;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeTodoCount}</strong>
        <span> item{isPluralNouns && 's'} left</span>
      </span>

      <ul className="filters">
        <FooterNavLink currentPath={asPath} asPath="/" href="/">
          All
        </FooterNavLink>
        <FooterNavLink currentPath={asPath} asPath="/active" href="/[status]">
          Active
        </FooterNavLink>
        <FooterNavLink
          currentPath={asPath}
          asPath="/completed"
          href="/[status]"
        >
          Completed
        </FooterNavLink>
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
