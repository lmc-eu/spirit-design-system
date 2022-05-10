import React, { ElementType } from 'react';
import classNames from 'classnames';
import { SpiritButtonProps } from '../../types';
import { useStyleProps } from '../../hooks/styleProps';
import { useButtonAriaProps } from './useButtonAriaProps';
import { useButtonStyleProps } from './useButtonStyleProps';

const defaultProps = {
  color: 'primary',
  href: '#',
  block: false,
  disabled: false,
  isSquare: false,
  elementType: 'a',
};

export const ButtonLink = <T extends ElementType = 'a'>(props: SpiritButtonProps<T>): JSX.Element => {
  const { children, ...restProps } = props;
  const { buttonProps } = useButtonAriaProps(props);
  const { classProps } = useButtonStyleProps(restProps);
  const { styleProps } = useStyleProps(restProps);

  return (
    <a {...styleProps} {...buttonProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </a>
  );
};

ButtonLink.defaultProps = defaultProps;

export default ButtonLink;
