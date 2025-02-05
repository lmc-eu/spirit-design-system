'use client';

import classNames from 'classnames';
import React, { ElementType, forwardRef } from 'react';
import { Sizes } from '../../constants';
import { useStyleProps } from '../../hooks';
import { PolymorphicRef, SpiritNavigationAvatarProps } from '../../types';
import { Avatar } from '../Avatar';
import { useNavigationStyleProps } from './useNavigationStyleProps';

const defaultProps: Partial<SpiritNavigationAvatarProps> = {
  elementType: 'a',
  isSquare: false,
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_NavigationAvatar'] }] */
const _NavigationAvatar = <E extends ElementType = 'a'>(
  props: SpiritNavigationAvatarProps<E>,
  ref: PolymorphicRef<E>,
): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
    elementType: ElementTag = defaultProps.elementType as ElementType,
    avatarContent,
    isSquare,
    children,
    ...restProps
  } = propsWithDefaults;

  const { classProps, props: modifiedProps } = useNavigationStyleProps({ isSquare, ...restProps });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag
      {...otherProps}
      {...styleProps}
      href={restProps.href}
      className={classNames(classProps.avatar, styleProps.className)}
      ref={ref}
    >
      <Avatar size={Sizes.SMALL} isSquare={isSquare}>
        {avatarContent}
      </Avatar>
      {children}
    </ElementTag>
  );
};

const NavigationAvatar = forwardRef<HTMLElement, SpiritNavigationAvatarProps<ElementType>>(_NavigationAvatar);

export default NavigationAvatar;
