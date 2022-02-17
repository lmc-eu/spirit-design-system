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
};

export const ButtonLink = <T extends ElementType = 'a'>(props: SpiritButtonProps<T>): JSX.Element => {
  const { className, ...restProps } = props;
  const { buttonProps } = useButtonAriaProps(props);
  const { classProps } = useButtonStyleProps(restProps);

  return <a {...buttonProps} className={classNames(className, classProps)} />;
};

ButtonLink.defaultProps = defaultProps;

export default ButtonLink;
