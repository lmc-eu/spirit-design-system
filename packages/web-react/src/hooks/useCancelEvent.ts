import { MutableRefObject, useCallback, useEffect } from 'react';

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/cancel_event
 * @see https://jira.lmc.cz/browse/DS-1108
 * Here should be used `cancel` event instead of `close` event.
 * But when dialog is closed using `escape` key, `cancel` event is not fired.
 */
const EVENT_CANCEL = 'close';

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

    return () => undefined;
  }, [ref, handleCancel]);

  return handleCancel;
};
