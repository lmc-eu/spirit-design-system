import { renderHook } from '@testing-library/react';
import { TIMELINE_MARKER } from '../constants';
import { useTimelineStyleProps } from '../useTimelineStyleProps';

describe('useTimelineStyleProps', () => {
  it('should return default classes when no props provided', () => {
    const { result } = renderHook(() => useTimelineStyleProps());

    expect(result.current.classProps).toEqual({
      content: 'TimelineContent',
      heading: 'TimelineHeading',
      marker: 'TimelineMarker',
      root: 'Timeline',
      step: 'TimelineStep',
    });
    expect(result.current.props).toEqual({});
  });

  Object.values(TIMELINE_MARKER).forEach((variant) => {
    it(`should apply ${variant} variant class`, () => {
      const { result } = renderHook(() => useTimelineStyleProps({ markerVariant: variant }));

      expect(result.current.classProps.marker).toBe(`TimelineMarker TimelineMarker--${variant}`);
    });
  });

  it('should return default class when no variant is specified', () => {
    const { result } = renderHook(() =>
      useTimelineStyleProps({
        markerVariant: undefined,
      }),
    );

    expect(result.current.classProps.marker).toBe('TimelineMarker');
  });

  [TIMELINE_MARKER.DOT, TIMELINE_MARKER.NUMBER].forEach((variant) => {
    it(`should apply background color, border color and text color class when variant is ${variant}`, () => {
      const { result } = renderHook(() =>
        useTimelineStyleProps({
          markerVariant: variant,
          markerBackgroundColor: 'emotion-success-subtle',
          markerBorderColor: 'emotion-success-basic',
          markerTextColor: 'emotion-success-basic',
        }),
      );

      expect(result.current.classProps.marker).toBe(
        `TimelineMarker TimelineMarker--${variant} bg-emotion-success-subtle border-emotion-success-basic text-emotion-success-basic`,
      );
    });
  });

  it('should apply only text color when variant is icon', () => {
    const { result } = renderHook(() =>
      useTimelineStyleProps({
        markerVariant: 'icon',
        markerBackgroundColor: 'emotion-success-subtle',
        markerBorderColor: 'emotion-success-basic',
        markerTextColor: 'emotion-success-basic',
      }),
    );

    expect(result.current.classProps.marker).toBe('TimelineMarker TimelineMarker--icon text-emotion-success-basic');
  });
});
