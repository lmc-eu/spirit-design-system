import React, { createElement } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { SpiritModalProps } from '../../types';
import { useStyleProps } from '../../hooks/styleProps';
import ModalBackdrop from './ModalBackdrop';
import ModalContent from './ModalContent';
import ModalDialog from './ModalDialog';
import ModalCloseButton from './ModalCloseButton';
import { useModal } from './useModal';
import { useModalStyleProps } from './useModalStyleProps';

const Modal = (props: SpiritModalProps) => {
  const {
    id,
    children,
    closeOnBackdrop = true,
    closeOnEscape = true,
    backdropProps,
    closeButtonProps,
    parentSelector = '#root',
    showBodyClose = true,
    UNSAFE_style,
    UNSAFE_className,
    isOpen: open,
    ...rest
  } = props;

  const parentNode = document.querySelector(parentSelector) as Element;
  const { isOpen, onClose } = useModal({ closeOnEscape, isOpen: open, ...rest });
  const { modalClassName } = useModalStyleProps();
  const { styleProps, props: otherProps } = useStyleProps({ UNSAFE_style, UNSAFE_className });
  const modalProps = {
    id,
    ...styleProps,
    ...otherProps,
    open: isOpen,
    className: classNames(modalClassName, styleProps.className),
    ...rest,
  };

  const modal = createElement(
    'dialog',
    modalProps,
    <>
      <ModalContent>
        <ModalDialog>
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
