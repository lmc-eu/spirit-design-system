import { useEffect, MutableRefObject } from 'react';
import { CLASS_NAME_OPEN } from '../../constants';
import { useScrollControl } from '../../hooks';
import { waitForTransitionEnd } from '../../utils';

export const useDialog = (ref: MutableRefObject<HTMLDialogElement | null>, isOpen: boolean) => {
  useEffect(() => {
    const dialogNode = ref?.current;

    if (dialogNode) {
      if (isOpen && dialogNode.showModal) {
        dialogNode.showModal();
        // Add visual state class to display dialog in the viewport
        dialogNode.classList.add(CLASS_NAME_OPEN);
      } else if (dialogNode.close) {
        // Remove visual state class first to trigger transition
        dialogNode.classList.remove(CLASS_NAME_OPEN);

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
      ref.current.classList.add(CLASS_NAME_OPEN);
    }
  };

  const closeDialog = () => {
    const dialogNode = ref?.current;
    if (dialogNode && dialogNode.open) {
      // Remove visual state class first to trigger transition
      dialogNode.classList.remove(CLASS_NAME_OPEN);

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
