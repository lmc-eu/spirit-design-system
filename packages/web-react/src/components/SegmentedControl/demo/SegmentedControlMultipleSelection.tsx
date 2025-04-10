import React from 'react';
import DocsStack from '../../../../docs/DocsStack';
import { FillVariants } from '../../../constants';
import SegmentedControlItemsFactory from './SegmentedControlItemsFactory';

const variants = Object.values(FillVariants).reverse();

const SegmentedControlMultipleSelection = () =>
  variants.map((variant) => (
    <section key={`multiple-selection-${variant}`}>
      <DocsStack stackAlignment="start">
        <SegmentedControlItemsFactory
          label={`Label for ${variant}`}
          name={`segmented-${variant}`}
          variant={variant}
          hasMultipleSelection
        />
      </DocsStack>
    </section>
  ));

export default SegmentedControlMultipleSelection;
