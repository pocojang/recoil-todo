import { PickPropType, Todo } from 'interfaces';
import { useSetRecoilState } from 'recoil';

import { todoListState } from '@/store/atoms';

type UpdateTodo<P, V> = {
  selectedId?: number;
  prop: P;
  value: V;
};

function useTodo() {
  const setOriginTodoList = useSetRecoilState(todoListState);

  const createTodo = (text: PickPropType<Todo, 'text'>) => {
    setOriginTodoList((prevTodoList) => {
      const isExistTodoList = prevTodoList?.length;

      const newTodo = {
        id: isExistTodoList ? getNewIdByList(prevTodoList) : 0,
        text: text,
        done: false,
      };

      return [...prevTodoList, newTodo];
    });
  };

  const updateTodo = <
    T1 extends keyof Pick<Todo, 'text' | 'done'>,
    T2 extends T1 extends 'text' ? string : boolean
  >({
    selectedId,
    prop,
    value,
  }: UpdateTodo<T1, T2>) => {
    setOriginTodoList((prevTodoList) => {
      const selectedTodoIndex = prevTodoList.findIndex(
        ({ id }) => id === selectedId,
      );

      const newTodo = {
        ...prevTodoList[selectedTodoIndex],
        [prop]: value,
      };

      return [
        ...prevTodoList.slice(0, selectedTodoIndex),
        newTodo,
        ...prevTodoList.slice(selectedTodoIndex + 1),
      ];
    });
  };

  const updateAllTodo = <
    T1 extends keyof Pick<Todo, 'text' | 'done'>,
    T2 extends T1 extends 'text' ? string : boolean
  >({
    prop,
    value,
  }: UpdateTodo<T1, T2>) => {
    setOriginTodoList((prevTodoList) =>
      prevTodoList.map((todo) => ({
        ...todo,
        [prop]: value,
      })),
    );
  };

  const removeTodo = (selectedId: PickPropType<Todo, 'id'>) => {
    setOriginTodoList((prevTodoList) =>
      prevTodoList.filter(({ id }) => id !== selectedId),
    );
  };

  const removeCompletedTodos = () => {
    setOriginTodoList((prevTodoList) =>
      prevTodoList.filter(({ done }) => !done),
    );
  };

  return {
    createTodo,
    updateTodo,
    updateAllTodo,
    removeTodo,
    removeCompletedTodos,
  };
}

const getNewIdByList = <T extends { id: number }>(list: T[]) =>
  Math.max(...list.map(({ id }) => id)) + 1;

export default useTodo;
