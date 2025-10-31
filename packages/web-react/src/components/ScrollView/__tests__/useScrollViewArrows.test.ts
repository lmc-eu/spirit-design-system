import { renderHook } from '@testing-library/react';
import {
  SCROLL_VIEW_ARROWS_LABEL_HORIZONTAL_END,
  SCROLL_VIEW_ARROWS_LABEL_HORIZONTAL_START,
  SCROLL_VIEW_ARROWS_LABEL_VERTICAL_END,
  SCROLL_VIEW_ARROWS_LABEL_VERTICAL_START,
} from '../constants';
import { useScrollViewArrows } from '../useScrollViewArrows';

describe('useScrollViewArrows', () => {
  it('should return default horizontal arrows configuration', () => {
    const { result } = renderHook(() => useScrollViewArrows(true));

    expect(result.current.arrows).toHaveLength(2);
    expect(result.current.arrows[0]).toEqual({
      icon: 'chevron-left',
      label: SCROLL_VIEW_ARROWS_LABEL_HORIZONTAL_START,
      step: -300,
    });
    expect(result.current.arrows[1]).toEqual({
      icon: 'chevron-right',
      label: SCROLL_VIEW_ARROWS_LABEL_HORIZONTAL_END,
      step: 300,
    });
  });

  it('should return default vertical arrows configuration', () => {
    const { result } = renderHook(() => useScrollViewArrows(false));

    expect(result.current.arrows).toHaveLength(2);
    expect(result.current.arrows[0]).toEqual({
      icon: 'chevron-up',
      label: SCROLL_VIEW_ARROWS_LABEL_VERTICAL_START,
      step: -300,
    });
    expect(result.current.arrows[1]).toEqual({
      icon: 'chevron-down',
      label: SCROLL_VIEW_ARROWS_LABEL_VERTICAL_END,
      step: 300,
    });
  });

  it('should use custom scrollStep', () => {
    const { result } = renderHook(() => useScrollViewArrows(true, undefined, 100));

    expect(result.current.arrows[0].step).toBe(-100);
    expect(result.current.arrows[1].step).toBe(100);
  });

  describe('custom ariaLabelArrows', () => {
    it.each([
      {
        isHorizontal: true,
        ariaLabelArrows: { start: 'Custom Left' },
        expectedFirstLabel: 'Custom Left',
        expectedSecondLabel: SCROLL_VIEW_ARROWS_LABEL_HORIZONTAL_END,
        description: 'should override horizontal start label',
      },
      {
        isHorizontal: true,
        ariaLabelArrows: { end: 'Custom Right' },
        expectedFirstLabel: SCROLL_VIEW_ARROWS_LABEL_HORIZONTAL_START,
        expectedSecondLabel: 'Custom Right',
        description: 'should override horizontal end label',
      },
      {
        isHorizontal: true,
        ariaLabelArrows: { start: 'Custom Left', end: 'Custom Right' },
        expectedFirstLabel: 'Custom Left',
        expectedSecondLabel: 'Custom Right',
        description: 'should override both horizontal labels',
      },
      {
        isHorizontal: false,
        ariaLabelArrows: { top: 'Custom Up' },
        expectedFirstLabel: 'Custom Up',
        expectedSecondLabel: SCROLL_VIEW_ARROWS_LABEL_VERTICAL_END,
        description: 'should override vertical top label',
      },
      {
        isHorizontal: false,
        ariaLabelArrows: { bottom: 'Custom Down' },
        expectedFirstLabel: SCROLL_VIEW_ARROWS_LABEL_VERTICAL_START,
        expectedSecondLabel: 'Custom Down',
        description: 'should override vertical bottom label',
      },
      {
        isHorizontal: false,
        ariaLabelArrows: { top: 'Custom Up', bottom: 'Custom Down' },
        expectedFirstLabel: 'Custom Up',
        expectedSecondLabel: 'Custom Down',
        description: 'should override both vertical labels',
      },
      {
        isHorizontal: true,
        ariaLabelArrows: { top: 'Custom Up', bottom: 'Custom Down' },
        expectedFirstLabel: SCROLL_VIEW_ARROWS_LABEL_HORIZONTAL_START,
        expectedSecondLabel: SCROLL_VIEW_ARROWS_LABEL_HORIZONTAL_END,
        description: 'should ignore vertical labels when direction is horizontal',
      },
      {
        isHorizontal: false,
        ariaLabelArrows: { start: 'Custom Left', end: 'Custom Right' },
        expectedFirstLabel: SCROLL_VIEW_ARROWS_LABEL_VERTICAL_START,
        expectedSecondLabel: SCROLL_VIEW_ARROWS_LABEL_VERTICAL_END,
        description: 'should ignore horizontal labels when direction is vertical',
      },
    ])('$description', ({ isHorizontal, ariaLabelArrows, expectedFirstLabel, expectedSecondLabel }) => {
      const { result } = renderHook(() => useScrollViewArrows(isHorizontal, ariaLabelArrows));

      expect(result.current.arrows[0].label).toBe(expectedFirstLabel);
      expect(result.current.arrows[1].label).toBe(expectedSecondLabel);
    });
  });
});
