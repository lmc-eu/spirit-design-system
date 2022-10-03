import { useState, useEffect, useCallback } from 'react';
import { useSpiritModalProps, useSpiritModalReturn, ClickEvent } from '../../types';

export const useModal = (props: useSpiritModalProps) => {
  const { isOpen, onClose, closeOnEscape, ...rest } = props;

  const [modalOpen, setModalOpen] = useState(isOpen);

  const closeHandler = useCallback(
    (event: ClickEvent | KeyboardEvent) => {
      setModalOpen(false);
      if (onClose) onClose(event);
    },
    [onClose],
  );

  const userKeypressHandler = useCallback(
    (event: KeyboardEvent) => {
      if (event.keyCode === 27) closeHandler(event);
    },
    [closeHandler],
  );

  useEffect(() => {
    if (modalOpen && closeOnEscape) {
      window.addEventListener('keydown', userKeypressHandler);
    } else {
      window.removeEventListener('keydown', userKeypressHandler);
    }

    return () => {
      window.removeEventListener('keydown', userKeypressHandler);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalOpen, closeOnEscape]);

  useEffect(() => {
    setModalOpen(Boolean(isOpen));
  }, [isOpen]);

  return {
    isOpen: modalOpen,
    onClose: closeHandler,
    ...rest,
  } as useSpiritModalReturn;
};
