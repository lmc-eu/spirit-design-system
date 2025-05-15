import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { SpiritHeaderProps } from '../../types';

export interface HeaderStyles<T> {
  classProps: {
    root: string;
    logo: string;
  };
  props: T;
}

export const useUnstableHeaderStyleProps = (props: SpiritHeaderProps): HeaderStyles<SpiritHeaderProps> => {
  const { hasBottomDivider = false, ...restProps } = props;

  const headerClass = useClassNamePrefix('UNSTABLE_Header');
  const headerLogoClass = `${headerClass}Logo`;
  const headerHasBottomDividerClass = `${headerClass}--bottomDivider`;

  const rootClass = classNames(headerClass, {
    [headerHasBottomDividerClass]: hasBottomDivider,
  });

  return {
    classProps: {
      root: rootClass,
      logo: headerLogoClass,
    },
    props: restProps,
  };
};
