import { PickPropType, Todo } from 'interfaces';
import { useRecoilState } from 'recoil';
import { todoListState } from 'store/atoms';

function useTodo() {
  const [originTodoList, setOriginTodoList] = useRecoilState(todoListState);

  const createTodo = (text: PickPropType<Todo, 'text'>) => {
    setOriginTodoList((prevTodoList: Todo[]) => {
      const newId = Math.max(...prevTodoList.map(({ id }) => id)) + 1;

      return [
        ...prevTodoList,
        {
          id: newId,
          text: text,
          done: false,
        },
      ];
    });
  };

  const updateTodo = <
    T1 extends keyof Pick<Todo, 'text' | 'done'>,
    T2 extends T1 extends 'text' ? string : boolean
  >({
    selectedId,
    prop,
    value,
  }: {
    selectedId: number;
    prop: T1;
    value: T2;
  }) => {
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

  const updateAllTodo = () => {
    const isSomeCompletedTodo = originTodoList.some(({ done }) => done);

    setOriginTodoList((prevTodoList) =>
      prevTodoList.map((todo) => ({
        ...todo,
        done: !isSomeCompletedTodo,
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

export default useTodo;
