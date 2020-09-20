import React, { useRef } from 'react';

import useTodo from '@/hooks/useTodo';

function Header() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { createTodo } = useTodo();

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

export default Header;
