import React from 'react';
import DocsSection from '../../../../docs/DocsSections';
import { SizesExtended } from '../../../constants';
import { Grid } from '../../Grid';
import { SkeletonHeading } from '../index';

const SkeletonHeadings = () => {
  const sizes = Object.values(SizesExtended);

  return (
    <Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }}>
      {sizes.map((size) => (
        <DocsSection title={`Size ${size}`} stackAlignment="stretch" key={size} container="none">
          <SkeletonHeading size={size} lines={3} />
        </DocsSection>
      ))}
    </Grid>
  );
};

export default SkeletonHeadings;
