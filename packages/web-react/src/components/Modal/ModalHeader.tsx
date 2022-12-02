import React from 'react';
import classNames from 'classnames';
import { ModalMemberProps } from '../../types';
import { useModalStyleProps } from './useModalStyleProps';
import { useStyleProps } from '../../hooks';

const ModalHeader = (props: ModalMemberProps): JSX.Element => {
  const { children, elementType: ElementTag = 'div', ...restProps } = props;
  const { classProps } = useModalStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <ElementTag {...otherProps} {...styleProps} className={classNames(classProps.header, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

export default ModalHeader;
