'use client';

import React from 'react';
import { SpiritUncontrolledCollapseProps } from '../../types';
import Collapse from './Collapse';
import { useCollapse } from './useCollapse';
import { useCollapseAriaProps } from './useCollapseAriaProps';

const defaultProps = {
  isOpen: false,
};

const UncontrolledCollapse = (props: SpiritUncontrolledCollapseProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
    children,
    /** @deprecated "hideOnCollapse" property will be replaced in the next major version. Please use "isDisposable" instead. */
    hideOnCollapse,
    isDisposable,
    renderTrigger,
    ...restProps
  } = propsWithDefaults;
  const { isOpen, toggleHandler } = useCollapse(restProps.isOpen);
  const { ariaProps } = useCollapseAriaProps({ ...restProps, isOpen });

  const isDisposed = hideOnCollapse || isDisposable;

  const triggerRenderHandler = () => {
    const showTrigger = isDisposed ? !(isDisposed && isOpen) : true;

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
      {isDisposed && isOpen ? (
        children
      ) : (
        <Collapse {...restProps} isOpen={isOpen}>
          {children}
        </Collapse>
      )}
    </>
  );
};

export default UncontrolledCollapse;
