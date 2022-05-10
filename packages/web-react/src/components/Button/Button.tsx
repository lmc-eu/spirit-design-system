import React, { ElementType } from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks/styleProps';
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
  const { styleProps } = useStyleProps(restProps);

  return (
    <ElementTag {...styleProps} {...buttonProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

Button.defaultProps = defaultProps;

export default Button;
