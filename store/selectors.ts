import { TodoFilter } from 'interfaces';
import { selector, selectorFamily } from 'recoil';

import { todoListState } from './atoms';

type AsPath = typeof TodoFilter[keyof typeof TodoFilter] | string;

const computedTodoListState = selectorFamily({
  key: 'computedTodoListState',
  get: (asPath: AsPath) => ({ get }) => {
    const todoList = get(todoListState);

    switch (asPath) {
      case TodoFilter.active:
        return todoList.filter(({ done }) => !done);
      case TodoFilter.completed:
        return todoList.filter(({ done }) => done);
      default:
        return todoList;
    }
  },
});

const todoCountState = selector({
  key: 'todoCountState',
  get: ({ get }) => {
    const todoList = get(todoListState);

    return {
      all: todoList.length,
      ...todoList.reduce(
        ({ active, completed }, { done }) => ({
          active: done ? active : active + 1,
          completed: done ? completed + 1 : completed,
        }),
        { active: 0, completed: 0 },
      ),
    };
  },
});

export { computedTodoListState, todoCountState };
