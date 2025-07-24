import { MutableRefObject, TransitionEvent, useCallback, useEffect } from 'react';
import { CLASS_NAME_OPEN } from '../../constants';
import { useScrollControl } from '../../hooks';

export const useDialog = (ref: MutableRefObject<HTMLDialogElement | null>, isOpen: boolean) => {
  const handleTransitionEnd = useCallback(
    (event: TransitionEvent<HTMLDialogElement>) => {
      const dialogNode = ref?.current;

      // Only handle transition end if it's for the dialog element itself (not children)
      if (dialogNode && event.target === dialogNode && !isOpen && dialogNode.open && dialogNode.close) {
        // Dialog transition has ended, now close it
        dialogNode.close();
      }
    },
    [isOpen, ref],
  );

  useScrollControl(ref, isOpen);

  useEffect(() => {
    const dialogNode = ref?.current;

    if (dialogNode) {
      if (isOpen && !dialogNode.open && dialogNode.showModal) {
        dialogNode.showModal();
        // Add visual state class to display dialog in the viewport
        if (dialogNode.classList) {
          dialogNode.classList.add(CLASS_NAME_OPEN);
        }
      } else if (!isOpen && dialogNode.open) {
        // Remove visual state class first to trigger transition
        if (dialogNode.classList) {
          dialogNode.classList.remove(CLASS_NAME_OPEN);
        }
        // The actual close will happen in handleTransitionEnd
      }
    }
  }, [isOpen, ref]);

  const openDialog = () => {
    if (ref?.current && !ref.current.open) {
      ref.current.showModal();
      if (ref.current.classList) {
        ref.current.classList.add(CLASS_NAME_OPEN);
      }
    }
  };

  const closeDialog = () => {
    const dialogNode = ref?.current;
    if (dialogNode && dialogNode.open) {
      // Remove visual state class first to trigger transition
      if (dialogNode.classList) {
        dialogNode.classList.remove(CLASS_NAME_OPEN);
      }
      // The actual close will happen in handleTransitionEnd
    }
  };

  return {
    openDialog,
    closeDialog,
    onTransitionEnd: handleTransitionEnd,
  };
};
