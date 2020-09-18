import { Todo } from 'interfaces';
import React, { useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from 'store/atom';

function Header() {
  const inputRef = useRef<HTMLInputElement>(null);

  const setTodoListState = useSetRecoilState(todoListState);

  const createTodo = (text: string) => {
    setTodoListState((prevTodoList) => newTodoItem(prevTodoList, text));
  };

  const handleCreateTodo = ({ key }: React.KeyboardEvent) => {
    if (key !== 'Enter' || !inputRef.current) {
      return;
    }

    const inputRefCurr = inputRef.current;

    if (inputRefCurr.value) {
      createTodo(inputRefCurr.value);

      inputRefCurr.value = '';
      inputRefCurr.focus();
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyUp={handleCreateTodo}
        ref={inputRef}
      />
    </header>
  );
}

const newTodoItem = (prevTodoList: Todo[], text: string) => {
  const newId = Math.max(...prevTodoList.map(({ id }) => id)) + 1;

  return [
    {
      id: newId,
      text: text,
      done: false,
    },
    ...prevTodoList,
  ];
};

export default Header;
