import React, { useMemo, createElement, useRef } from 'react';
import { CollapseProps } from '../../types';
import { useCollapse } from './useCollapse';
import { useCollapseStyle } from './useCollapseStyle';

const Collapse = (props: CollapseProps) => {
  const {
    id,
    children,
    collapsed,
    responsive,
    elementType,
    contentProps,
    renderTrigger,
    hideOnCollapse,
    UNSAFE_className,
    UNSAFE_style,
    breakpoints,
  } = props;

  const contentElementRef = useRef();

  const { toggleHandler, isTriggerHidden, isCollapsed, isTriggered } = useCollapse({
    responsive,
    collapsed,
    breakpoints,
  });

  const {
    triggerProps: updateTriggerProps,
    wrapperProps: updatedWrapperProps,
    contentProps: updatedContentProps,
  } = useCollapseStyle({
    id,
    responsive,
    contentProps,
    onToggle: toggleHandler,
    collapsed: isCollapsed,
    contentRef: contentElementRef,
    wrapperClassName: UNSAFE_className,
    wrapperStyle: UNSAFE_style,
  });

  const content = createElement(contentProps?.elementType || 'div', updatedContentProps, children);

  const trigger = useMemo(() => {
    const show = !(hideOnCollapse && isTriggered);
    if (renderTrigger && show)
      return renderTrigger({
        collapsed: isCollapsed,
        trigger: updateTriggerProps,
        triggerHidden: isTriggerHidden,
      });

    return null;
  }, [renderTrigger, updateTriggerProps, hideOnCollapse, isTriggered, isCollapsed, isTriggerHidden]);

  const wrapper = useMemo(() => {
    if (hideOnCollapse) {
      return isCollapsed && children;
    }

    return createElement(elementType || 'div', updatedWrapperProps, content);
  }, [isCollapsed, content, children, elementType, hideOnCollapse, updatedWrapperProps]);

  return (
    <>
      {trigger}
      {wrapper}
    </>
  );
};

export default Collapse;
