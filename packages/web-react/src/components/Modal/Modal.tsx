import React, { createElement, useRef } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { SpiritModalProps } from '../../types';
import { useStyleProps } from '../../hooks/styleProps';
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
    closeButtonProps,
    parentId = 'modal-root',
    showBodyClose = true,
    UNSAFE_style,
    UNSAFE_className,
    isOpen: open,
    ...rest
  } = props;

  let parentNode;
  const dialogReference = useRef(null);
  const root = document.querySelector('#modal-root');
  if (!root) {
    parentNode = document.createElement('div');
    parentNode.setAttribute('id', parentId);
    document.body.appendChild(parentNode);
  } else {
    parentNode = root;
  }

  const { isOpen, onClose, clickHandler } = useModal({
    dialogReference,
    closeOnEscape,
    closeOnBackdrop,
    isOpen: open,
    ...rest,
  });
  const { modalClassName } = useModalStyleProps();
  const { styleProps, props: otherProps } = useStyleProps({ UNSAFE_style, UNSAFE_className });
  const modalProps = {
    id,
    ...styleProps,
    ...otherProps,
    open: isOpen,
    className: classNames(modalClassName, styleProps.className),
    ref: dialogReference,
    onClick: clickHandler,
    ...rest,
  };

  const modal = createElement(
    'dialog',
    modalProps,
    <ModalContent>
      <ModalDialog>
        {showBodyClose && <ModalCloseButton onClick={onClose} {...closeButtonProps} />}
        {children}
      </ModalDialog>
    </ModalContent>,
  );

  return createPortal(modal, parentNode);
};

export default Modal;
