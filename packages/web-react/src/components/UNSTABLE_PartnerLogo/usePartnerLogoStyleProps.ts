import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { SpiritPartnerLogoProps } from '../../types/partnerLogo';

export interface PartnerLogoStyles<T> {
  classProps: string;
  props: T;
}

export function usePartnerLogoStyleProps(props: SpiritPartnerLogoProps): PartnerLogoStyles<SpiritPartnerLogoProps> {
  const { size, hasSafeAreaDisabled, ...restProps } = props;

  const partnerLogoClass = useClassNamePrefix('UNSTABLE_PartnerLogo');
  const partnerLogoSizeClass = `${partnerLogoClass}--${size}`;
  const partnerLogoSafeAreaDisabledClass = `${partnerLogoClass}--hasSafeAreaDisabled`;
  const classProps = classNames(partnerLogoClass, {
    [partnerLogoSizeClass]: size,
    [partnerLogoSafeAreaDisabledClass]: hasSafeAreaDisabled,
  });

  return {
    classProps,
    props: restProps,
  };
}
