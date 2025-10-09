import { useClassNamePrefix } from '../../hooks';
import { type SpiritSkipLinkProps } from '../../types';

export interface SkipLinkStyles {
  /** className props */
  classProps: string | null;
  /** props to be passed to the skip link element */
  props: Partial<SpiritSkipLinkProps>;
}

export function useSkipLinkStyleProps(props: SpiritSkipLinkProps): SkipLinkStyles {
  const { ...restProps } = props;

  const skipLinkClass = useClassNamePrefix('SkipLink');

  return {
    classProps: skipLinkClass,
    props: restProps,
  };
}
