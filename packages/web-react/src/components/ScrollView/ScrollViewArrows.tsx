'use client';

import React from 'react';
import { isDirectionHorizontal } from '../../constants';
import { useStyleProps } from '../../hooks';
import { type SpiritScrollViewArrowsProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { ControlButton } from '../ControlButton';
import { Icon } from '../Icon';
import { useScrollCallback } from './useScrollCallback';
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
  const { handleScroll } = useScrollCallback({ viewportRef, direction });

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
