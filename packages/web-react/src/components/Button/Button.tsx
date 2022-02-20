import React, { ElementType } from 'react';
import classNames from 'classnames';
import { SpiritButtonProps } from '../../types';
import { useButtonAriaProps } from './useButtonAriaProps';
import { useButtonStyleProps } from './useButtonStyleProps';

const defaultProps = {
  color: 'primary',
  type: 'button',
  block: false,
  disabled: false,
  elementType: 'button',
};

export const Button = <T extends ElementType = 'button'>(props: SpiritButtonProps<T>): JSX.Element => {
  const { elementType: ElementType = 'button', className, children, ...restProps } = props;
  const { buttonProps } = useButtonAriaProps(props);
  const { classProps } = useButtonStyleProps(restProps);

  return (
    <ElementType {...buttonProps} className={classNames(className, classProps)}>
      {children}
    </ElementType>
  );
};

Button.defaultProps = defaultProps;

export default Button;
