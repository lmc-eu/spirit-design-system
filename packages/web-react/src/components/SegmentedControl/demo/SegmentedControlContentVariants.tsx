import React from 'react';
import DocsStack from '../../../../docs/DocsStack';
import { FillVariants } from '../../../constants';
import { Grid } from '../../Grid';
import { Icon } from '../../Icon';
import SegmentedControl from '../SegmentedControl';
import SegmentedControlItem from '../SegmentedControlItem';

const contentVariant = {
  LABEL_ONLY: 'label-only',
  LABEL_ICON: 'label-icon',
  ICON_ONLY: 'icon-only',
} as const;

const SegmentedControlDesignVariants = () => {
  return (
    <Grid alignmentXStretch alignmentYStretch cols={{ desktop: 3, mobile: 1 }} spacingY="space-1100">
      {Object.values(contentVariant).map((variant) => (
        <section>
          <h3 className="docs-Heading">{variant}</h3>
          <DocsStack stackAlignment="start">
            <SegmentedControl
              label={`Label for ${variant}`}
              name={`segmented-icon-${variant}`}
              variant={FillVariants.OUTLINE}
            >
              <SegmentedControlItem id={`segmentedControl-${variant}-1`} value="value-1">
                {variant !== contentVariant.LABEL_ONLY && <Icon name="file" boxSize={20} />}
                {variant !== contentVariant.ICON_ONLY && <>Label</>}
              </SegmentedControlItem>
              <SegmentedControlItem id={`segmentedControl-${variant}-2`} value="value-2">
                {variant !== contentVariant.LABEL_ONLY && <Icon name="file" boxSize={20} />}
                {variant !== contentVariant.ICON_ONLY && <>Label</>}
              </SegmentedControlItem>
              <SegmentedControlItem id={`segmentedControl-${variant}-3`} value="value-3">
                {variant !== contentVariant.LABEL_ONLY && <Icon name="file" boxSize={20} />}
                {variant !== contentVariant.ICON_ONLY && <>Label</>}
              </SegmentedControlItem>
            </SegmentedControl>
          </DocsStack>
        </section>
      ))}
    </Grid>
  );
};

export default SegmentedControlDesignVariants;
