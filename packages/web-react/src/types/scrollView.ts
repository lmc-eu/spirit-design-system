import { ChildrenProps, DirectionDictionaryType, StyleProps } from './shared';

export type ScrollViewDirectionType = DirectionDictionaryType;
export type ScrollViewEdgeIndicatorType = 'borders' | 'shadows' | 'both';

export interface ScrollViewBaseProps extends ChildrenProps, StyleProps {
  direction?: ScrollViewDirectionType;
  edgeIndicators?: ScrollViewEdgeIndicatorType;
  isScrollbarDisabled?: boolean;
}

export interface SpiritScrollViewProps extends ScrollViewBaseProps {}
