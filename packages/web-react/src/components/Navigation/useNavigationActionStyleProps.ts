import classNames from 'classnames';
import { ElementType } from 'react';
import { useClassNamePrefix } from '../../hooks';
import { LinkProps, SpiritNavigationActionProps } from '../../types';

export interface NavigationActionStyles<E extends ElementType = 'p'> {
  /** className props */
  classProps: string | null;
  /** props to be passed to the input element */
  props: Partial<LinkProps<E>>;
}

export function useNavigationActionStyleProps<E extends ElementType = 'a'>(
  props: SpiritNavigationActionProps<E>,
): NavigationActionStyles<E> {
  const { isDisabled, isSelected, ...restProps } = props;

  const navigationActionClass = useClassNamePrefix('NavigationAction');
  const navigationActionDisabledClass = `${navigationActionClass}--disabled`;
  const navigationActionSelectedClass = `${navigationActionClass}--selected`;

  const className = classNames(navigationActionClass, {
    [navigationActionDisabledClass]: isDisabled,
    [navigationActionSelectedClass]: isSelected,
  });

  return {
    classProps: className,
    props: restProps,
  };
}
