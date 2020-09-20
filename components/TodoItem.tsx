import React, { useEffect, useRef, useState } from 'react';

import useOutsideClick from '@/hooks/useOutsideClick';

import { PickPropType, Todo } from '../interfaces';

type Props = {
  todo: Todo;
  updateTodo: (
    id: PickPropType<Todo, 'id'>,
    text: PickPropType<Todo, 'text'>,
  ) => void;
  toggleTodo: (
    id: PickPropType<Todo, 'id'>,
    isDone: PickPropType<Todo, 'done'>,
  ) => void;
  removeTodo: (id: PickPropType<Todo, 'id'>) => void;
};

function Item({
  todo: { id, text, done },
  updateTodo,
  toggleTodo,
  removeTodo,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [editMode, setEditMode] = useState<boolean>(false);

  const todoClassName = `${done ? 'completed' : ''} ${
    editMode ? 'editing' : ''
  }`;

  const toggleEditMode = () => {
    setEditMode((isEdit) => !isEdit);

    const inputRefCurr = inputRef.current;

    if (inputRefCurr) {
      inputRefCurr.focus();
    }
  };

  const onEdit = ({ key }: React.KeyboardEvent) => {
    const inputRefCurr = inputRef.current;

    if ((key === 'Escape' || key === 'Enter') && editMode) {
      setEditMode(false);
    }

    if (key !== 'Enter' || !inputRefCurr) {
      return;
    }

    if (!inputRefCurr.value) {
      alert('내용을 입력해주세요!');

      return;
    }

    if (inputRefCurr.value !== text) {
      updateTodo(id, inputRefCurr.value);
    }
  };

  const onRemoveTodo = () => {
    removeTodo(id);
  };

  const onToggleTodo = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    toggleTodo(id, target.checked);
  };

  useOutsideClick(inputRef, () => {
    setEditMode(false);

    if (inputRef.current) {
      inputRef.current.value = text;
    }
  });

  useEffect(() => {
    if (!editMode) {
      return;
    }

    inputRef.current?.focus();
    inputRef.current?.setSelectionRange(text.length, text.length);
  }, [editMode, text]);

  return (
    <li className={todoClassName}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={done}
          onChange={onToggleTodo}
        />
        <label onDoubleClick={toggleEditMode}>{text}</label>
        <button className="destroy" onClick={onRemoveTodo}></button>
      </div>
      <input
        className="edit"
        ref={inputRef}
        defaultValue={text}
        onKeyUp={onEdit}
      />
    </li>
  );
}

export default Item;
