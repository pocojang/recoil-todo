export type PickPropType<TObj, TProp extends keyof TObj> = TObj[TProp];

export type TodoStatus = typeof TodoFilter[keyof typeof TodoFilter] | string;

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export enum TodoFilter {
  all = '/',
  active = '/active',
  completed = '/completed',
}
