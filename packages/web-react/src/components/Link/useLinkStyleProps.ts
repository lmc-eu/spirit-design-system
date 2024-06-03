import classNames from 'classnames';
import { ElementType } from 'react';
import { useClassNamePrefix } from '../../hooks';
import { SpiritLinkProps, LinkProps } from '../../types';

export interface LinkStyles<E extends ElementType = 'p'> {
  /** className props */
  classProps: string | null;
  /** props to be passed to the input element */
  props: Partial<LinkProps<E>>;
}

export function useLinkStyleProps<E extends ElementType = 'a', T = void>(props: SpiritLinkProps<E, T>): LinkStyles<E> {
  const { color, isDisabled, isUnderlined, ...restProps } = props;

  const linkClass = useClassNamePrefix('link');
  const linkColorClass = `${linkClass}-${color}`;
  const linkDisabledClass = `${linkClass}-disabled`;
  const linkUnderlinedClass = `${linkClass}-underlined`;

  const className = classNames(linkColorClass, {
    [linkDisabledClass]: isDisabled,
    [linkUnderlinedClass]: isUnderlined,
  });

  return {
    classProps: className,
    props: restProps,
  };
}
