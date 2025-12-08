import React, { useEffect, useRef } from 'react';
import { isDirectionHorizontal } from '../../constants';
import { useStyleProps } from '../../hooks';
import { type ScrollViewArrowsScrollStepType, type SpiritScrollViewArrowsProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { ControlButton } from '../ControlButton';
import { Icon } from '../Icon';
import { useScrollViewArrows } from './useScrollViewArrows';
import { useScrollViewStyleProps } from './useScrollViewStyleProps';

const ScrollViewArrows = (props: SpiritScrollViewArrowsProps) => {
  const { ariaLabelArrows, direction, scrollStep, viewportRef, ...restProps } = props;
  const { classProps } = useScrollViewStyleProps({
    direction,
  });
  const { styleProps, props: otherProps } = useStyleProps(restProps);
  const mergedStyleProps = mergeStyleProps('button', { classProps: classProps.arrows, styleProps });
  const isHorizontal = isDirectionHorizontal(direction);
  const { arrows } = useScrollViewArrows(isHorizontal, ariaLabelArrows, scrollStep);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(
    () => () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    },
    [],
  );

  const handleScroll = (step: ScrollViewArrowsScrollStepType) => {
    if (!viewportRef.current) {
      return;
    }

    const scrollToDirection = isHorizontal ? 'left' : 'top';
    const currentScrollPosition = isHorizontal ? viewportRef.current.scrollLeft : viewportRef.current.scrollTop;
    const maxScroll = isHorizontal
      ? viewportRef.current.scrollWidth - viewportRef.current.clientWidth
      : viewportRef.current.scrollHeight - viewportRef.current.clientHeight;

    // Cancel any ongoing smooth scroll animation by instantly jumping to current position
    // This prevents accumulation of scroll animations on iOS when clicking rapidly
    viewportRef.current.scrollTo({
      [scrollToDirection]: currentScrollPosition,
      behavior: 'auto',
    });

    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Calculate target position and clamp it to valid scroll bounds
    const targetPosition = Math.max(0, Math.min(currentScrollPosition + step, maxScroll));

    // Start new scroll after a small delay to ensure the cancel takes effect
    scrollTimeoutRef.current = setTimeout(() => {
      if (viewportRef.current) {
        viewportRef.current.scrollTo({
          [scrollToDirection]: targetPosition,
          behavior: 'smooth',
        });
      }
    }, 10);
  };

  return (
    <div {...otherProps} {...mergedStyleProps}>
      {arrows.map(({ icon, label, step }) => (
        <ControlButton key={icon} aria-label={label} onClick={() => handleScroll(step)} size="small" isSymmetrical>
          <Icon name={icon} />
        </ControlButton>
      ))}
    </div>
  );
};

ScrollViewArrows.spiritComponent = 'ScrollViewArrows';

export default ScrollViewArrows;
