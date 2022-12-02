import React from 'react';
import classNames from 'classnames';
import { ModalMemberProps } from '../../types';
import { useModalStyleProps } from './useModalStyleProps';
import { useStyleProps } from '../../hooks';

const ModalFooter = (props: ModalMemberProps): JSX.Element => {
  const { children, elementType: ElementTag = 'div', ...restProps } = props;
  const { classProps } = useModalStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <ElementTag {...otherProps} {...styleProps} className={classNames(classProps.footer, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

export default ModalFooter;
