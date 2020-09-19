import { atom } from 'recoil';

import { sampleData, sampleFilterData } from '@/utils/sample-data';

const todoListState = atom({
  key: 'todoListState',
  default: sampleData,
});

const filterState = atom({
  key: 'filterState',
  default: sampleFilterData.all,
});

export { todoListState, filterState };
