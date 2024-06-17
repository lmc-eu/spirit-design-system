import { act, renderHook } from '@testing-library/react';
import { FormEvent, MutableRefObject } from 'react';
import { useAdjustHeight } from '../useAdjustHeight';

describe('useAdjustHeight', () => {
  it('should adjust the height of the textarea element', () => {
    const elementReference: MutableRefObject<HTMLTextAreaElement> = {
      current: document.createElement('textarea'),
    };
    const maxHeight = 200;
    const onInput = jest.fn();
    const isAutoResizing = true;

    // @ts-expect-error -- Type 'MutableRefObject<HTMLTextAreaElement>' is not assignable to type 'MutableRefObject<ForwardedRef<HTMLTextAreaElement>>'.
    const { result } = renderHook(() => useAdjustHeight({ elementReference, maxHeight, onInput, isAutoResizing }));

    const { adjustHeight, adjustHeightOnAutoresize, onInput: inputHandler } = result.current;

    act(() => {
      adjustHeight(elementReference.current);
    });

    expect(elementReference.current.style.height).toBe('2px');
    expect(elementReference.current.style.overflow).toBe('hidden');

    const event = new Event('input') as unknown as FormEvent<HTMLTextAreaElement>;

    act(() => {
      inputHandler(event);
    });

    expect(adjustHeightOnAutoresize).toBeDefined();
    expect(onInput).toHaveBeenCalledWith(event);
  });
});
