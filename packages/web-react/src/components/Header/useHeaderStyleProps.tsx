import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { HeaderProps, SpiritHeaderProps } from '../../types';

export interface HeaderStyles {
  /** className props */
  classProps: string;
  /** props to be passed to the header element */
  props: HeaderProps;
}

export function useHeaderStyleProps(props: SpiritHeaderProps): HeaderStyles {
  const { isSimple, isInverted, ...restProps } = props;

  const headerClass = useClassNamePrefix('Header');
  const headerInvertedClass = `${headerClass}--inverted`;
  const headerSimpleClass = `${headerClass}--simple`;

  return {
    classProps: classNames(headerClass, {
      [headerInvertedClass]: isInverted,
      [headerSimpleClass]: isSimple,
    }),
    props: restProps,
  };
}
