import { useEffect, useState } from 'react';
import { ClickEvent, CollapseResponsiveType, CollapseBreakpointsType } from '../../types';

export interface useCollapseProps {
  collapsed?: boolean;
  responsive?: CollapseResponsiveType;
  breakpoints?: CollapseBreakpointsType;
}

export const useCollapse = (props: useCollapseProps) => {
  const { collapsed, responsive, breakpoints } = props;

  const [isCollapsed, setCollapsed] = useState<boolean>(!!collapsed);
  const [isTriggered, setTriggered] = useState(false);

  const breakpoint = {
    mobile: breakpoints?.mobile ? breakpoints.mobile : 0,
    tablet: breakpoints?.tablet ? breakpoints.tablet : 768,
    desktop: breakpoints?.desktop ? breakpoints.desktop : 1280,
  };

  const isResponsive = () => {
    const w = window.innerWidth;
    const mobile = w >= breakpoint.mobile && responsive === 'mobile';
    const tablet = w >= breakpoint.tablet && responsive === 'tablet';
    const desktop = w >= breakpoint.desktop && responsive === 'desktop';

    return {
      mobile,
      tablet,
      desktop,
      anyOf: mobile || tablet || desktop,
    };
  };

  const collapseHandler = () => {
    setCollapsed(!isCollapsed);
    if (!isTriggered) setTriggered(true);
  };

  const adjustHeight = () => {
    if (responsive) setCollapsed(isResponsive().anyOf);
  };

  const toggleHandler = (event: ClickEvent) => {
    event.preventDefault();
    collapseHandler();
  };

  useEffect(() => {
    adjustHeight();
    window.addEventListener('resize', adjustHeight);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    toggleHandler,
    isTriggerHidden: !!responsive && isResponsive()[responsive],
    isCollapsed,
    isTriggered,
  };
};
