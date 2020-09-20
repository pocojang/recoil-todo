import { TodoFilter } from 'interfaces';
import { atom } from 'recoil';

const todoListState = atom({
  key: 'todoListState',
  default: [],
});

const filterState = atom({
  key: 'filterState',
  default: TodoFilter.all,
});

export { todoListState, filterState };
