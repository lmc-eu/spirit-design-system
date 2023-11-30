import React from 'react';
import classNames from 'classnames';
import { useStyleProps, useLastActiveFocus } from '../../hooks';
import { SpiritModalProps } from '../../types';
import { useModalStyleProps } from './useModalStyleProps';
import { ModalProvider } from './ModalContext';
import Dialog from '../Dialog/Dialog';

const Modal = (props: SpiritModalProps) => {
  const { children, isOpen, onClose, id, ...restProps } = props;
  const { classProps } = useModalStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  const contextValue = {
    id,
    isOpen,
    onClose,
  };

  useLastActiveFocus(isOpen);

  return (
    <ModalProvider value={contextValue}>
      <Dialog
        {...otherProps}
        {...styleProps}
        id={id}
        isOpen={isOpen}
        onClose={onClose}
        className={classNames(classProps.root, styleProps.className)}
        aria-labelledby={`${id}__title`}
      >
        {children}
      </Dialog>
    </ModalProvider>
  );
};

export default Modal;
