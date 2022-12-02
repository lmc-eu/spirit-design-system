import { renderHook } from '@testing-library/react-hooks';
import { useModalStyleProps } from '../useModalStyleProps';

describe('useModalStyleProps', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() => useModalStyleProps());

    expect(result.current.classProps.root).toBe('Modal');
    expect(result.current.classProps.content).toBe('Modal__content');
    expect(result.current.classProps.dialog).toBe('Modal__dialog');
    expect(result.current.classProps.header).toBe('Modal__header');
    expect(result.current.classProps.body).toBe('Modal__body');
    expect(result.current.classProps.footer).toBe('Modal__footer');
    expect(result.current.classProps.backdrop).toBe('Modal__backdrop');
  });
});
