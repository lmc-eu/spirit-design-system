import React, { ElementType } from 'react';
import classNames from 'classnames';
import { SpiritButtonProps } from '../../types';
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
  const { className, children, ...restProps } = props;
  const { buttonProps } = useButtonAriaProps(props);
  const { classProps } = useButtonStyleProps(restProps);

  return (
    <a {...buttonProps} className={classNames(className, classProps)}>
      {children}
    </a>
  );
};

ButtonLink.defaultProps = defaultProps;

export default ButtonLink;
