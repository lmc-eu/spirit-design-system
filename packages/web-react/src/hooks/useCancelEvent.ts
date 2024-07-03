import { useCallback, MutableRefObject } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

// TODO: Remove `isOpen` and listeners with `handleKeyDown` when Chrome fixes the bug,
// right now Chrome is bugged and sends un-cancelable events, so closing modal based on
// `cancel` event is not possible in Chrome.
// Firefox and Safari are working fine.
// @see: https://issues.chromium.org/issues/351867704

const EVENT_CANCEL = 'cancel';
const EVENT_KEYDOWN = 'keydown';
const EVENT_KEY = 'Escape';

export const useCancelEvent = (
  ref: MutableRefObject<HTMLElement | null>,
  callback: (event: Event) => void,
  closeOnEscapeKeyDown: boolean = true,
  isOpen: boolean = false,
) => {
  const handleCancel = useCallback(
    (event: Event) => {
      // Do nothing if there is no reference or no callback
      if (!ref || !callback) {
        return;
      }

      // Do nothing if the event was already processed.
      if (event.defaultPrevented) {
        return;
      }

      event.preventDefault();

      if (callback && closeOnEscapeKeyDown) {
        callback(event);
      }
    },
    [ref, callback, closeOnEscapeKeyDown],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === EVENT_KEY && !closeOnEscapeKeyDown && isOpen) {
        event.preventDefault();
      }
    },
    [closeOnEscapeKeyDown, isOpen],
  );

  useIsomorphicLayoutEffect(() => {
    const node = ref?.current;

    if (node) {
      node.addEventListener(EVENT_CANCEL, handleCancel);
      document.addEventListener(EVENT_KEYDOWN, handleKeyDown);

      return () => {
        node.removeEventListener(EVENT_CANCEL, handleCancel);
        document.removeEventListener(EVENT_KEYDOWN, handleKeyDown);
      };
    }

    return () => undefined;
  }, [ref, handleCancel]);

  return handleCancel;
};
