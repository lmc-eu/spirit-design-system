import { useState, useEffect, useCallback, RefObject } from 'react';
import { ClickEvent, SpiritModalProps } from '../../types';

export interface useSpiritModalProps
  extends Pick<SpiritModalProps, 'isOpen' | 'onClose' | 'closeOnEscape' | 'closeOnBackdrop'> {
  dialogReference: RefObject<HTMLDialogElement>;
}
export interface useSpiritModalReturn {
  isOpen: boolean;
  onClose: (event: ClickEvent | KeyboardEvent) => void;
  clickHandler: (event: ClickEvent) => void;
}

export const useModal = (props: useSpiritModalProps): useSpiritModalReturn => {
  const { isOpen = false, onClose, dialogReference, closeOnBackdrop, ...rest } = props;

  const [modalOpen, setModalOpen] = useState<boolean>(isOpen);

  const openHandler = () => {
    setModalOpen(true);
    dialogReference?.current?.showModal && dialogReference?.current?.showModal();
  };
  const closeHandler = () => {
    setModalOpen(false);
    dialogReference?.current?.close && dialogReference?.current?.close();
  };

  const closeCallback = useCallback(
    (event: ClickEvent | KeyboardEvent) => {
      closeHandler();
      if (onClose) onClose(event);
    },
    [onClose, dialogReference],
  );

  const clickHandler = useCallback(
    (event: ClickEvent) => {
      const tagName = (event?.target as HTMLElement)?.tagName.toLowerCase();
      if (closeOnBackdrop && tagName === 'dialog') closeCallback(event);
    },
    [closeOnBackdrop],
  );

  useEffect(() => {
    if (isOpen) {
      openHandler();
    } else {
      closeHandler();
    }
  }, [isOpen]);

  return {
    isOpen: modalOpen,
    onClose: closeCallback,
    clickHandler,
    ...rest,
  };
};
