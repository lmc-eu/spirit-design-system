import { FormEvent, FormEventHandler, MutableRefObject, ForwardedRef } from 'react';

export interface UseAdjustHeightProps {
  elementReference?: MutableRefObject<ForwardedRef<HTMLTextAreaElement>>;
  maxHeight: number;
  onInput?: FormEventHandler<HTMLTextAreaElement>;
  isAutoResizing?: boolean;
}

export interface UseAdjustHeightReturn {
  onInput: FormEventHandler<HTMLTextAreaElement>;
}

export const useAdjustHeight = ({
  elementReference,
  maxHeight,
  onInput,
  isAutoResizing,
}: UseAdjustHeightProps): UseAdjustHeightReturn => {
  const adjustHeight = (element: HTMLTextAreaElement) => {
    const borderTopWidth = parseFloat(getComputedStyle(element).getPropertyValue('border-top-width')) || 0;
    const borderBottomWidth = parseFloat(getComputedStyle(element).getPropertyValue('border-bottom-width')) || 0;
    const totalBorderWidth = borderTopWidth + borderBottomWidth;

    element.style.height = 'auto';
    element.style.overflow = 'auto';

    const totalHeight = element.scrollHeight + totalBorderWidth;

    element.style.height = `${totalHeight < maxHeight ? totalHeight : maxHeight}px`;
    element.style.overflow = totalHeight < maxHeight ? 'hidden' : 'auto';
  };

  const inputHandler = (event: FormEvent<HTMLTextAreaElement>) => {
    if (isAutoResizing) {
      // Because of mixed props for input and textarea
      const textArea = elementReference?.current as unknown as HTMLTextAreaElement;

      if (textArea) {
        adjustHeight(textArea);
      }
    }

    if (onInput) {
      onInput(event);
    }
  };

  return {
    onInput: inputHandler,
  };
};
