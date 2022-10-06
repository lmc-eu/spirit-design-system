import React, { createElement } from 'react';
import { SpiritCollapseProps } from '../../types';
import { useStyleProps } from '../../hooks/styleProps';
import { useCollapse } from './useCollapse';
import { useCollapseStyleProps } from './useCollapseStyleProps';
import { useCollapseAriaProps } from './useCollapseAriaProps';

const Collapse = (props: SpiritCollapseProps) => {
  const {
    id = Math.random().toString(36).slice(2, 7),
    elementType = 'div',
    contentElementType = 'div',
    collapsibleToBreakpoint = undefined,
    children,
    isCollapsed,
    hideOnCollapse,
    renderTrigger,
    ...rest
  } = props;

  const { collapsed, toggleHandler } = useCollapse({
    isCollapsed,
  });
  const { wrapperClassName, contentClassName, triggerClassName } = useCollapseStyleProps({
    isCollapsed: collapsed,
  });
  const { wrapperProps, contentProps, triggerProps } = useCollapseAriaProps({
    id,
    collapsibleToBreakpoint,
    toggleHandler,
    isCollapsed: collapsed,
  });

  const { styleProps: wrapperStyleProps, props: wrapperOtherProps } = useStyleProps({ ...rest });
  const { styleProps: triggerStyleProps } = useStyleProps({
    UNSAFE_className: triggerClassName,
  });

  const content = createElement(
    contentElementType,
    {
      className: contentClassName,
      ...contentProps,
    },
    children,
  );

  const triggerRenderHandler = () => {
    const show = hideOnCollapse ? !(hideOnCollapse && collapsed) : true;
    if (renderTrigger && show)
      return renderTrigger({
        collapsed,
        trigger: {
          ...triggerStyleProps,
          ...triggerProps,
        },
      });

    return null;
  };

  const wrapperRenderHandler = () => {
    if (hideOnCollapse && collapsed) {
      return children;
    }

    return createElement(
      elementType || 'div',
      {
        ...wrapperOtherProps,
        ...wrapperStyleProps,
        ...wrapperProps,
        className: wrapperClassName,
      },
      content,
    );
  };

  return (
    <>
      {triggerRenderHandler()}
      {wrapperRenderHandler()}
    </>
  );
};

export default Collapse;
