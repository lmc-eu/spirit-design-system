import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { ModalBodyProps } from '../../types';
import { useModalStyleProps } from './useModalStyleProps';

const ModalBody = ({ children, ...restProps }: ModalBodyProps) => {
  const { classProps } = useModalStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <div {...otherProps} {...styleProps} className={classNames(classProps.body, styleProps.className)}>
      {children}
    </div>
  );
};

export default ModalBody;
