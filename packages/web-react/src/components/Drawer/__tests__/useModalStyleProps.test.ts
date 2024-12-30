import { renderHook } from '@testing-library/react';
import { useModalStyleProps } from '../useModalStyleProps';

describe('useModalStyleProps', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() => useModalStyleProps({}));

    expect(result.current.classProps.root).toBe('Modal Modal--center');
    expect(result.current.classProps.dialog).toBe('ModalDialog');
    expect(result.current.classProps.title).toBe('ModalHeader__title');
    expect(result.current.classProps.header).toBe('ModalHeader');
    expect(result.current.classProps.body).toBe('ModalBody');
    expect(result.current.classProps.footer.root).toBe('ModalFooter ModalFooter--right');
    expect(result.current.classProps.footer.description).toBe('ModalFooter__description');
    expect(result.current.classProps.footer.actions).toBe('ModalFooter__actions');
  });
});
