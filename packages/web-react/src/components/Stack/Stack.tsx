import React, { ElementType, JSXElementConstructor } from 'react';
import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { ChildrenProps, StyleProps } from '../../types';

export interface StackProps<T extends ElementType = 'div'> extends ChildrenProps, StyleProps {
  /**
   * The HTML element or React element used to render the Stack, e.g. 'div', 'ul', or something else.
   * @default 'div'
   */
  elementType?: T | JSXElementConstructor<any>;
}

export const Stack = <T extends ElementType = 'div'>(props: StackProps<T>): JSX.Element => {
  const { elementType: ElementType = 'div', className, children, ...restProps } = props;
  const stackClass = useClassNamePrefix('Stack');
  const classes = classNames(className, stackClass);

  return (
    <ElementType {...restProps} className={classes}>
      {children}
    </ElementType>
  );
};

export default Stack;
