import classNames from 'classnames';
import { type ElementType } from 'react';
import { useClassNamePrefix } from '../../hooks';
import { type SpiritTextProps, type TextProps } from '../../types';

export interface TextStyles<T extends ElementType = 'p'> {
  /** className props */
  classProps: string | null;
  /** props to be passed to the input element */
  props: TextProps<T>;
}

export function useTextStyleProps<T extends ElementType = 'p', S = void>(props: SpiritTextProps<T, S>): TextStyles<T> {
  const { emphasis, size, textColor, ...restProps } = props;

  const textClass = useClassNamePrefix('typography-body');
  const textColorClass = useClassNamePrefix(textColor ? `text-${textColor}` : '');
  const className = classNames(`${textClass}-${size}-${emphasis}`, {
    [textColorClass]: !!textColor,
  });

  return {
    classProps: className,
    props: restProps,
  };
}
