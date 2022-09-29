import { useState } from 'react';
import { ClickEvent } from '../../types';

export interface useCollapseProps {
  collapsed?: boolean;
}

export const useCollapse = (props: useCollapseProps) => {
  const { collapsed } = props;

  const [isCollapsed, setCollapsed] = useState<boolean>(!!collapsed);
  const [isTriggered, setTriggered] = useState(false);

  const collapseHandler = () => {
    setCollapsed(!isCollapsed);
    if (!isTriggered) setTriggered(true);
  };

  const toggleHandler = (event: ClickEvent) => {
    event.preventDefault();
    collapseHandler();
  };

  return {
    toggleHandler,
    isCollapsed,
    isTriggered,
  };
};
