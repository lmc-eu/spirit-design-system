import { useEffect, MutableRefObject } from 'react';

export interface UseClickOutsideProps {
  ref: MutableRefObject<HTMLElement | undefined>;
  callback?: (event: Event) => void;
}

export const useClickOutside = ({ ref, callback }: UseClickOutsideProps): void => {
  const clickHandler = (event: Event) => {
    if (!ref?.current?.contains(event?.target as Node) && callback) {
      callback(event);
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickHandler);

    return () => document.removeEventListener('click', clickHandler);
    /**
     * This condition is here because I need a useEffect trigger for the entire scope and on
     * the contrary I don't need to add the clickHandler dependency because it is a function, and it will not change.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
