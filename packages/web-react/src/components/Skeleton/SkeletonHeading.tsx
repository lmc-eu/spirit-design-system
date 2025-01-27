'use client';

import classNames from 'classnames';
import React, { ElementType, ReactElement } from 'react';
import { SizesExtended } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritSkeletonProps } from '../../types';
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
  const { elementType: ElementTag = defaultProps.elementType as ElementType, lines, ...restProps } = propsWithDefaults;
  const { classProps, props: modifiedProps } = useSkeletonStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const linesToRender = [...Array(lines ?? LINES_COUNT_DEFAULT).keys()];

  return (
    <ElementTag
      {...otherProps}
      {...styleProps}
      className={classNames(classProps.root, classProps.heading, styleProps.className)}
    >
      {linesToRender.map((lineNumber) => (
        <SkeletonItem key={`skeleton-item-${lineNumber.toString()}`} />
      ))}
    </ElementTag>
  );
};

export default SkeletonHeading;
