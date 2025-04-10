import React from 'react';
import SegmentedControl from '../SegmentedControl';
import SegmentedControlItem from '../SegmentedControlItem';

const SegmentedControlDefault = () => (
  <SegmentedControl label="Label" name="segmented-outline-design">
    <SegmentedControlItem id="segmentedControl-icon-outline-1" value="value-1">
      Label
    </SegmentedControlItem>
    <SegmentedControlItem id="segmentedControl-icon-outline-2" value="value-2">
      Label
    </SegmentedControlItem>
    <SegmentedControlItem id="segmentedControl-icon-outline-3" value="value-3">
      Label
    </SegmentedControlItem>
  </SegmentedControl>
);

export default SegmentedControlDefault;
