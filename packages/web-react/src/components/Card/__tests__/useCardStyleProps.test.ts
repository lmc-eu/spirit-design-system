import { renderHook } from '@testing-library/react';
import { UseCardStyleProps, useCardStyleProps } from '../useCardStyleProps';
import { defaultExpectedClasses, textPropsDataProvider } from './__fixtures__/CardStylePropsDataProvider';

describe('useCardStyleProps', () => {
  it('should return defaults', () => {
    const props: UseCardStyleProps = {};
    const { result } = renderHook(() => useCardStyleProps(props));

    expect(result.current.classProps).toEqual(defaultExpectedClasses);
  });

  it.each(textPropsDataProvider)('should %s', ({ props, expected }) => {
    const { result } = renderHook(() => useCardStyleProps(props));

    expect(result.current.classProps).toEqual(expected.classProps);
  });
});
