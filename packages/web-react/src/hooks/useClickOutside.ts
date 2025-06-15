import { MutableRefObject, useCallback, useRef } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export interface UseClickOutsideProps {
  ref: MutableRefObject<HTMLElement | null>;
  callback?: (event: Event) => void;
}

export const useClickOutside = ({ ref, callback }: UseClickOutsideProps): void => {
  const stateRef = useRef<{
    mouseDownTarget: EventTarget | null;
  }>({
    mouseDownTarget: null,
  });

  const clickHandler = useCallback(
    (event: Event) => {
      const state = stateRef.current;
      // Do nothing (do not close the Dialog) if
      if (
        // there is no reference
        !ref ||
        // or no callback
        !callback ||
        // or the event was already processed
        event.defaultPrevented ||
        // or the click (mouse down) started inside the Dialog
        (ref.current && ref.current.contains(state.mouseDownTarget as Node))
      ) {
        return;
      }

      // we can call callback only when
      if (
        // reference to current element exists
        ref.current &&
        // and the user not clicked into the container,
        // e. g. the user clicked outside of the Dialog (click on backdrop)
        !ref.current.contains(event?.target as Node) &&
        // and callback should exits, of course
        callback
      ) {
        callback(event);
      }
    },
    [ref, callback],
  );

  const onMouseDown = (event: Event) => {
    stateRef.current.mouseDownTarget = event.target;
  };

  useIsomorphicLayoutEffect(() => {
    document.addEventListener('mousedown', onMouseDown, { capture: true });
    document.addEventListener('click', clickHandler, { capture: true });

    return () => {
      document.removeEventListener('mousedown', onMouseDown, { capture: true });
      document.removeEventListener('click', clickHandler, { capture: true });
    };
  }, [clickHandler]);
};
