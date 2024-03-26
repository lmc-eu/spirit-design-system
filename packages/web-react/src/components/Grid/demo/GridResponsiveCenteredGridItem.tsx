import React from 'react';
import Grid from '../Grid';
import GridItem from '../GridItem';
import DocsBox from '../../../../docs/DocsBox';

const GridResponsiveCenteredGridItem = () => (
  <Grid>
    <GridItem
      columnStart={{
        mobile: 4,
        tablet: 5,
        desktop: 6,
      }}
      columnEnd={{
        mobile: 'span 6',
        tablet: 'span 4',
        desktop: 'span 2',
      }}
    >
      <DocsBox size="small">Centered Content</DocsBox>
    </GridItem>
  </Grid>
);

export default GridResponsiveCenteredGridItem;
