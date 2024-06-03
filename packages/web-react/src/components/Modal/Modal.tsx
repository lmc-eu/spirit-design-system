import classNames from 'classnames';
import React from 'react';
import { AlignmentY } from '../../constants';
import { useStyleProps, useLastActiveFocus } from '../../hooks';
import { SpiritModalProps } from '../../types';
import Dialog from '../Dialog/Dialog';
import { ModalProvider } from './ModalContext';
import { useModalStyleProps } from './useModalStyleProps';

const Modal = (props: SpiritModalProps) => {
  const { children, alignmentY = AlignmentY.CENTER, isOpen, onClose, id, ...restProps } = props;
  const { classProps } = useModalStyleProps({ modalAlignment: alignmentY });
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
