'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks/styleProps';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { ChildrenProps, StyleProps, TransferProps } from '../../types';

export interface ContainerProps extends ChildrenProps, StyleProps, TransferProps {}

const Container = ({ children, ...restProps }: ContainerProps): JSX.Element => {
  const containerClass = useClassNamePrefix('Container');
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <div {...otherProps} {...styleProps} className={classNames(containerClass, styleProps.className)}>
      {children}
    </div>
  );
};

export default Container;
