import { ElementType } from 'react';
import { useClassNamePrefix } from '../../hooks';
import { SpiritTextProps, TextProps } from '../../types';

export interface TextStyles<T extends ElementType = 'p'> {
  /** className props */
  classProps: string | null;
  /** props to be passed to the input element */
  props: TextProps<T>;
}

export function useTextStyleProps<T extends ElementType = 'p', S = void>(props: SpiritTextProps<T, S>): TextStyles<T> {
  const { size, emphasis, ...restProps } = props;

  const textClass = useClassNamePrefix('typography-body');
  const className = `${textClass}-${size}-${emphasis}`;

  return {
    classProps: className,
    props: restProps,
  };
}
