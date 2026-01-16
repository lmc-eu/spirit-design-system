'use client';

import React, { type ElementType } from 'react';
import { BackgroundColors, PaddingStyleProps, TextStyleProps } from '../../constants';
import { useStyleProps } from '../../hooks';
import { type SpiritFooterProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { PADDING_BOTTOM, PADDING_TOP } from './constants';
import { useFooterStyleProps } from './useFooterStyleProps';

const defaultStyleProps: SpiritFooterProps = {
  backgroundColor: BackgroundColors.SECONDARY,
  elementType: 'footer',
  paddingBottom: PADDING_BOTTOM,
  paddingTop: PADDING_TOP,
};

const Footer = <T extends ElementType = 'footer'>(props: SpiritFooterProps<T>): JSX.Element => {
  const propsWithDefaults = { ...defaultStyleProps, ...props };
  const {
    elementType: ElementTag = defaultStyleProps.elementType as ElementType,
    children,
    backgroundColor,
    ...restProps
  } = propsWithDefaults;
  const { classProps } = useFooterStyleProps({ backgroundColor });
  const { styleProps, props: otherProps } = useStyleProps(restProps, {
    paddingBottom: PaddingStyleProps.paddingBottom,
    paddingTop: PaddingStyleProps.paddingTop,
    textAlignment: TextStyleProps.textAlignment,
  });
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps, styleProps, otherProps });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps}>
      {children}
    </ElementTag>
  );
};

Footer.spiritComponent = 'Footer';

export default Footer;
