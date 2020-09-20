import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';

import useTodo from '@/hooks/useTodo';
import { todoCountState } from '@/store/selectors';

import FooterNavLink from './FooterNavLink';

function Footer() {
  const { asPath } = useRouter();
  const { removeCompletedTodos } = useTodo();
  const {
    active: activeTodoCount,
    completed: completedTodoCount,
  } = useRecoilValue(todoCountState);
  const todoCountInfo = useMemo(() => {
    const isSingularNoun = activeTodoCount === 1;

    return ` item${isSingularNoun ? '' : 's'} left`;
  }, [activeTodoCount]);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeTodoCount}</strong>
        <span>{todoCountInfo}</span>
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
        <button className="clear-completed" onClick={removeCompletedTodos}>
          Clear completed
        </button>
      )}
    </footer>
  );
}

export default Footer;
