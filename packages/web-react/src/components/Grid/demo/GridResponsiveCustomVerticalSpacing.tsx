import React from 'react';
import Grid from '../Grid';
import GridItemFactory from './GridItemFactory';

const GridResponsiveCustomVerticalSpacing = () => (
  <Grid
    cols={{ mobile: 2, tablet: 3, desktop: 4 }}
    spacingY={{
      mobile: 'space-100',
      tablet: 'space-500',
      desktop: 'space-1100',
    }}
  >
    <GridItemFactory items={8} label="1/2, 1/3, 1/4" />
  </Grid>
);

export default GridResponsiveCustomVerticalSpacing;
