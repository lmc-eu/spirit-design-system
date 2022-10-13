import { renderHook } from '@testing-library/react-hooks';
import { useModal, useSpiritModalProps } from '../useModal';

describe('useModal', () => {
  it('should test values', () => {
    const props = { isOpen: true } as useSpiritModalProps;
    const { result } = renderHook(() => useModal(props));

    expect(result.current.isOpen).toBe(true);

    result.current.isOpen = false;

    expect(result.current.isOpen).toBe(false);
  });
});
