import React from 'react';
import DocsSection from '../../../../docs/DocsSection';
import { SizesExtended } from '../../../constants';
import { Grid } from '../../Grid';
import { SkeletonText } from '../index';

const SkeletonTexts = () => {
  const sizes = Object.values(SizesExtended);

  return (
    <Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }} spacingY="space-1100">
      {sizes.map((size) => (
        <DocsSection title={`Size ${size}`} stackAlignment="stretch" key={size} container="none" hasPadding={false}>
          <SkeletonText size={size} lines={3} />
          <SkeletonText size={size} lines={2} />
        </DocsSection>
      ))}
    </Grid>
  );
};

export default SkeletonTexts;
