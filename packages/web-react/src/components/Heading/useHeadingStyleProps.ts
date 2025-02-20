import classNames from 'classnames';
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
  const { emphasis, size, textColor, ...restProps } = props;

  const headingClass = useClassNamePrefix('typography-heading');
  const headingTextColorClass = useClassNamePrefix(textColor ? `text-${textColor}` : '');
  const className = classNames(`${headingClass}-${size}-${emphasis}`, {
    [headingTextColorClass]: !!textColor,
  });

  return {
    classProps: className,
    props: restProps,
  };
}
