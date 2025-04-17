import React from 'react';
import DocsStack from '../../../../docs/DocsStack';
import { FillVariants } from '../../../constants';
import { Grid } from '../../Grid';
import SegmentedControlItemsFactory from './SegmentedControlItemsFactory';

const contentVariants = {
  LABEL_ONLY: 'label-only',
  LABEL_ICON: 'label-icon',
  ICON_ONLY: 'icon-only',
} as const;

const SegmentedControlContentVariants = () => (
  <Grid alignmentX="stretch" alignmentY="stretch" cols={{ desktop: 3, mobile: 1 }} spacingY="space-1100">
    {Object.values(contentVariants).map((contentVariant) => (
      <section key={`content-variant-${contentVariant}`}>
        <h3 className="docs-Heading">{contentVariant}</h3>
        <DocsStack stackAlignment="start">
          <SegmentedControlItemsFactory
            variant={FillVariants.OUTLINE}
            name={`segmented-icon-${contentVariant}`}
            contentVariant={contentVariant}
          />
        </DocsStack>
      </section>
    ))}
  </Grid>
);
export default SegmentedControlContentVariants;
