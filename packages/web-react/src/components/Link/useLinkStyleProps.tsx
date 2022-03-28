import { ElementType } from 'react';
import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { SpiritLinkProps, LinkProps } from '../../types';

export interface LinkStyles<T extends ElementType = 'p'> {
  /** className props */
  classProps: string | null;
  /** props to be passed to the input element */
  props: LinkProps<T>;
}

export function useLinkStyleProps<T extends ElementType = 'a'>(props: SpiritLinkProps<T>): LinkStyles<T> {
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
