import { cssVariablePrefix } from '@lmc-eu/spirit-design-tokens';
import { type CSSProperties } from 'react';
import { useClassNamePrefix } from '../../hooks';
import { type SpiritCardMediaProps } from '../../types';

export interface UseCardMediaStylePropsReturn {
  /** className props */
  classProps: string;
  /** Style object with CSS variables */
  styleProps: CSSProperties;
}

export const useCardMediaStyleProps = (props: Partial<SpiritCardMediaProps>): UseCardMediaStylePropsReturn => {
  const { backgroundColor, fit } = props || {};
  const cardMediaBackgroundClassName = useClassNamePrefix(`bg-${backgroundColor}`);

  const cardMediaBackgroundColor = backgroundColor ? cardMediaBackgroundClassName : '';

  // Generate CSS variable for fit
  const cardMediaStyle: CSSProperties = fit
    ? ({ [`--${cssVariablePrefix}card-media-object-fit`]: fit } as CSSProperties)
    : {};

  return {
    classProps: cardMediaBackgroundColor,
    styleProps: cardMediaStyle,
  };
};
