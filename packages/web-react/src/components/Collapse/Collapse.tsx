'use client';

import React, { type ElementType, type MutableRefObject, useRef } from 'react';
import { Transition, type TransitionStatus } from 'react-transition-group';
import { useStyleProps } from '../../hooks';
import { type SpiritCollapseProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useCollapseAriaProps } from './useCollapseAriaProps';
import { useCollapseStyleProps } from './useCollapseStyleProps';
import { useResizeHeight } from './useResizeHeight';

const TRANSITION_DURATION = 250;

const transitioningStyles = {
  entering: 'is-transitioning',
  entered: '',
  exiting: 'is-transitioning',
  exited: '',
};

const defaultProps: Partial<SpiritCollapseProps> = {
  elementType: 'div',
  isOpen: false,
  collapsibleToBreakpoint: undefined,
  transitionDuration: TRANSITION_DURATION,
};

const Collapse = (props: SpiritCollapseProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
    elementType: ElementTag = defaultProps.elementType as ElementType,
    children,
    transitionDuration = TRANSITION_DURATION,
    ...restProps
  } = propsWithDefaults;

  const rootElementRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const collapseElementRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const collapseHeight = useResizeHeight(collapseElementRef);

  const { classProps, styleProps: collapseStyleProps } = useCollapseStyleProps(
    restProps.isOpen,
    ElementTag,
    collapseHeight,
  );
  const { ariaProps, props: otherProps } = useCollapseAriaProps(restProps);
  const { styleProps, props: transferProps } = useStyleProps(otherProps);

  const mergedCollapseStyleProps = {
    className: styleProps.className,
    style: { ...collapseStyleProps, ...styleProps.style },
  };

  // For inline elements, when open, render content outside the collapse element
  const isInlineElement = ElementTag === 'span';
  if (isInlineElement && restProps.isOpen) {
    return children;
  }

  return (
    <Transition in={restProps.isOpen} nodeRef={rootElementRef} timeout={transitionDuration}>
      {(transitionState: TransitionStatus) => (
        <ElementTag
          {...transferProps}
          {...ariaProps.root}
          {...mergeStyleProps(ElementTag, {
            classProps: classProps.root,
            styleProps,
            collapseStyleProps: mergedCollapseStyleProps,
            transitioningStyles: transitioningStyles[transitionState as keyof typeof transitioningStyles],
          })}
          ref={rootElementRef}
        >
          <ElementTag ref={collapseElementRef} className={classProps.content}>
            {children}
          </ElementTag>
        </ElementTag>
      )}
    </Transition>
  );
};

Collapse.spiritComponent = 'Collapse';

export default Collapse;
