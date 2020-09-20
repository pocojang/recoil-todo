import { Todo, TodoFilter, TodoStatus } from 'interfaces';
import { atom } from 'recoil';

const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
});

const filterState = atom<TodoStatus>({
  key: 'filterState',
  default: TodoFilter.all,
});

export { todoListState, filterState };
