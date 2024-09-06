import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { SpiritPartnerLogoProps } from '../../types/partnerLogo';

export interface PartnerLogoStyles<T> {
  classProps: string;
  props: T;
}

export function usePartnerLogoStyleProps(props: SpiritPartnerLogoProps): PartnerLogoStyles<SpiritPartnerLogoProps> {
  const { size, hasSafeArea, ...restProps } = props;

  const partnerLogoClass = useClassNamePrefix('UNSTABLE_PartnerLogo');
  const partnerLogoSizeClass = `${partnerLogoClass}--${size}`;
  const partnerLogoSafeAreaClass = `${partnerLogoClass}--safeArea`;
  const classProps = classNames(partnerLogoClass, {
    [partnerLogoSizeClass]: size,
    [partnerLogoSafeAreaClass]: hasSafeArea,
  });

  return {
    classProps,
    props: restProps,
  };
}
