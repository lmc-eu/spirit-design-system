import React from 'react';
import { FillVariants } from '../../../constants';
import { Icon } from '../../Icon';
import { UNSTABLE_Truncate } from '../../UNSTABLE_Truncate';
import SegmentedControl from '../SegmentedControl';
import SegmentedControlItem from '../SegmentedControlItem';

const SegmentedControlFluid = () => (
  <SegmentedControl label="Label" name="segmented-stretch-filled" variant={FillVariants.FILL} isFluid>
    <SegmentedControlItem id={`segmented-control-label-stretch-1`} value="value-1">
      <Icon name="file" boxSize={20} />
      Label 1
    </SegmentedControlItem>
    <SegmentedControlItem id={`segmented-control-label-stretch-2`} value="value-2" isDisabled>
      <Icon name="file" boxSize={20} />
      <UNSTABLE_Truncate lines={1}>Label 2 - this label will be truncated</UNSTABLE_Truncate>
    </SegmentedControlItem>
    <SegmentedControlItem id={`segmented-control-label-stretch-3`} value="value-3">
      <Icon name="file" boxSize={20} />
      Label 3
    </SegmentedControlItem>
    <SegmentedControlItem id={`segmented-control-label-stretch-4`} value="value-4">
      <Icon name="file" boxSize={20} />
      Label 4
    </SegmentedControlItem>
    <SegmentedControlItem id={`segmented-control-label-stretch-5`} value="value-5">
      <Icon name="file" boxSize={20} />
      Label 5
    </SegmentedControlItem>
  </SegmentedControl>
);

export default SegmentedControlFluid;
