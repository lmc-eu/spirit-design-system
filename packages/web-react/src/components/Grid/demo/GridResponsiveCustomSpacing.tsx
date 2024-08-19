import React from 'react';
import Grid from '../Grid';
import GridItemFactory from './GridItemFactory';

const GridResponsiveCustomSpacing = () => (
  <Grid
    cols={{ mobile: 2, tablet: 3, desktop: 4 }}
    spacingX={{
      mobile: 'space-1200',
      tablet: 'space-1100',
      desktop: 'space-1600',
    }}
    spacingY={{
      mobile: 'space-1000',
      tablet: 'space-1200',
      desktop: 'space-0',
    }}
  >
    <GridItemFactory items={4} label="1/2, 1/3, 1/4" />
  </Grid>
);

export default GridResponsiveCustomSpacing;
