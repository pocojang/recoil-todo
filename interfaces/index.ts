export type PickPropType<TObj, TProp extends keyof TObj> = TObj[TProp];

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}
