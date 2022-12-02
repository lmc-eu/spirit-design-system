import { useCallback, useEffect, MutableRefObject } from 'react';

const EVENT_CANCEL = 'cancel';

export const useCancelEvent = (ref: MutableRefObject<HTMLElement | null>, callback: (event: Event) => void) => {
  const handleCancel = useCallback(
    (event: Event) => {
      event.preventDefault();

      callback(event);
    },
    [callback],
  );

  useEffect(() => {
    const node = ref?.current;

    if (node) {
      node.addEventListener(EVENT_CANCEL, handleCancel);

      return () => {
        node.removeEventListener(EVENT_CANCEL, handleCancel);
      };
    }
  }, [ref, handleCancel]);

  return handleCancel;
};
