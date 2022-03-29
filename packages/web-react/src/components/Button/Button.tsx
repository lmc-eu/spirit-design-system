import React, { ElementType } from 'react';
import { filterProps } from '../../utils/filterProps';
import { SpiritButtonProps } from '../../types';
import { useButtonAriaProps } from './useButtonAriaProps';
import { useButtonStyleProps } from './useButtonStyleProps';

const defaultProps = {
  color: 'primary',
  type: 'button',
  isBlock: false,
  isDisabled: false,
  isSquare: false,
  elementType: 'button',
};

export const Button = <T extends ElementType = 'button'>(props: SpiritButtonProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'button', children, ...restProps } = props;
  const { buttonProps } = useButtonAriaProps(props);
  const { classProps } = useButtonStyleProps(restProps);

  return (
    <ElementTag {...filterProps(buttonProps)} className={classProps}>
      {children}
    </ElementTag>
  );
};

Button.defaultProps = defaultProps;

export default Button;
