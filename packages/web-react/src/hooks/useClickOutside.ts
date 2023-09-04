import { useLayoutEffect, useCallback, MutableRefObject } from 'react';

export interface UseClickOutsideProps {
  ref: MutableRefObject<HTMLElement | null>;
  callback?: (event: Event) => void;
}

export const useClickOutside = ({ ref, callback }: UseClickOutsideProps): void => {
  const clickHandler = useCallback(
    (event: Event) => {
      // Do nothing if there is no reference or no callback
      if (!ref || !callback) {
        return;
      }

      // Do nothing if the event was already processed.
      if (event.defaultPrevented) {
        return;
      }

      // we can call callback only
      if (
        // reference to current element exists
        ref.current &&
        // and the use the not clicked into the container,
        // e. g. the user clicked outside of the Dialog (click on backdrop)
        !ref.current.contains(event?.target as Node) &&
        // and when the click was triggered inside of the element's parent
        ref.current.parentNode?.contains(event?.target as Node) &&
        // and callback should exits, of course
        callback
      ) {
        callback(event);
      }
    },
    [ref, callback],
  );

  useLayoutEffect(() => {
    document.addEventListener('click', clickHandler, { capture: true });

    return () => document.removeEventListener('click', clickHandler, { capture: true });
  }, [clickHandler]);
};
