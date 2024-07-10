import { CSSProperties, ElementType } from 'react';
import { SpiritTruncateProps } from '../../types/truncate';

interface TruncateCSSProperties extends CSSProperties {
  '--text-truncate-lines'?: number;
}

export interface TruncateStyles<T extends ElementType> {
  classProps: string;
  props: SpiritTruncateProps<T>;
  styleProps: TruncateCSSProperties;
}

export function useTruncateStyleProps<T extends ElementType>(props: SpiritTruncateProps<T>): TruncateStyles<T> {
  const { lines, ...restProps } = props;

  const TruncateMultilinesClass = 'text-truncate-multiline';
  const classProps = TruncateMultilinesClass;

  const truncateStyle: TruncateCSSProperties = {};
  truncateStyle['--text-truncate-lines'] = lines;

  return {
    classProps,
    props: restProps,
    styleProps: truncateStyle,
  };
}
