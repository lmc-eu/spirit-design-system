import { type ScrollViewArrowsAriaLabelType, type ScrollViewArrowsScrollStepType } from '../../types';
import {
  SCROLL_VIEW_ARROWS_LABEL_HORIZONTAL_END,
  SCROLL_VIEW_ARROWS_LABEL_HORIZONTAL_START,
  SCROLL_VIEW_ARROWS_LABEL_VERTICAL_END,
  SCROLL_VIEW_ARROWS_LABEL_VERTICAL_START,
} from './constants';

const getDefaultArrowLabels = (
  isHorizontal: boolean,
): {
  start?: string;
  end?: string;
  top?: string;
  bottom?: string;
} =>
  isHorizontal
    ? {
        start: SCROLL_VIEW_ARROWS_LABEL_HORIZONTAL_START,
        end: SCROLL_VIEW_ARROWS_LABEL_HORIZONTAL_END,
      }
    : {
        top: SCROLL_VIEW_ARROWS_LABEL_VERTICAL_START,
        bottom: SCROLL_VIEW_ARROWS_LABEL_VERTICAL_END,
      };

export interface UseScrollViewArrowsReturn {
  arrows: Array<{
    icon: string;
    label: string;
    step: ScrollViewArrowsScrollStepType;
  }>;
}

export const useScrollViewArrows = (
  isHorizontal: boolean,
  ariaLabelArrows?: ScrollViewArrowsAriaLabelType,
  scrollStep: ScrollViewArrowsScrollStepType = 300,
): UseScrollViewArrowsReturn => {
  const defaultArrowLabels = getDefaultArrowLabels(isHorizontal);
  const mergedArrowLabels = { ...defaultArrowLabels, ...ariaLabelArrows };

  const arrows = [
    {
      icon: isHorizontal ? 'chevron-left' : 'chevron-up',
      label: (isHorizontal
        ? (mergedArrowLabels.start ?? defaultArrowLabels.start)
        : (mergedArrowLabels.top ?? defaultArrowLabels.top)) as string,
      step: -scrollStep,
    },
    {
      icon: isHorizontal ? 'chevron-right' : 'chevron-down',
      label: (isHorizontal
        ? (mergedArrowLabels.end ?? defaultArrowLabels.end)
        : (mergedArrowLabels.bottom ?? defaultArrowLabels.bottom)) as string,
      step: scrollStep,
    },
  ];

  return { arrows };
};
