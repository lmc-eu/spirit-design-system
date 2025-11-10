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
  const { limit, mode = TruncateModes.LINES, ...restProps } = props;

  const truncateClassName = useClassNamePrefix(mode === TruncateModes.LINES ? 'text-truncate-multiline' : '');
  const classProps = truncateClassName;

  const truncateStyle: TruncateCSSProperties = {};

  if (mode === TruncateModes.LINES && limit !== undefined) {
    truncateStyle['--text-truncate-lines'] = limit;
  }

  return {
    classProps,
    props: restProps,
    styleProps: truncateStyle,
    effectiveMode: mode,
    effectiveLimit: limit,
  };
};
