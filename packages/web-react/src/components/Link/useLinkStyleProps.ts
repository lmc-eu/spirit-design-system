import classNames from 'classnames';
import { ElementType } from 'react';
import { useClassNamePrefix } from '../../hooks';
import { SpiritLinkProps, LinkProps, UNDERLINED_OPTIONS } from '../../types';

export interface LinkStyles<E extends ElementType = 'p'> {
  /** className props */
  classProps: string | null;
  /** props to be passed to the input element */
  props: Partial<LinkProps<E>>;
}

export function useLinkStyleProps<E extends ElementType = 'a', T = void>(props: SpiritLinkProps<E, T>): LinkStyles<E> {
  const { color, isDisabled, isUnderlined, underlined, ...restProps } = props;

  const linkClass = useClassNamePrefix('link');
  const linkColorClass = `${linkClass}-${color}`;
  const linkDisabledClass = `${linkClass}-disabled`;
  const linkUnderlinedClass = `${linkClass}-underlined`;
  const linkNotUnderlinedClass = `${linkClass}-not-underlined`;

  const className = classNames(linkColorClass, {
    [linkDisabledClass]: isDisabled,
    [linkUnderlinedClass]: isUnderlined || underlined === UNDERLINED_OPTIONS.ALWAYS,
    [linkNotUnderlinedClass]: underlined === UNDERLINED_OPTIONS.NEVER,
  });

  return {
    classProps: className,
    props: restProps,
  };
}
