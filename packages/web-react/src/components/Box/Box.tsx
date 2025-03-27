'use client';

import React, { ElementType } from 'react';
import { BorderStyles, BorderRadiusStyleProps, PaddingStyleProps } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritBoxProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useBoxStyleProps } from './useBoxStyleProps';

const defaultProps: Partial<SpiritBoxProps> = {
  elementType: 'div',
  borderStyle: BorderStyles.SOLID,
};

const Box = <T extends ElementType = 'div'>(props: SpiritBoxProps<T>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = 'div', children, ...restProps } = propsWithDefaults;

  const { classProps, props: modifiedProps } = useBoxStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps, {
    padding: PaddingStyleProps.padding,
    paddingTop: PaddingStyleProps.paddingTop,
    paddingRight: PaddingStyleProps.paddingRight,
    paddingBottom: PaddingStyleProps.paddingBottom,
    paddingLeft: PaddingStyleProps.paddingLeft,
    paddingX: PaddingStyleProps.paddingX,
    paddingY: PaddingStyleProps.paddingY,
    borderRadius: BorderRadiusStyleProps.borderRadius,
  }); // TODO: Set border-radius value with `rounded` prefix, not only value
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps, styleProps });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps}>
      {children}
    </ElementTag>
  );
};

Box.spiritComponent = 'Box';

export default Box;
