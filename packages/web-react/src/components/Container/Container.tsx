import React from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks/styleProps';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { ChildrenProps, StyleProps } from '../../types';

export interface ContainerProps extends ChildrenProps, StyleProps {}

export const Container = ({ children, ...restProps }: ContainerProps): JSX.Element => {
  const containerClass = useClassNamePrefix('Container');
  const { styleProps } = useStyleProps(restProps);

  return (
    <div {...styleProps} className={classNames(containerClass, styleProps.className)}>
      {children}
    </div>
  );
};

export default Container;
