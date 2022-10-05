import { useState } from 'react';
import { ClickEvent, SpiritCollapseProps } from '../../types';

export interface CollapseReturn {
  /** collapse handler */
  toggleHandler: (event: ClickEvent) => void;
  /** collapsed state */
  collapsed: boolean;
}

export const useCollapse = ({ isCollapsed }: SpiritCollapseProps): CollapseReturn => {
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
