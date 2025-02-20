'use client';

import React, { ElementType } from 'react';
import { Emphasis, SizesExtended } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritHeadingProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useHeadingStyleProps } from './useHeadingStyleProps';

const defaultProps: Partial<SpiritHeadingProps<ElementType, void, void>> = {
  emphasis: Emphasis.BOLD,
  size: SizesExtended.MEDIUM,
};

const Heading = <T extends ElementType, S = void, E = void>(props: SpiritHeadingProps<T, S, E>): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag, children, ...restProps } = propsWithDefaults;
  const { classProps, props: modifiedProps } = useHeadingStyleProps({ ...restProps });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps, styleProps, otherProps });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps}>
      {children}
    </ElementTag>
  );
};

Heading.spiritComponent = 'Heading';

export default Heading;
