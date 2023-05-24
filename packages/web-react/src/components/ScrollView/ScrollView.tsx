import React, { useRef } from 'react';
import classNames from 'classnames';
import { SpiritScrollViewProps } from '../../types';
import { useStyleProps } from '../../hooks';
import { useScrollViewStyleProps } from './useScrollViewStyleProps';
import { useScrollPosition } from './useScrollPosition';
import { SCROLL_VIEW_DEFAULT_EDGE_INDICATOR, SCROLL_VIEW_DEFAULT_DIRECTION } from './constants';

const ScrollView = (props: SpiritScrollViewProps) => {
  const {
    children,
    direction = SCROLL_VIEW_DEFAULT_DIRECTION,
    edgeIndicators = SCROLL_VIEW_DEFAULT_EDGE_INDICATOR,
    isScrollbarDisabled,
    ...restProps
  } = props;

  const contentReference = useRef(null);
  const viewportReference = useRef(null);

  const { isScrolledAtEnd, isScrolledAtStart, onScroll } = useScrollPosition({
    contentReference,
    direction,
    viewportReference,
  });
  const { classProps } = useScrollViewStyleProps({
    direction,
    edgeIndicators,
    isScrollbarDisabled,
    isScrolledAtStart,
    isScrolledAtEnd,
  });
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  return (
    <div {...transferProps} {...styleProps} className={classNames(classProps.root, styleProps.className)}>
      <div className={classProps.viewport} onScroll={onScroll} ref={viewportReference}>
        <div className={classProps.content} ref={contentReference}>
          {children}
        </div>
      </div>
      <div className={classProps.indicators} aria-hidden="true" />
    </div>
  );
};

export default ScrollView;
