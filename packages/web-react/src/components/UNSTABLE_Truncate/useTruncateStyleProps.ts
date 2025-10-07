import { type CSSProperties, type ElementType } from 'react';
import { useClassNamePrefix } from '../../hooks';
import { type SpiritTruncateProps, type TruncateMode, TruncateModes } from '../../types';

interface TruncateCSSProperties extends CSSProperties {
  '--text-truncate-lines'?: number;
}

export interface TruncateStyles<T extends ElementType> {
  classProps: string;
  props: SpiritTruncateProps<T>;
  styleProps: TruncateCSSProperties;
  effectiveMode: TruncateMode;
  effectiveLimit?: number;
}

export const useTruncateStyleProps = <T extends ElementType>(props: SpiritTruncateProps<T>): TruncateStyles<T> => {
  const { limit, lines, mode = TruncateModes.LINES, ...restProps } = props;

  // @deprecated remove when lines prop is removed
  const effectiveMode = lines !== undefined ? TruncateModes.LINES : mode;
  const effectiveLimit = lines !== undefined ? lines : limit;

  const truncateClassName = useClassNamePrefix(effectiveMode === TruncateModes.LINES ? 'text-truncate-multiline' : '');
  const classProps = truncateClassName;

  const truncateStyle: TruncateCSSProperties = {};

  if (effectiveMode === TruncateModes.LINES && effectiveLimit !== undefined) {
    truncateStyle['--text-truncate-lines'] = effectiveLimit;
  }

  return {
    classProps,
    props: restProps,
    styleProps: truncateStyle,
    effectiveMode,
    effectiveLimit,
  };
};
