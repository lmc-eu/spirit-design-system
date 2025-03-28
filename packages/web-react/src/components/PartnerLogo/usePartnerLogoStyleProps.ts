import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { SpiritPartnerLogoProps } from '../../types/partnerLogo';

export interface PartnerLogoStyles<T> {
  classProps: string;
  props: T;
}

export const usePartnerLogoStyleProps = (props: SpiritPartnerLogoProps): PartnerLogoStyles<SpiritPartnerLogoProps> => {
  const { hasSafeArea, isFluid, size, ...restProps } = props;

  const partnerLogoClass = useClassNamePrefix('PartnerLogo');
  const partnerLogoFluidClass = `${partnerLogoClass}--fluid`;
  const partnerLogoSafeAreaClass = `${partnerLogoClass}--safeArea`;
  const partnerLogoSizeClass = `${partnerLogoClass}--${size}`;

  const classProps = classNames(partnerLogoClass, {
    [partnerLogoFluidClass]: isFluid,
    [partnerLogoSafeAreaClass]: hasSafeArea,
    [partnerLogoSizeClass]: size,
  });

  return {
    classProps,
    props: restProps,
  };
};
