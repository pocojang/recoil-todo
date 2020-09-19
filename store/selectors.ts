import { selector, selectorFamily } from 'recoil';

import { sampleFilterData } from '@/utils/sample-data';

import { todoListState } from './atoms';

type AsPath = typeof sampleFilterData[keyof typeof sampleFilterData] | string;

const computedTodoListState = selectorFamily({
  key: 'computedTodoListState',
  get: (asPath: AsPath) => ({ get }) => {
    const todoList = get(todoListState);

    switch (asPath) {
      case sampleFilterData.active:
        return todoList.filter(({ done }) => !done);
      case sampleFilterData.completed:
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
