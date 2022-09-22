import React, { FC, MutableRefObject, createElement, useRef, useMemo } from 'react';
import { useCollapsible } from '../../hooks';
import { CollapseProps } from '../../types';

const Collapse: FC<CollapseProps> = (props) => {
  const { children, renderTrigger, elementType, contentProps, hideOnCollapse, ...rest } = props;

  const DEFAULT_ELEMENT_TYPE = 'div';
  const CLASSNAME_WRAPPER = 'Collapse';
  const CLASSNAME_CONTENT = 'Collapse__content';

  const contentReference: MutableRefObject<HTMLButtonElement | undefined> = useRef();
  const { renderProps, triggered, updatedWrapperProps, updatedContentProps } = useCollapsible({
    contentReference,
    contentProps,
    hideOnCollapse,
    wrapperClassName: CLASSNAME_WRAPPER,
    contentClassName: CLASSNAME_CONTENT,
    ...rest,
  });

  const trigger = useMemo(() => {
    const show = !(hideOnCollapse && triggered);
    if (renderTrigger && show) return renderTrigger(renderProps);

    return null;
  }, [renderTrigger, renderProps, hideOnCollapse, triggered]);

  const content = createElement(contentProps?.elementType || DEFAULT_ELEMENT_TYPE, updatedContentProps, children);

  const wrapper = createElement(elementType || DEFAULT_ELEMENT_TYPE, updatedWrapperProps, content);

  return (
    <>
      {trigger}
      {wrapper}
    </>
  );
};

export default Collapse;
