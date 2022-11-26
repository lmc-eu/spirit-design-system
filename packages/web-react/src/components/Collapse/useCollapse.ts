import { useState } from 'react';
import { ClickEvent } from '../../types';

export interface CollapseReturn {
  /** collapse handler */
  toggleHandler: (event: ClickEvent) => void;
  /** collapsed state */
  collapsed: boolean;
}

export const useCollapse = (isCollapsed: boolean): CollapseReturn => {
  const [collapsed, setCollapsed] = useState<boolean>(!!isCollapsed);

  const collapseHandler = () => setCollapsed(!collapsed);

  const toggleHandler = (event: ClickEvent) => {
    event.preventDefault();
    collapseHandler();
  };

  return {
    toggleHandler,
    collapsed,
  };
};
