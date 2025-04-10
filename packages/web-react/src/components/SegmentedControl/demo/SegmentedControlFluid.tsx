import React, { useState } from 'react';
import { FillVariants } from '../../../constants';
import { Icon } from '../../Icon';
import { UNSTABLE_Truncate } from '../../UNSTABLE_Truncate';
import SegmentedControl from '../SegmentedControl';
import SegmentedControlItem from '../SegmentedControlItem';

const SegmentedControlFluid = () => {
  const items = ['Label 1', 'Label 2 - this label will be truncated', 'Label 3', 'Label 4', 'Label 5'];
  const [selectedValue, setSelectedValue] = useState<string | string[]>('value-1');

  return (
    <SegmentedControl
      label="Label"
      name="segmented-stretch-filled"
      variant={FillVariants.FILL}
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      isFluid
    >
      {items.map((label, index) => (
        <SegmentedControlItem
          key={`item-${index + 1}`}
          id={`segmented-control-label-stretch-${index + 1}`}
          value={`value-${index + 1}`}
        >
          <Icon name="file" boxSize={20} />
          {index === 1 ? <UNSTABLE_Truncate lines={1}>{label}</UNSTABLE_Truncate> : label}
        </SegmentedControlItem>
      ))}
    </SegmentedControl>
  );
};

export default SegmentedControlFluid;
