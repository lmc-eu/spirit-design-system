import React, { useState } from 'react';
import { FillVariants } from '../../../constants';
import { Icon } from '../../Icon';
import { Tooltip, TooltipPopover, TooltipTrigger } from '../../Tooltip';
import SegmentedControl from '../SegmentedControl';
import SegmentedControlItem from '../SegmentedControlItem';

const SegmentedControlWithTooltip = () => {
  const [activeTooltipIndex, setActiveTooltipIndex] = useState<number | null>(null);

  return (
    <SegmentedControl label="Label" name="segmented-tooltip-icon" variant={FillVariants.FILL}>
      {Array.from({ length: 5 }, (_, index) => {
        const value = `value-${index + 1}`;
        const id = `segmented-control-tooltip-js-${index + 1}`;
        const isOpen = activeTooltipIndex === index;

        return (
          <Tooltip
            key={value}
            id={`tooltip-${value}`}
            isOpen={isOpen}
            onToggle={() => setActiveTooltipIndex(isOpen ? null : index)}
          >
            <TooltipTrigger elementType={SegmentedControlItem} value={value} id={id}>
              <Icon name="file" boxSize={20} />
              <TooltipPopover>Label</TooltipPopover>
            </TooltipTrigger>
          </Tooltip>
        );
      })}
    </SegmentedControl>
  );
};

export default SegmentedControlWithTooltip;
