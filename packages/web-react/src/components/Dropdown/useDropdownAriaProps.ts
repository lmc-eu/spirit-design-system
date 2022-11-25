import { Booleanish, ClickEvent, DropdownBreakpoint } from '../../types';

const NAME_ARIA_EXPANDED = 'aria-expanded';
const NAME_ARIA_CONTROLS = 'aria-controls';
const NAME_DATA_BREAKPOINT = 'data-breakpoint';

export interface UseDropdownAriaPropsProps {
  /** element ID */
  id: string;
  /** open state */
  isOpen: boolean;
  /** toggle callback */
  toggleHandler: (event: ClickEvent) => void;
  /** breakpoint */
  breakpoint: DropdownBreakpoint | undefined;
}

export interface UseDropdownAriaPropsReturn {
  /** content returned props */
  contentProps: {
    id: string;
    [NAME_DATA_BREAKPOINT]: DropdownBreakpoint | undefined;
  };
  /** trigger returned props */
  triggerProps: {
    [NAME_ARIA_EXPANDED]: Booleanish;
    [NAME_ARIA_CONTROLS]: string;
    onClick: (event: ClickEvent) => void;
  };
}

export const useDropdownAriaProps = (props: UseDropdownAriaPropsProps): UseDropdownAriaPropsReturn => {
  const { breakpoint, id, isOpen, toggleHandler } = props;

  const triggerProps = {
    id,
    [NAME_ARIA_EXPANDED]: isOpen,
    [NAME_ARIA_CONTROLS]: String(id),
    onClick: toggleHandler,
  };
  const contentProps = { id, [NAME_DATA_BREAKPOINT]: breakpoint };

  return {
    contentProps,
    triggerProps,
  };
};
