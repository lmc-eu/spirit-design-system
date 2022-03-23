import React from 'react';
import { filterProps } from '../../utils/filterProps';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { ChildrenProps, StyleProps } from '../../types';

export interface ContainerProps extends ChildrenProps, StyleProps {}

export const Container = ({ children, ...restProps }: ContainerProps): JSX.Element => {
  const containerClass = useClassNamePrefix('Container');

  return (
    <div {...filterProps(restProps)} className={containerClass}>
      {children}
    </div>
  );
};

export default Container;
