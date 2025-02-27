'use client';

import React, { ElementType, ReactElement } from 'react';
import { SizesExtended } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritSkeletonProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { LINES_COUNT_DEFAULT } from './constants';
import SkeletonItem from './SkeletonItem';
import { useSkeletonStyleProps } from './useSkeletonStyleProps';

const defaultProps: Partial<SpiritSkeletonProps> = {
  size: SizesExtended.MEDIUM,
  lines: LINES_COUNT_DEFAULT,
  elementType: 'div',
};
const SkeletonHeading = <T extends ElementType = 'div', E = void>(props: SpiritSkeletonProps<T, E>): ReactElement => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = 'div', lines, ...restProps } = propsWithDefaults;
  const { classProps, props: modifiedProps } = useSkeletonStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, {
    classProps: classProps.root,
    classPropsHeading: classProps.heading,
    styleProps,
    otherProps,
  });
  const linesToRender = [...Array(lines ?? LINES_COUNT_DEFAULT).keys()];

  return (
    <ElementTag {...otherProps} {...mergedStyleProps}>
      {linesToRender.map((lineNumber) => (
        <SkeletonItem key={`skeleton-item-${lineNumber.toString()}`} />
      ))}
    </ElementTag>
  );
};

SkeletonHeading.spiritComponent = 'SkeletonHeading';

export default SkeletonHeading;
