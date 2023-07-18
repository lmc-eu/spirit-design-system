import { Booleanish, ClickEvent, DropdownFullWidthMode } from '../../types';

const NAME_ARIA_EXPANDED = 'aria-expanded';
const NAME_ARIA_CONTROLS = 'aria-controls';
const NAME_DATA_FULLWIDTHMODE = 'data-fullwidthmode';

export enum fullWidthModeKeys {
  'off' = 'off',
  'mobile-only' = 'mobile-only',
  'all' = 'all',
}
export interface UseDropdownAriaPropsProps {
  /** element ID */
  id: string;
  /** open state */
  isOpen: boolean;
  /** toggle callback */
  toggleHandler: (event: ClickEvent) => void;
  /** fullWidthMode */
  fullWidthMode: DropdownFullWidthMode | undefined;
}

export interface UseDropdownAriaPropsReturn {
  /** content returned props */
  contentProps: {
    id: string;
    [NAME_DATA_FULLWIDTHMODE]?: keyof typeof fullWidthModeKeys | undefined;
  };
  /** trigger returned props */
  triggerProps: {
    [NAME_ARIA_EXPANDED]: Booleanish;
    [NAME_ARIA_CONTROLS]: string;
    onClick: (event: ClickEvent) => void;
  };
}

export const useDropdownAriaProps = (props: UseDropdownAriaPropsProps): UseDropdownAriaPropsReturn => {
  const { fullWidthMode, id, isOpen, toggleHandler } = props;

  const triggerProps = {
    id,
    [NAME_ARIA_EXPANDED]: isOpen,
    [NAME_ARIA_CONTROLS]: String(id),
    onClick: toggleHandler,
  };
  const contentProps = { id, [NAME_DATA_FULLWIDTHMODE]: fullWidthMode };

  return {
    contentProps,
    triggerProps,
  };
};
