import React from 'react';
import Grid from '../Grid';
import GridItemFactory from './GridItemFactory';

const GridCustomSpacing = () => (
  <Grid cols={{ mobile: 2, tablet: 3, desktop: 4 }} spacing="space-1000">
    <GridItemFactory items={4} label="1/2, 1/3, 1/4" />
  </Grid>
);

export default GridCustomSpacing;
