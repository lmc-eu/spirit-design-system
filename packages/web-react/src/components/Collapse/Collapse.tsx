import classNames from 'classnames';
import React, { MutableRefObject, useRef } from 'react';
import Transition, { TransitionStatus, ENTERED, ENTERING, EXITED, EXITING } from 'react-transition-group/Transition';
import { useStyleProps } from '../../hooks/styleProps';
import { SpiritCollapseProps } from '../../types';
import { useCollapseAriaProps } from './useCollapseAriaProps';
import { useCollapseStyleProps } from './useCollapseStyleProps';
import { useResizeHeight } from './useResizeHeight';

const TRANSITION_DURATION = 250;

const transitioningStyles = {
  [ENTERING]: 'is-transitioning',
  [ENTERED]: '',
  [EXITING]: 'is-transitioning',
  [EXITED]: '',
};

const defaultProps = {
  isOpen: false,
  collapsibleToBreakpoint: undefined,
  transitionDuration: TRANSITION_DURATION,
};

const Collapse = (props: SpiritCollapseProps) => {
  const { elementType: ElementTag = 'div', children, transitionDuration = TRANSITION_DURATION, ...restProps } = props;

  const rootElementRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const collapseElementRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const collapseHeight = useResizeHeight(collapseElementRef);

  const { classProps } = useCollapseStyleProps(restProps.isOpen);
  const { ariaProps, props: otherProps } = useCollapseAriaProps(restProps);
  const { styleProps, props: transferProps } = useStyleProps(otherProps);
  const collapseStyleProps = {
    className: styleProps.className,
    ...{ style: { height: restProps.isOpen ? collapseHeight : 0, ...styleProps.style } },
  };

  return (
    <Transition in={restProps.isOpen} nodeRef={rootElementRef} timeout={transitionDuration}>
      {(transitionState: TransitionStatus) => (
        <ElementTag
          {...transferProps}
          {...collapseStyleProps}
          {...ariaProps.root}
          // Element implicitly has an 'any' type because expression of type 'TransitionStatus' can't be used to index type '{ entering: string; entered: string; exiting: string; exited: string; }'.
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          className={classNames(classProps.root, styleProps.className, transitioningStyles[transitionState])}
          ref={rootElementRef}
        >
          <div ref={collapseElementRef} className={classProps.content}>
            {children}
          </div>
        </ElementTag>
      )}
    </Transition>
  );
};

Collapse.defaultProps = defaultProps;

export default Collapse;
