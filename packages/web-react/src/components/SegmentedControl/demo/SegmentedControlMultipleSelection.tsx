import React from 'react';
import DocsStack from '../../../../docs/DocsStack';
import { FillVariants } from '../../../constants';
import SegmentedControlItemsFactory from './SegmentedControlItemsFactory';

const SegmentedControlMultipleSelection = () =>
  Object.values(FillVariants)
    .reverse()
    .map((variant) => (
      <DocsStack stackAlignment="start" key={`multiple-selection-${variant}`}>
        <SegmentedControlItemsFactory
          label={`Label for ${variant}`}
          name={`segmented-${variant}`}
          variant={variant}
          isMultiselect
        />
      </DocsStack>
    ));

export default SegmentedControlMultipleSelection;
