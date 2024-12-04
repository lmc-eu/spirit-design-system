'use client';

import classNames from 'classnames';
import React from 'react';
import { BackgroundColors } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritFooterProps } from '../../types';
import { useFooterStyleProps } from './useFooterStyleProps';

const defaultStyleProps: Partial<SpiritFooterProps> = {
  backgroundColor: BackgroundColors.SECONDARY,
  paddingBottom: 'space-1200',
  paddingTop: 'space-1400',
};

const Footer = (props: SpiritFooterProps) => {
  const propsWithDefaults = { ...defaultStyleProps, ...props };
  const { children, backgroundColor, paddingBottom, paddingTop, ...restProps } = propsWithDefaults;
  const { classProps } = useFooterStyleProps({ backgroundColor, paddingBottom, paddingTop });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <footer {...styleProps} {...otherProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </footer>
  );
};

export default Footer;
