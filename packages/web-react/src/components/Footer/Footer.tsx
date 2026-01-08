'use client';

import classNames from 'classnames';
import React from 'react';
import { BackgroundColors, PaddingStyleProps, TextStyleProps } from '../../constants';
import { useStyleProps } from '../../hooks';
import { type SpiritFooterProps } from '../../types';
import { PADDING_BOTTOM, PADDING_TOP } from './constants';
import { useFooterStyleProps } from './useFooterStyleProps';

const defaultStyleProps: SpiritFooterProps = {
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
    textAlignment: TextStyleProps.textAlignment,
  });

  return (
    <footer {...otherProps} {...styleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </footer>
  );
};

Footer.spiritComponent = 'Footer';
Footer.spiritDefaultProps = null as unknown as SpiritFooterProps;

export default Footer;
