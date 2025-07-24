import { useEffect, MutableRefObject } from 'react';
import { useScrollControl } from '../../hooks';
import { waitForTransitionEnd } from '../../utils';

export const useDialog = (ref: MutableRefObject<HTMLDialogElement | null>, isOpen: boolean) => {
  useEffect(() => {
    const dialogNode = ref?.current;

    if (dialogNode) {
      if (isOpen && dialogNode.showModal) {
        dialogNode.showModal();
        // Add visual state class to display dialog in the viewport
        dialogNode.classList.add('is-open');
      } else if (dialogNode.close) {
        // Remove visual state class first to trigger transition
        dialogNode.classList.remove('is-open');

        // Wait for transition to complete before closing
        waitForTransitionEnd(dialogNode).then(() => {
          dialogNode.close();
        });
      }
    }
  }, [isOpen, ref]);

  useScrollControl(ref, isOpen);

  const openDialog = () => {
    if (ref?.current) {
      ref.current.showModal();
      ref.current.classList.add('is-open');
    }
  };

  const closeDialog = () => {
    const dialogNode = ref?.current;
    if (dialogNode && dialogNode.open) {
      // Remove visual state class first to trigger transition
      dialogNode.classList.remove('is-open');

      // Wait for transition to complete before closing
      waitForTransitionEnd(dialogNode).then(() => {
        dialogNode.close();
      });
    }
  };

  return {
    openDialog,
    closeDialog,
  };
};
