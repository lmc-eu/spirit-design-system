import classNames from 'classnames';
import { ElementType } from 'react';
import { useClassNamePrefix } from '../../hooks';
import { LinkProps, SpiritNavigationLinkProps } from '../../types';

export interface NavigationLinkStyles<E extends ElementType = 'p'> {
  /** className props */
  classProps: string | null;
  /** props to be passed to the input element */
  props: Partial<LinkProps<E>>;
}

export function useNavigationLinkStyleProps<E extends ElementType = 'a'>(
  props: SpiritNavigationLinkProps<E>,
): NavigationLinkStyles<E> {
  const { isDisabled, isSelected, ...restProps } = props;

  const navigationLinkClass = useClassNamePrefix('NavigationLink');
  const navigationLinkDisabledClass = `${navigationLinkClass}--disabled`;
  const navigationLinkSelectedClass = `${navigationLinkClass}--selected`;

  const className = classNames(navigationLinkClass, {
    [navigationLinkDisabledClass]: isDisabled,
    [navigationLinkSelectedClass]: isSelected,
  });

  return {
    classProps: className,
    props: restProps,
  };
}
