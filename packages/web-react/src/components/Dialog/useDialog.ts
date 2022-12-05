import { useEffect, MutableRefObject } from 'react';

export const useDialog = (ref: MutableRefObject<HTMLDialogElement | null>, isOpen: boolean) => {
  useEffect(() => {
    const dialogNode = ref?.current;

    if (dialogNode) {
      if (isOpen && dialogNode.showModal) {
        dialogNode.showModal();
      } else if (dialogNode.close) {
        dialogNode.close();
      }
    }
  }, [isOpen, ref]);

  const openDialog = () => {
    if (ref?.current) {
      ref.current.showModal();
    }
  };

  const closeDialog = () => {
    if (ref?.current) {
      ref.current.close();
    }
  };

  return {
    openDialog,
    closeDialog,
  };
};
