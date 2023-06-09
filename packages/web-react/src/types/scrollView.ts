import { ChildrenProps, DirectionDictionaryType, StyleProps } from './shared';

export type ScrollViewDirectionType = DirectionDictionaryType;
export type ScrollViewOverflowDecoratorsType = 'borders' | 'shadows' | 'both';

export interface ScrollViewBaseProps extends ChildrenProps, StyleProps {
  direction?: ScrollViewDirectionType;
  overflowDecorators?: ScrollViewOverflowDecoratorsType;
  isScrollbarDisabled?: boolean;
}

export interface SpiritScrollViewProps extends ScrollViewBaseProps {}
