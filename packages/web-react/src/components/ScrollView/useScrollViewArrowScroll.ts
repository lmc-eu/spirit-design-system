'use client';

import { type MutableRefObject, useCallback, useEffect, useRef } from 'react';
import { isDirectionHorizontal } from '../../constants';
import { type ScrollViewArrowsScrollStepType, type ScrollViewDirectionType } from '../../types';

export interface UseScrollViewArrowScrollProps {
  viewportRef: MutableRefObject<HTMLDivElement | null>;
  direction: ScrollViewDirectionType;
}

export interface UseScrollViewArrowScrollReturn {
  handleScroll: (step: ScrollViewArrowsScrollStepType) => void;
}

export const useScrollViewArrowScroll = ({
  viewportRef,
  direction,
}: UseScrollViewArrowScrollProps): UseScrollViewArrowScrollReturn => {
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleScroll = useCallback(
    (step: ScrollViewArrowsScrollStepType) => {
      if (!viewportRef.current) {
        return;
      }

      const isHorizontal = isDirectionHorizontal(direction);
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
    },
    [viewportRef, direction],
  );

  return { handleScroll };
};
