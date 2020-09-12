import { Todo } from '../interfaces';

// TODO: persist data (browser storage or API)
export const sampleData: Todo[] = [
  { id: 0, text: '그저께 한 일', done: true },
  { id: 1, text: '어제 한 일', done: true },
  { id: 2, text: '오늘 할 일', done: false },
  { id: 3, text: '내일 할 일', done: false },
  { id: 4, text: '내일 모레 할 일', done: false },
  { id: 5, text: '다음 주 할 일', done: false },
  { id: 6, text: '다음 달 할 일', done: false },
  { id: 7, text: '언젠가는 할 일', done: false },
];
