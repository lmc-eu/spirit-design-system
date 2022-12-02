import React from 'react';
import Collapse from './Collapse';
import { SpiritUncontrolledCollapseProps } from '../../types';
import { useCollapse } from './useCollapse';
import { useCollapseAriaProps } from './useCollapseAriaProps';

const defaultProps = {
  id: Math.random().toString(36).slice(2, 7),
  isOpen: false,
};

const UncontrolledCollapse = (props: SpiritUncontrolledCollapseProps) => {
  const { children, hideOnCollapse, renderTrigger, ...restProps } = props;
  const { isOpen, toggleHandler } = useCollapse(restProps.isOpen);
  const { ariaProps } = useCollapseAriaProps({ ...restProps, isOpen });

  const triggerRenderHandler = () => {
    const showTrigger = hideOnCollapse ? !(hideOnCollapse && isOpen) : true;

    return renderTrigger && showTrigger
      ? renderTrigger({
          isOpen,
          onClick: toggleHandler,
          ...ariaProps.trigger,
        })
      : null;
  };

  return (
    <>
      {triggerRenderHandler()}
      {hideOnCollapse && isOpen ? (
        children
      ) : (
        <Collapse {...restProps} isOpen={isOpen}>
          {children}
        </Collapse>
      )}
    </>
  );
};

UncontrolledCollapse.defaultProps = defaultProps;

export default UncontrolledCollapse;
