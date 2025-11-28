'use client';

import { type MutableRefObject, type TransitionEvent, useCallback, useEffect } from 'react';
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

  // Helper function to manage the open class state
  const setOpenClass = useCallback(
    (shouldAdd: boolean) => {
      const dialogNode = ref?.current;
      if (dialogNode?.classList) {
        if (shouldAdd) {
          dialogNode.classList.add(CLASS_NAME_OPEN);
        } else {
          dialogNode.classList.remove(CLASS_NAME_OPEN);
        }
      }
    },
    [ref],
  );

  // Handle declarative dialog state changes via isOpen prop
  useEffect(() => {
    const dialogNode = ref?.current;

    if (dialogNode) {
      // Opening: When isOpen becomes true and dialog is not already open
      if (isOpen && !dialogNode.open && dialogNode.showModal) {
        dialogNode.showModal(); // Show the dialog element
        setOpenClass(true); // Add visual state class for CSS transitions
      }
      // Closing: When isOpen becomes false and dialog is currently open
      else if (!isOpen && dialogNode.open) {
        setOpenClass(false); // Remove visual state class to trigger CSS transition
        // Note: The actual dialog.close() will happen in handleTransitionEnd after transition completes
      }
    }
  }, [isOpen, ref, setOpenClass]);

  // Imperative function to open dialog programmatically
  const openDialog = () => {
    if (ref?.current && !ref.current.open) {
      ref.current.showModal(); // Show the dialog element
      setOpenClass(true); // Add visual state class for CSS transitions
    }
  };

  // Imperative function to close dialog programmatically
  const closeDialog = () => {
    const dialogNode = ref?.current;
    if (dialogNode && dialogNode.open) {
      setOpenClass(false); // Remove visual state class to trigger CSS transition
      // Note: The actual dialog.close() will happen in handleTransitionEnd after transition completes
    }
  };

  return {
    openDialog,
    closeDialog,
    onTransitionEnd: handleTransitionEnd,
  };
};
