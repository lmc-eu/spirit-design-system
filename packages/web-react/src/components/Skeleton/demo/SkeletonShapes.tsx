import React from 'react';
import DocsSection from '../../../../docs/DocsSections';
import { Grid } from '../../Grid';
import { SkeletonShape } from '../index';

const SkeletonShapes = () => {
  return (
    <Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }}>
      <DocsSection title="Shape Square" stackAlignment="stretch" container="none">
        <SkeletonShape width={100} height={100} />
      </DocsSection>

      <DocsSection title="Shape Circle" stackAlignment="stretch" container="none">
        <SkeletonShape width={100} height={100} borderRadius="full" />
      </DocsSection>

      <DocsSection title="Shape Rectangular" stackAlignment="stretch" container="none">
        <SkeletonShape width={300} height={100} borderRadius="400" />
      </DocsSection>

      <DocsSection title="Shape Rectangular responsive radius" stackAlignment="stretch" container="none">
        <SkeletonShape width={300} height={100} borderRadius={{ mobile: '200', tablet: '400', desktop: '500' }} />
      </DocsSection>
    </Grid>
  );
};

export default SkeletonShapes;
