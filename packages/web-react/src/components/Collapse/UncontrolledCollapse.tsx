import React from 'react';
import Collapse from './Collapse';
import { SpiritUncontrolledCollapseProps } from '../../types';
import { useCollapse } from './useCollapse';
import { useCollapseAriaProps } from './useCollapseAriaProps';
import { useCollapseStyleProps } from './useCollapseStyleProps';

const defaultProps = {
  id: Math.random().toString(36).slice(2, 7),
  isCollapsed: false,
};

const UncontrolledCollapse = (props: SpiritUncontrolledCollapseProps) => {
  const { children, hideOnCollapse, renderTrigger, ...restProps } = props;
  const { collapsed, toggleHandler } = useCollapse(restProps.isCollapsed);
  const { classProps } = useCollapseStyleProps(collapsed);
  const { ariaProps } = useCollapseAriaProps({ ...restProps, isCollapsed: collapsed });

  const triggerRenderHandler = () => {
    const showTrigger = hideOnCollapse ? !(hideOnCollapse && collapsed) : true;

    return renderTrigger && showTrigger
      ? renderTrigger({
          collapsed,
          onClick: toggleHandler,
          ...ariaProps.trigger,
          className: classProps.trigger,
        })
      : null;
  };

  return (
    <>
      {triggerRenderHandler()}
      {hideOnCollapse && collapsed ? (
        children
      ) : (
        <Collapse {...restProps} isCollapsed={collapsed}>
          {children}
        </Collapse>
      )}
    </>
  );
};

UncontrolledCollapse.defaultProps = defaultProps;

export default UncontrolledCollapse;
