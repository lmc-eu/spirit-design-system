import { renderHook } from '@testing-library/react';
import { SpiritSectionProps } from '../../../types';
import { useSectionStyleProps } from '../useSectionStyleProps';

describe('useSectionStyleProps', () => {
  it('should return defaults', () => {
    const props: SpiritSectionProps = {};
    const { result } = renderHook(() => useSectionStyleProps(props));

    expect(result.current.classProps).toBe('');
  });

  it('should return background classProps', () => {
    const props: SpiritSectionProps = {
      backgroundColor: 'secondary',
    };
    const { result } = renderHook(() => useSectionStyleProps(props));

    expect(result.current.classProps).toBe('bg-secondary');
  });
});
