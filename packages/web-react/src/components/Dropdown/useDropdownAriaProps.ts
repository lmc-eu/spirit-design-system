import { Booleanish, ClickEvent } from '../../types';

const NAME_ARIA_EXPANDED = 'aria-expanded';
const NAME_ARIA_CONTROLS = 'aria-controls';

export interface UseDropdownAriaPropsProps {
  /** element ID */
  id: string;
  /** open state */
  isOpen: boolean;
  /** toggle callback */
  toggleHandler: (event: ClickEvent) => void;
}

export interface UseDropdownAriaPropsReturn {
  /** trigger returned props */
  wrapperProps: {
    id: string;
  };
  /** trigger returned props */
  triggerProps: {
    [NAME_ARIA_EXPANDED]: Booleanish;
    [NAME_ARIA_CONTROLS]: string;
    onClick: (event: ClickEvent) => void;
  };
}

export const useDropdownAriaProps = (props: UseDropdownAriaPropsProps): UseDropdownAriaPropsReturn => {
  const { id, isOpen, toggleHandler } = props;

  const triggerProps = {
    id,
    [NAME_ARIA_EXPANDED]: isOpen,
    [NAME_ARIA_CONTROLS]: String(id),
    onClick: toggleHandler,
  };
  const wrapperProps = { id };

  return {
    wrapperProps,
    triggerProps,
  };
};
