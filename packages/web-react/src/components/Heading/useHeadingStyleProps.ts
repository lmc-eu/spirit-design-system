import { ElementType } from 'react';
import { useClassNamePrefix } from '../../hooks';
import { SpiritHeadingProps, HeadingProps } from '../../types';

export interface HeadingStyles<T extends ElementType> {
  /** className props */
  classProps: string | null;
  /** props to be passed to the input element */
  props: Omit<HeadingProps<T>, 'elementType'>;
}

export function useHeadingStyleProps<T extends ElementType, S = void, E = void>(
  props: Omit<SpiritHeadingProps<T, S, E>, 'elementType'>,
): HeadingStyles<T> {
  const { size, emphasis, ...restProps } = props;

  const headingClass = useClassNamePrefix('typography-heading');
  const className = `${headingClass}-${size}-${emphasis}`;

  return {
    classProps: className,
    props: restProps,
  };
}
