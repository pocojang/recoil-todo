import { useEffect } from 'react';

function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  callback: () => any,
): void {
  const handleClick = (e: MouseEvent) => {
    if (e.target instanceof Element) {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
}

export default useOutsideClick;
