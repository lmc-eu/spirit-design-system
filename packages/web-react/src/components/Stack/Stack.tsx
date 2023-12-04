import React, { ElementType } from 'react';
import classNames from 'classnames';
import { useStackStyleProps } from './useStackStyleProps';
import { useStyleProps } from '../../hooks';
import { SpiritStackProps } from '../../types';

const defaultProps: SpiritStackProps = {
  elementType: 'div',
  hasSpacing: false,
  hasEndDivider: false,
  hasIntermediateDividers: false,
  hasStartDivider: false,
};

export const Stack = <T extends ElementType = 'div'>(props: SpiritStackProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'div', children, ...restProps } = props;
  const { classProps, props: modifiedProps, styleProps: stackStyle } = useStackStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  const stackStyleProps = {
    style: {
      ...styleProps.style,
      ...stackStyle,
    },
  };

  return (
    <ElementTag {...otherProps} {...stackStyleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

Stack.defaultProps = defaultProps;

export default Stack;
