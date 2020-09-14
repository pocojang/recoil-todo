import { selector } from 'recoil';

import { sampleFilterData } from '@/utils/sample-data';

import { filterState, todoListState } from './atom';

const computedTodoListState = selector({
  key: 'computedTodoListState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const filter = get(filterState);

    switch (filter) {
      case sampleFilterData.active:
        return todoList.filter(({ done }) => !done);
      case sampleFilterData.completed:
        return todoList.filter(({ done }) => done);
      default:
        return todoList;
    }
  },
  set: ({ set }, newValue: any) => set(filterState, newValue),
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
