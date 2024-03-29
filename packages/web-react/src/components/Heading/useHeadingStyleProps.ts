import { ElementType } from 'react';
import { useClassNamePrefix } from '../../hooks';
import { SpiritHeadingProps, HeadingProps } from '../../types';

export interface HeadingStyles<T extends ElementType = 'p'> {
  /** className props */
  classProps: string | null;
  /** props to be passed to the input element */
  props: HeadingProps<T>;
}

export function useHeadingStyleProps<T extends ElementType = 'div', S = void>(
  props: SpiritHeadingProps<T, S>,
): HeadingStyles<T> {
  const { size, ...restProps } = props;

  const headingClass = useClassNamePrefix('typography-heading');
  const className = `${headingClass}-${size}-text`;

  return {
    classProps: className,
    props: restProps,
  };
}
