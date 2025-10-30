import { useCallback } from 'react';
import { type ClickEvent } from '../types';

export const useClick = (isDisabled?: boolean, onClick?: (event: ClickEvent) => void) =>
  useCallback(
    (event: ClickEvent) => {
      if (isDisabled) {
        event.preventDefault();

        return;
      }

      if (onClick) {
        onClick(event);
      }
    },
    [isDisabled, onClick],
  );
