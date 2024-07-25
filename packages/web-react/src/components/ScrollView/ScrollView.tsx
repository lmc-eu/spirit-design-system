'use client';

import classNames from 'classnames';
import React, { useRef } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritScrollViewProps } from '../../types';
import { SCROLL_VIEW_DEFAULT_DIRECTION, SCROLL_VIEW_DEFAULT_OVERFLOW_DECORATOR } from './constants';
import { useScrollPosition } from './useScrollPosition';
import { useScrollViewStyleProps } from './useScrollViewStyleProps';

const ScrollView = (props: SpiritScrollViewProps) => {
  const {
    children,
    direction = SCROLL_VIEW_DEFAULT_DIRECTION,
    isScrollbarDisabled,
    overflowDecorators = SCROLL_VIEW_DEFAULT_OVERFLOW_DECORATOR,
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
    isScrollbarDisabled,
    isScrolledAtStart,
    isScrolledAtEnd,
    overflowDecorators,
  });
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  return (
    <div {...transferProps} {...styleProps} className={classNames(classProps.root, styleProps.className)}>
      <div className={classProps.viewport} onScroll={onScroll} ref={viewportReference}>
        <div className={classProps.content} ref={contentReference}>
          {children}
        </div>
      </div>
      <div className={classProps.overflowDecorators} aria-hidden="true" />
    </div>
  );
};

export default ScrollView;
