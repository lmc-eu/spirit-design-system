import React from 'react';
import classNames from 'classnames';
import { useStyleProps, useLastActiveFocus, useDeprecationMessage } from '../../hooks';
import { SpiritModalComposedProps } from '../../types/modalComposed';
import { useModalComposedStyleProps } from './useModalComposedStyleProps';
import { ModalProvider } from './ModalComposedContext';
import Dialog from '../Dialog/Dialog';

const ModalComposed = (props: SpiritModalComposedProps) => {
  const { children, isOpen, onClose, id, ...restProps } = props;
  const { classProps } = useModalComposedStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  const contextValue = {
    id,
    isOpen,
    onClose,
  };

  useLastActiveFocus(isOpen);

  useDeprecationMessage({
    method: 'component',
    trigger: true,
    componentName: 'ModalComposed',
    componentProps: {
      newName: 'Modal',
    },
  });

  return (
    <Dialog
      {...otherProps}
      {...styleProps}
      id={id}
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(classProps.root, styleProps.className)}
      aria-labelledby={`${id}__title`}
    >
      <ModalProvider value={contextValue}>{children}</ModalProvider>
    </Dialog>
  );
};

export default ModalComposed;
