import React from 'react';
import DocsStack from '../../../../docs/DocsStack';
import { FillVariants } from '../../../constants';
import { UNSTABLE_Truncate } from '../../UNSTABLE_Truncate';
import SegmentedControl from '../SegmentedControl';
import SegmentedControlItem from '../SegmentedControlItem';

const variants = Object.values(FillVariants).reverse();

const SegmentedControlWithDisableItem = () =>
  Object.values(variants).map((variant) => (
    <section key={`disabled-${variant}`}>
      <DocsStack stackAlignment="start">
        <SegmentedControl label={`Label for ${variant}`} name={`segmented-${variant}`} variant={variant}>
          <SegmentedControlItem id={`segmentedControl-disabled-${variant}-1`} value="value-1">
            <UNSTABLE_Truncate>Label</UNSTABLE_Truncate>
          </SegmentedControlItem>
          <SegmentedControlItem id={`segmentedControl-disabled-${variant}-2`} value="value-2" isDisabled>
            <UNSTABLE_Truncate>Label</UNSTABLE_Truncate>
          </SegmentedControlItem>
          <SegmentedControlItem id={`segmentedControl-disabled-${variant}-3`} value="value-3">
            <UNSTABLE_Truncate>Label</UNSTABLE_Truncate>
          </SegmentedControlItem>
        </SegmentedControl>
      </DocsStack>
    </section>
  ));

export default SegmentedControlWithDisableItem;
