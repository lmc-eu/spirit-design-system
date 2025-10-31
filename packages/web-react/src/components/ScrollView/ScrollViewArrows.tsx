import React from 'react';
import { Direction } from '../../constants';
import { Icon } from '../Icon';

interface ScrollViewArrowsProps {
  direction: 'horizontal' | 'vertical';
  scrollStep: number;
  viewportRef: React.RefObject<HTMLDivElement>;
  className?: string;
}

export const ScrollViewArrows = ({ direction, scrollStep, viewportRef, className }: ScrollViewArrowsProps) => {
  const isHorizontal = direction === Direction.HORIZONTAL;

  const handleScroll = (step: number) => {
    viewportRef.current?.scrollBy({
      left: isHorizontal ? step : 0,
      top: isHorizontal ? 0 : step,
      behavior: 'smooth',
    });
  };

  return (
    <div className={className}>
      <button
        type="button"
        className="ControlButton ControlButton--small ControlButton--symmetrical ControlButton--hasBackground accessibility-tap-target dynamic-color-border dynamic-color-background-interactive"
        aria-label={isHorizontal ? 'Scroll left' : 'Scroll up'}
        onClick={() => handleScroll(-scrollStep)}
      >
        <Icon name={isHorizontal ? 'chevron-left' : 'chevron-up'} />
      </button>

      <button
        type="button"
        className="ControlButton ControlButton--small ControlButton--symmetrical ControlButton--hasBackground accessibility-tap-target dynamic-color-border dynamic-color-background-interactive"
        aria-label={isHorizontal ? 'Scroll right' : 'Scroll down'}
        onClick={() => handleScroll(scrollStep)}
      >
        <Icon name={isHorizontal ? 'chevron-right' : 'chevron-down'} />
      </button>
    </div>
  );
};
