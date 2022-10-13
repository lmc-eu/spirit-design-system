import { renderHook } from '@testing-library/react-hooks';
import { useModalStyleProps } from '../useModalStyleProps';

describe('useModalStyleProps', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() => useModalStyleProps());

    expect(result.current.modalClassName).toBe('Modal');
    expect(result.current.modalBodyClassName).toBe('Modal__body');
    expect(result.current.modalCloseButtonClassName).toBe('Modal__close');
    expect(result.current.modalContentClassName).toBe('Modal__content');
    expect(result.current.modalDialogClassName).toBe('Modal__dialog');
    expect(result.current.modalFooterClassName).toBe('Modal__footer');
    expect(result.current.modalHeaderClassName).toBe('Modal__header');
  });
});
