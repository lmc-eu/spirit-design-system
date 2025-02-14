'use client';

import classNames from 'classnames';
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
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <SplitButtonProvider value={{ color, size }}>
      <div {...styleProps} {...otherProps} className={classNames(classProps, styleProps.className)}>
        {children}
      </div>
    </SplitButtonProvider>
  );
};

export default SplitButton;
