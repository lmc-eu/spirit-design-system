'use client';

import React from 'react';
import { ComponentButtonColors, Sizes } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritSplitButtonProps } from '../../types';
import { SplitButtonProvider } from './SplitButtonContext';
import { useSplitButtonStyleProps } from './useSplitButtonStyleProps';

const defaultProps: Partial<SpiritSplitButtonProps> = {
  color: ComponentButtonColors.PRIMARY,
  size: Sizes.MEDIUM,
};

const SplitButton = (props: SpiritSplitButtonProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, color, size, ...restProps } = propsWithDefaults;
  const { classProps } = useSplitButtonStyleProps();
  const { styleProps, props: otherProps } = useStyleProps({ transferClassName: classProps, ...restProps });

  return (
    <SplitButtonProvider value={{ color, size }}>
      <div {...styleProps} {...otherProps}>
        {children}
      </div>
    </SplitButtonProvider>
  );
};

export default SplitButton;
