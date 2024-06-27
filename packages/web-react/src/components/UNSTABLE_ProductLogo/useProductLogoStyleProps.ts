import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { SpiritProductLogoProps } from '../../types/productLogo';

export interface ProductLogoStyles<T> {
  classProps: string;
  props: T;
}

export function useProductLogoStyleProps(props: SpiritProductLogoProps): ProductLogoStyles<SpiritProductLogoProps> {
  const { isInverted } = props;

  const productLogoClass = useClassNamePrefix('UNSTABLE_ProductLogo');
  const productLogoInvertedColorClass = `${productLogoClass}--inverted`;
  const classProps = classNames(productLogoClass, {
    [productLogoInvertedColorClass]: isInverted,
  });

  return {
    classProps,
    props,
  };
}
