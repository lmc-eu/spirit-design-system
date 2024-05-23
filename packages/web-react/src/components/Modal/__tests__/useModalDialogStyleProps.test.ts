import { renderHook } from '@testing-library/react-hooks';
import { useModalDialogStyleProps } from '../useModalDialogStyleProps';

describe('useModalDialogStyleProps', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() => useModalDialogStyleProps({}));

    expect(result.current.modalDialogStyleProps).toEqual({});
  });

  it('should return height', () => {
    const { result } = renderHook(() => useModalDialogStyleProps({ height: '100px' }));

    expect(result.current.modalDialogStyleProps).toEqual({ '--modal-dialog-height': '100px' });
  });

  it('should return maxHeight', () => {
    const { result } = renderHook(() => useModalDialogStyleProps({ maxHeight: '100px' }));

    expect(result.current.modalDialogStyleProps).toEqual({ '--modal-dialog-max-height': '100px' });
  });

  it('should return height and maxHeight', () => {
    const { result } = renderHook(() => useModalDialogStyleProps({ height: '100px', maxHeight: '200px' }));

    expect(result.current.modalDialogStyleProps).toEqual({
      '--modal-dialog-height': '100px',
      '--modal-dialog-max-height': '200px',
    });
  });

  it('should return height and maxHeight object', () => {
    const { result } = renderHook(() =>
      useModalDialogStyleProps({ height: { mobile: '100px' }, maxHeight: { tablet: '200px', desktop: '300px' } }),
    );

    expect(result.current.modalDialogStyleProps).toEqual({
      '--modal-dialog-height': '100px',
      '--modal-dialog-max-height-tablet': '200px',
      '--modal-dialog-max-height-desktop': '300px',
    });
  });
});
