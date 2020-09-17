import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { todoListState } from 'store/atom';
import { computedTodoListState, todoCountState } from 'store/selector';

import FooterNavLink from './FooterNavLink';

function Footer() {
  const { asPath } = useRouter();
  const {
    active: activeTodoCount,
    completed: completedTodoCount,
  } = useRecoilValue(todoCountState);
  const setTodoListState = useSetRecoilState(todoListState);
  const setComputedFilter = useSetRecoilState(computedTodoListState);

  const isPluralNouns = activeTodoCount !== 1;

  const removeTodos = () => {
    setTodoListState((prevTodoList) =>
      prevTodoList.filter(({ done }) => !done),
    );
  };

  useEffect(() => {
    setComputedFilter(asPath);
  }, [asPath, setComputedFilter]);

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
