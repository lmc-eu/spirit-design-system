import { renderHook } from '@testing-library/react-hooks';
import { SpiritToastProps } from '../../../types';
import { useToastStyleProps } from '../useToastStyleProps';

describe('useToastStyleProps', () => {
  it('should return alignment classes', () => {
    const props = { alignmentX: 'center', alignmentY: 'bottom' } as SpiritToastProps;
    const { result } = renderHook(() => useToastStyleProps(props));

    expect(result.current.classProps.root).toBe('Toast Toast--center Toast--bottom');
    expect(result.current.classProps.queue).toBe('Toast__queue');
  });

  it('should return responsive alignment classes', () => {
    const props = {
      alignmentX: { desktop: 'left', tablet: 'center', mobile: 'right' },
      alignmentY: { desktop: 'top', tablet: 'bottom', mobile: 'top' },
    } as SpiritToastProps;
    const { result } = renderHook(() => useToastStyleProps(props));

    expect(result.current.classProps.root).toBe(
      'Toast Toast--desktop--left Toast--tablet--center Toast--right Toast--desktop--top Toast--tablet--bottom Toast--top',
    );
  });
});
