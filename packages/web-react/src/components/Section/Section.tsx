'use client';

import React, { type ElementType } from 'react';
import { PaddingStyleProps, TextStyleProps } from '../../constants';
import { useStyleProps } from '../../hooks';
import { type SpiritSectionProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { Container } from '../Container';
import { useSectionSizeProps } from './useSectionSizeProps';
import { useSectionStyleProps } from './useSectionStyleProps';

const defaultProps: Partial<SpiritSectionProps> = {
  containerProps: undefined,
  elementType: 'section',
  hasContainer: true,
  size: undefined,
};

const Section = <T extends ElementType = 'section'>(props: SpiritSectionProps<T>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
    elementType: ElementTag = 'section',
    backgroundColor,
    children,
    containerProps,
    hasContainer,
    ...restProps
  } = propsWithDefaults;
  const { classProps } = useSectionStyleProps({ backgroundColor });
  const { modifiedProps } = useSectionSizeProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps, {
    paddingTop: PaddingStyleProps.paddingTop,
    paddingBottom: PaddingStyleProps.paddingBottom,
    paddingY: PaddingStyleProps.paddingY,
    textAlignment: TextStyleProps.textAlignment,
  });
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps, styleProps });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps}>
      {hasContainer ? <Container {...containerProps}>{children}</Container> : children}
    </ElementTag>
  );
};

Section.spiritComponent = 'Section';

export default Section;
