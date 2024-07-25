'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { ModalHeaderProps } from '../../types';
import ModalCloseButton from './ModalCloseButton';
import { useModalContext } from './ModalContext';
import { useModalStyleProps } from './useModalStyleProps';

const defaultProps: ModalHeaderProps = {
  hasCloseButton: true,
};

const ModalHeader = (props: ModalHeaderProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, closeLabel, hasCloseButton, ...restProps } = propsWithDefaults;

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
      {hasCloseButton && <ModalCloseButton id={id} isOpen={isOpen} label={closeLabel} onClose={onClose} />}
    </header>
  );
};

export default ModalHeader;
