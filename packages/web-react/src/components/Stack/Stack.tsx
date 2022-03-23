import React, { ElementType, JSXElementConstructor } from 'react';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { ChildrenProps, StyleProps } from '../../types';

export interface StackProps<T extends ElementType = 'div'> extends ChildrenProps, StyleProps {
  /**
   * The HTML element or React element used to render the Stack, e.g. 'div', 'ul', or something else.
   *
   * @default 'div'
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  elementType?: T | JSXElementConstructor<any>;
}

const defaultProps = {
  elementType: 'div',
};

export const Stack = <T extends ElementType = 'div'>(props: StackProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'div', children, ...restProps } = props;
  const stackClass = useClassNamePrefix('Stack');

  return (
    <ElementTag {...restProps} className={stackClass}>
      {children}
    </ElementTag>
  );
};

Stack.defaultProps = defaultProps;

export default Stack;
