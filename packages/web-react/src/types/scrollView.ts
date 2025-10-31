import type { RefObject } from 'react';
import { type ChildrenProps, type DirectionDictionaryType, type StyleProps } from './shared';

export type ScrollViewDirectionType = DirectionDictionaryType;
export type ScrollViewOverflowDecoratorsType = 'borders' | 'shadows' | 'both';

export type ScrollViewArrowsAriaLabelType = {
  top?: string;
  bottom?: string;
  start?: string;
  end?: string;
};

export type ScrollViewArrowsScrollStepType = number;

interface ScrollViewArrowsBaseProps {
  ariaLabelArrows?: ScrollViewArrowsAriaLabelType;
  direction: ScrollViewDirectionType;
  scrollStep: ScrollViewArrowsScrollStepType;
  viewportRef: RefObject<HTMLDivElement>;
}

export interface ScrollViewBaseProps extends ChildrenProps, StyleProps {
  ariaLabelArrows?: ScrollViewArrowsAriaLabelType;
  arrowsScrollStep?: ScrollViewArrowsScrollStepType;
  direction?: ScrollViewDirectionType;
  hasArrows?: boolean;
  isScrollbarDisabled?: boolean;
  overflowDecorators?: ScrollViewOverflowDecoratorsType;
}

export interface SpiritScrollViewProps extends ScrollViewBaseProps {}
export interface SpiritScrollViewArrowsProps extends ScrollViewArrowsBaseProps {}
