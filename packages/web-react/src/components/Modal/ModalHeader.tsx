import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { ModalHeaderProps } from '../../types';
import { useModalContext } from './ModalContext';
import { useModalStyleProps } from './useModalStyleProps';
import ModalCloseButton from './ModalCloseButton';

const ModalHeader = (props: ModalHeaderProps) => {
  const { children, closeLabel = 'Close', ...restProps } = props;

  const { classProps } = useModalStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);
  const { id, isOpen, onClose } = useModalContext();

  return (
    <header {...otherProps} {...styleProps} className={classNames(classProps.header, styleProps.className)}>
      {children && (
        <h2 id={`${id}__title`} className={classProps.title}>
          {children}
        </h2>
      )}
      <ModalCloseButton id={id} isOpen={isOpen} label={closeLabel} onClose={onClose} />
    </header>
  );
};

export default ModalHeader;
