import classNames from 'classnames';
import { ElementType } from 'react';
import { useClassNamePrefix } from '../../hooks';
import { SpiritSkeletonProps, SkeletonProps } from '../../types';

export interface SkeletonStyles {
  /** className props */
  classProps: {
    root: string;
    text: string;
    heading: string;
    item: string;
  };
  /** props to be passed to the element */
  props: SkeletonProps;
}

export function useSkeletonStyleProps<T extends ElementType = 'div', E = void>(
  props?: SpiritSkeletonProps<T, E>,
): SkeletonStyles {
  const { size, ...restProps } = props || {};

  const skeletonClass = useClassNamePrefix('Skeleton');
  const skeletonSizeClass = `${skeletonClass}--${size}`;
  const skeletonTextClass = `${skeletonClass}--text`;
  const skeletonHeadingClass = `${skeletonClass}--heading`;
  const skeletonItemClass = `${skeletonClass}__item`;

  const classProps = classNames(skeletonClass, {
    [skeletonSizeClass]: size,
  });

  return {
    classProps: {
      root: classProps,
      text: skeletonTextClass,
      heading: skeletonHeadingClass,
      item: skeletonItemClass,
    },
    props: restProps,
  };
}
