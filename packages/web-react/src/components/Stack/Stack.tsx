import React, { ElementType } from 'react';
import classNames from 'classnames';
import { useStackStyleProps } from './useStackStyleProps';
import { useStyleProps } from '../../hooks';
import { SpiritStackProps } from '../../types';

const defaultProps = {
  elementType: 'div',
  hasSpacing: true,
  hasEndDivider: false,
  hasIntermediateDividers: false,
  hasStartDivider: false,
};

export const Stack = <T extends ElementType = 'div'>(props: SpiritStackProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'div', children, ...restProps } = props;
  const { classProps, props: modifiedProps } = useStackStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag {...otherProps} {...styleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

Stack.defaultProps = defaultProps;

export default Stack;
