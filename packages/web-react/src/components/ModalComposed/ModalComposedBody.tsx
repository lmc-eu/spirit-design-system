import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { ModalComposedBodyProps } from '../../types/modalComposed';
import { useModalComposedStyleProps } from './useModalComposedStyleProps';

const ModalComposedBody = ({ children, ...restProps }: ModalComposedBodyProps) => {
  const { classProps } = useModalComposedStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <div {...otherProps} {...styleProps} className={classNames(classProps.body, styleProps.className)}>
      {children}
    </div>
  );
};

export default ModalComposedBody;
