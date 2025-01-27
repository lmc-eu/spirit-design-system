import React from 'react';
import { Grid, GridItem } from '../../Grid';
import { SkeletonHeading, SkeletonText, SkeletonShape } from '../index';

const SkeletonCombined = () => {
  return (
    <Grid cols={{ mobile: 1, tablet: 2, desktop: 2 }} aria-busy="true" aria-live="polite">
      <GridItem>
        <Grid>
          <GridItem>
            <SkeletonShape width={100} height={100} borderRadius="full" />
          </GridItem>
          <GridItem columnStart={2} columnEnd={12}>
            <SkeletonHeading size="small" lines={1} UNSAFE_className="mb-900" />
            <SkeletonText size="small" lines={2} />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default SkeletonCombined;
