'use client';

import classNames from 'classnames';
import React from 'react';
import { BackgroundColors, PaddingStyleProps } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritFooterProps } from '../../types';
import { PADDING_BOTTOM, PADDING_TOP } from './constants';
import { useFooterStyleProps } from './useFooterStyleProps';

const defaultStyleProps: Partial<SpiritFooterProps> = {
  backgroundColor: BackgroundColors.SECONDARY,
  paddingBottom: PADDING_BOTTOM,
  paddingTop: PADDING_TOP,
};

const Footer = (props: SpiritFooterProps) => {
  const propsWithDefaults = { ...defaultStyleProps, ...props };
  const { children, backgroundColor, ...restProps } = propsWithDefaults;
  const { classProps } = useFooterStyleProps({ backgroundColor });
  const { styleProps, props: otherProps } = useStyleProps(restProps, {
    paddingBottom: PaddingStyleProps.paddingBottom,
    paddingTop: PaddingStyleProps.paddingTop,
  });

  return (
    <footer {...otherProps} {...styleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </footer>
  );
};

export default Footer;
