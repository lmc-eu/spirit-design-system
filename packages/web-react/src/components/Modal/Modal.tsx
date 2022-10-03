import React, { createElement } from 'react';
import { createPortal } from 'react-dom';
import { SpiritModalProps } from '../../types';
import { useClassNamePrefix } from '../../hooks';
import ModalBackdrop from './ModalBackdrop';
import ModalContent from './ModalContent';
import ModalDialog from './ModalDialog';
import ModalCloseButton from './ModalCloseButton';
import { useModal } from './useModal';

const Modal = (props: SpiritModalProps) => {
  const {
    id,
    children,
    closeOnBackdrop = true,
    closeOnEscape = true,
    contentProps,
    backdropProps,
    dialogProps,
    closeButtonProps,
    parentSelector = '#root',
    showBodyClose = true,
    UNSAFE_style,
    UNSAFE_className,
    ...rest
  } = props;

  const { isOpen, onClose } = useModal({ closeOnEscape, ...rest });

  const modalClass = useClassNamePrefix('Modal');
  const parentNode = document.querySelector(parentSelector) as Element;
  const modalProps = {
    id,
    open: isOpen,
    className: [modalClass, UNSAFE_className].join(' '),
    style: UNSAFE_style,
  };
  const modal = createElement(
    'dialog',
    modalProps,
    <>
      <ModalContent {...contentProps}>
        <ModalDialog {...dialogProps}>
          {showBodyClose && <ModalCloseButton onClick={onClose} {...closeButtonProps} />}
          {children}
        </ModalDialog>
      </ModalContent>
      <ModalBackdrop isOpen={isOpen} closeOnBackdrop={closeOnBackdrop} onClick={onClose} {...backdropProps} />
    </>,
  );

  return createPortal(modal, parentNode);
};

export default Modal;
