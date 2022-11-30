import { useState } from 'react';
import { ClickEvent } from '../../types';

export interface CollapseReturn {
  /** collapse event handler */
  toggleHandler: (event: ClickEvent) => void;
  /** collapse toggle */
  toggle: (isOpen: boolean) => void;
  /** collapsed state */
  isOpen: boolean;
}

export const useCollapse = (defaultOpenState: boolean): CollapseReturn => {
  const [isOpen, toggle] = useState<boolean>(defaultOpenState);

  const toggleHandler = (event: ClickEvent) => {
    event.preventDefault();
    toggle(!isOpen);
  };

  return {
    toggleHandler,
    toggle,
    isOpen,
  };
};
