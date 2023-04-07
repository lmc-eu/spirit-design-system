import { Booleanish, ClickEvent, DropdownBreakpoint, DropdownFullWidthMode } from '../../types';

const NAME_ARIA_EXPANDED = 'aria-expanded';
const NAME_ARIA_CONTROLS = 'aria-controls';
/** @deprecated Will be removed in the next major version. */
const NAME_DATA_BREAKPOINT = 'data-breakpoint';
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
  /** breakpoint */
  /** @deprecated Will be removed in the next major version. */
  breakpoint: DropdownBreakpoint | undefined;
  fullWidthMode: DropdownFullWidthMode | undefined;
}

export interface UseDropdownAriaPropsReturn {
  /** content returned props */
  contentProps: {
    id: string;
    /** @deprecated Will be removed in the next major version. */
    [NAME_DATA_BREAKPOINT]?: DropdownBreakpoint | undefined;
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
  const { breakpoint, fullWidthMode, id, isOpen, toggleHandler } = props;

  const triggerProps = {
    id,
    [NAME_ARIA_EXPANDED]: isOpen,
    [NAME_ARIA_CONTROLS]: String(id),
    onClick: toggleHandler,
  };
  const contentProps = { id, [NAME_DATA_BREAKPOINT]: breakpoint, [NAME_DATA_FULLWIDTHMODE]: fullWidthMode };

  return {
    contentProps,
    triggerProps,
  };
};
