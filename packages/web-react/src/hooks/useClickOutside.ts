import { useEffect, useCallback, MutableRefObject } from 'react';

export interface UseClickOutsideProps {
  ref: MutableRefObject<HTMLElement | null>;
  callback?: (event: Event) => void;
}

export const useClickOutside = ({ ref, callback }: UseClickOutsideProps): void => {
  const clickHandler = useCallback(
    (event: Event) => {
      if (ref.current && !ref.current.contains(event?.target as Node) && callback) {
        callback(event);
      }
    },
    [ref, callback],
  );

  useEffect(() => {
    document.addEventListener('click', clickHandler, true);

    return () => document.removeEventListener('click', clickHandler, true);
  }, [clickHandler]);
};
