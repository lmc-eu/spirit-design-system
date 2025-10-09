import React, { useState } from 'react';
import DocsStack from '../../../../docs/DocsStack';
import { FillVariants } from '../../../constants';
import { type FillVariantDictionaryType } from '../../../types';
import { UNSTABLE_Truncate } from '../../UNSTABLE_Truncate';
import SegmentedControl from '../SegmentedControl';
import SegmentedControlItem from '../SegmentedControlItem';

const SegmentedControlWithDisableItemVariant = ({ variant }: { variant: FillVariantDictionaryType }) => {
  const [selectedValue, setSelectedValue] = useState<string | string[]>('value-1');

  return (
    <SegmentedControl
      label={`Label for ${variant}`}
      name={`segmented-${variant}`}
      variant={variant}
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
    >
      <SegmentedControlItem id={`segmentedControl-disabled-${variant}-1`} value="value-1">
        <UNSTABLE_Truncate lines={1}>Label</UNSTABLE_Truncate>
      </SegmentedControlItem>
      <SegmentedControlItem id={`segmentedControl-disabled-${variant}-2`} value="value-2" isDisabled>
        <UNSTABLE_Truncate lines={1}>Label</UNSTABLE_Truncate>
      </SegmentedControlItem>
      <SegmentedControlItem id={`segmentedControl-disabled-${variant}-3`} value="value-3">
        <UNSTABLE_Truncate lines={1}>Label</UNSTABLE_Truncate>
      </SegmentedControlItem>
    </SegmentedControl>
  );
};

const SegmentedControlWithDisableItem = () =>
  Object.values(FillVariants)
    .reverse()
    .map((variant) => (
      <DocsStack stackAlignment="start" key={`disabled-${variant}`}>
        <SegmentedControlWithDisableItemVariant variant={variant} />
      </DocsStack>
    ));

export default SegmentedControlWithDisableItem;
