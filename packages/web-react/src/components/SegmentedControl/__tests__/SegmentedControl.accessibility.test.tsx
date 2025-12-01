import React, { useState } from 'react';
import { accessibilityTest } from '@local/tests';
import { type SpiritSegmentedControlProps } from '../../../types';
import SegmentedControl from '../SegmentedControl';
import SegmentedControlItem from '../SegmentedControlItem';

describe('SegmentedControl accessibility', () => {
  const SegmentedControlTest = (props: SpiritSegmentedControlProps) => {
    const [selectedValue, setSelectedValue] = useState<string | string[]>('1');

    return (
      <SegmentedControl
        {...props}
        name="test-control"
        label="Test label"
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        onSelectionChange={() => {}}
      >
        <SegmentedControlItem id="option-1" value="1">
          Item 1
        </SegmentedControlItem>
        <SegmentedControlItem id="option-2" value="2">
          Item 2
        </SegmentedControlItem>
      </SegmentedControl>
    );
  };

  accessibilityTest(SegmentedControlTest, 'fieldset');
});
