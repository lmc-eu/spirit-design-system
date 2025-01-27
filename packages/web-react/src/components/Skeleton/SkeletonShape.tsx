'use client';

import classNames from 'classnames';
import React, { ElementType, ReactElement } from 'react';
import { BorderRadii } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritSkeletonShapeProps } from '../../types';
import { useSkeletonShapeStyleProps } from './useSkeletonShapeStyleProps';

const defaultProps: Partial<SpiritSkeletonShapeProps> = {
  borderRadius: BorderRadii[400],
  elementType: 'div',
};
const SkeletonShape = <T extends ElementType = 'div', E = void>(
  props: SpiritSkeletonShapeProps<T, E>,
): ReactElement => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = defaultProps.elementType as ElementType, ...restProps } = propsWithDefaults;
  const { classProps, skeletonShapeStyleProps, props: modifiedProps } = useSkeletonShapeStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag
      {...otherProps}
      style={{ ...skeletonShapeStyleProps, ...styleProps.style }}
      className={classNames(classProps, styleProps.className)}
    />
  );
};

export default SkeletonShape;
