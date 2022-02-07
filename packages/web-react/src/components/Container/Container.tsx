import React from 'react';
import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { ChildrenProps, StyleProps } from '../../types';

export interface ContainerProps extends ChildrenProps, StyleProps {}

export const Container = ({ className, children, ...restProps }: ContainerProps): JSX.Element => {
  const containerClass = useClassNamePrefix('Container');
  const classes = classNames(className, containerClass);

  return (
    <div {...restProps} className={classes}>
      {children}
    </div>
  );
};

export default Container;
