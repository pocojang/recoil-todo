import React, { useRef } from 'react';

type Props = {
  createTodo: (text: string) => void;
};

function Header({ createTodo }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onCreateTodo = ({ key }: React.KeyboardEvent) => {
    if (key !== 'Enter' || !inputRef.current) {
      return;
    }

    const inputRefCurr = inputRef.current;

    if (inputRefCurr) {
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
        onKeyUp={onCreateTodo}
        ref={inputRef}
      />
    </header>
  );
}

export default Header;
