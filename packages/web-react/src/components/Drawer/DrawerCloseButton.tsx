'use client';

import classNames from 'classnames';
import React from 'react';
import { ComponentButtonColors, Sizes } from '../../constants';
import { useStyleProps } from '../../hooks';
import { DrawerCloseButtonProps } from '../../types';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { DEFAULT_BOX_SIZE } from '../Icon/constants';
import { VisuallyHidden } from '../VisuallyHidden';
import { DRAWER_CLOSE_BUTTON_LABEL_DEFAULT } from './constants';
import { useDrawerContext } from './DrawerContext';
import { useDrawerStyleProps } from './useDrawerStyleProps';

const defaultProps: Partial<DrawerCloseButtonProps> = {
  color: ComponentButtonColors.TERTIARY,
  iconBoxSize: DEFAULT_BOX_SIZE,
  label: DRAWER_CLOSE_BUTTON_LABEL_DEFAULT,
  size: Sizes.MEDIUM,
};

const DrawerCloseButton = (props: DrawerCloseButtonProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { color, iconBoxSize, label, size, ...restProps } = propsWithDefaults;
  const { id, isOpen, onClose } = useDrawerContext();

  const { classProps } = useDrawerStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <Button
      {...otherProps}
      aria-expanded={isOpen}
      aria-controls={id}
      onClick={onClose}
      color={color}
      size={size}
      UNSAFE_className={classNames(classProps.closeButton, styleProps.className)}
      UNSAFE_style={styleProps.style}
      isSymmetrical
    >
      <Icon name="close" boxSize={iconBoxSize} />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Button>
  );
};

DrawerCloseButton.spiritComponent = 'DrawerCloseButton';

export default DrawerCloseButton;
