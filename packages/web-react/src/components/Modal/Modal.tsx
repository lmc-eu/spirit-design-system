import React from 'react';
import classNames from 'classnames';
import { ModalProps } from '../../types';
import { useModalStyleProps } from './useModalStyleProps';
import ModalBackdrop from './ModalBackdrop';
import { useLastActiveFocus, useStyleProps } from '../../hooks';
import Dialog from '../Dialog/Dialog';

const Modal = (props: ModalProps): JSX.Element => {
  const { children, isOpen, onClose, ...restProps } = props;
  const { classProps } = useModalStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  useLastActiveFocus(isOpen);

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
      {/* This is not necessary after https://github.com/lmc-eu/spirit-design-system/pull/532 */}
      <ModalBackdrop isOpen={isOpen} />
    </Dialog>
  );
};

export default Modal;
