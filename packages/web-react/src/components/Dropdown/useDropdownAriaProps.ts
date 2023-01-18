import { Booleanish, ClickEvent, DropdownBreakpoint, DropdownFullwidthMode } from '../../types';

const NAME_ARIA_EXPANDED = 'aria-expanded';
const NAME_ARIA_CONTROLS = 'aria-controls';
/* @deprecated (https://jira.lmc.cz/browse/DS-493) --> */
const NAME_DATA_BREAKPOINT = 'data-breakpoint';
/* <-- end of @deprecated */
const NAME_DATA_FULLWIDTHMODE = 'data-fullwidthmode';

export enum fullwidthmodeKeys {
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
  /* @deprecated (https://jira.lmc.cz/browse/DS-493) --> */
  breakpoint: DropdownBreakpoint | undefined;
  /* <-- end of @deprecated */
  fullwidthMode: DropdownFullwidthMode | undefined;
}

export interface UseDropdownAriaPropsReturn {
  /** content returned props */
  contentProps: {
    id: string;
    /* @deprecated (https://jira.lmc.cz/browse/DS-493) --> */
    [NAME_DATA_BREAKPOINT]?: DropdownBreakpoint | undefined;
    /* <-- end of @deprecated */
    [NAME_DATA_FULLWIDTHMODE]?: keyof typeof fullwidthmodeKeys | undefined;
  };
  /** trigger returned props */
  triggerProps: {
    [NAME_ARIA_EXPANDED]: Booleanish;
    [NAME_ARIA_CONTROLS]: string;
    onClick: (event: ClickEvent) => void;
  };
}

export const useDropdownAriaProps = (props: UseDropdownAriaPropsProps): UseDropdownAriaPropsReturn => {
  const { breakpoint, fullwidthMode, id, isOpen, toggleHandler } = props;

  const triggerProps = {
    id,
    [NAME_ARIA_EXPANDED]: isOpen,
    [NAME_ARIA_CONTROLS]: String(id),
    onClick: toggleHandler,
  };
  const contentProps = { id, [NAME_DATA_BREAKPOINT]: breakpoint, [NAME_DATA_FULLWIDTHMODE]: fullwidthMode };

  return {
    contentProps,
    triggerProps,
  };
};
