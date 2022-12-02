import { useRef, useEffect, MutableRefObject } from 'react';

export const useLastActiveFocus = (isOpen: boolean) => {
  const lastActiveElement: MutableRefObject<HTMLElement | null> = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // casting type from Element to HTMLElement, because Element does not have focus()
      lastActiveElement.current = document.activeElement as HTMLElement;
    } else if (lastActiveElement?.current) {
      lastActiveElement.current.focus();
    }
  }, [isOpen]);
};
