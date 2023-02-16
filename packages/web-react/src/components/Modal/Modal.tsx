import React from 'react';
import classNames from 'classnames';
import { ModalProps } from '../../types';
import { useModalStyleProps } from './useModalStyleProps';
import { useLastActiveFocus, useStyleProps, useDeprecationMessage } from '../../hooks';
import Dialog from '../Dialog/Dialog';

const Modal = (props: ModalProps): JSX.Element => {
  const { children, isOpen, onClose, ...restProps } = props;
  const { classProps } = useModalStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  useLastActiveFocus(isOpen);

  useDeprecationMessage({
    method: 'component',
    trigger: true,
    componentName: 'Modal',
    componentProps: {
      delete: true,
    },
  });

  return (
    <Dialog
      {...otherProps}
      {...styleProps}
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(classProps.root, styleProps.className)}
    >
      <div className={classProps.content}>
        <div className={classProps.dialog}>{children}</div>
      </div>
    </Dialog>
  );
};

export default Modal;
