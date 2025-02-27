'use client';

import React, { ElementType, ReactElement } from 'react';
import { BorderRadii } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritSkeletonShapeProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useSkeletonShapeStyleProps } from './useSkeletonShapeStyleProps';

const defaultProps: Partial<SpiritSkeletonShapeProps> = {
  borderRadius: BorderRadii[400],
  elementType: 'div',
};
const SkeletonShape = <T extends ElementType = 'div', E = void>(
  props: SpiritSkeletonShapeProps<T, E>,
): ReactElement => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = 'div', ...restProps } = propsWithDefaults;
  const { classProps, skeletonShapeStyleProps, props: modifiedProps } = useSkeletonShapeStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, {
    classProps,
    styleProps,
    skeletonShapeStyleProps,
    otherProps,
  });

  return <ElementTag {...otherProps} {...mergedStyleProps} />;
};

SkeletonShape.spiritComponent = 'SkeletonShape';

export default SkeletonShape;
