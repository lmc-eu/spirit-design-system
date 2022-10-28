import { useState, MutableRefObject } from 'react';
import { ClickEvent } from '../../types';
import { useClickOutside } from '../../hooks';

export interface UseDropdownProps {
  /** dropdown element reference */
  dropdownRef: MutableRefObject<HTMLElement | undefined>;
  /** trigger element reference */
  triggerRef: MutableRefObject<HTMLElement | undefined>;
  /** disabled click outside event */
  disableAutoClose?: boolean;
}

export interface UseDropdownReturn {
  /** collapse handler */
  toggleHandler: (event: ClickEvent) => void;
  /** collapsed state */
  isOpen: boolean;
}

export const useDropdown = ({
  dropdownRef,
  triggerRef,
  disableAutoClose = false,
}: UseDropdownProps): UseDropdownReturn => {
  const [open, setOpen] = useState<boolean>(false);

  const collapseHandler = () => setOpen(!open);

  const toggleHandler = (event: ClickEvent) => {
    event.preventDefault();
    collapseHandler();
  };

  const closeHandler = (event: Event) => {
    if (disableAutoClose) return;

    if (!triggerRef?.current?.contains(event?.target as Node)) {
      setOpen(false);
    }
  };

  useClickOutside({ ref: dropdownRef, callback: closeHandler });

  return {
    toggleHandler,
    isOpen: open,
  };
};
