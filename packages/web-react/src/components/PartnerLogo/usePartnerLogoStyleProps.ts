import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { type SpiritPartnerLogoProps } from '../../types';
import { getSizeClassName } from './getSizeClassName';

export interface PartnerLogoStyles<T> {
  classProps: string;
  props: T;
}

export const usePartnerLogoStyleProps = (props: SpiritPartnerLogoProps): PartnerLogoStyles<SpiritPartnerLogoProps> => {
  const { hasSafeArea, isFluid, size, ...restProps } = props;

  const partnerLogoClass = useClassNamePrefix('PartnerLogo');
  const partnerLogoFluidClass = `${partnerLogoClass}--fluid`;
  const partnerLogoSafeAreaClass = `${partnerLogoClass}--safeArea`;
  const partnerLogoSizeClass = getSizeClassName(partnerLogoClass, size);

  const classProps = classNames(
    partnerLogoClass,
    {
      [partnerLogoFluidClass]: isFluid,
      [partnerLogoSafeAreaClass]: hasSafeArea,
    },
    partnerLogoSizeClass,
  );

  return {
    classProps,
    props: restProps,
  };
};
