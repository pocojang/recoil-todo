import { useEffect } from 'react';

/**
 * TODO: nullish coalescing and optional chaining
 *
 * @see https://github.com/vercel/next.js/issues/17273
 */
function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  callback: (...args: any[]) => void,
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
