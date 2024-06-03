import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Grid from '../Grid';
import GridItem from '../GridItem';

const GridResponsiveGridItem = () => (
  <Grid>
    <GridItem columnStart={1} columnEnd={{ mobile: 9, tablet: 8 }}>
      <DocsBox size="small">Content</DocsBox>
    </GridItem>
    <GridItem columnStart={{ mobile: 9, tablet: 11 }} columnEnd={{ mobile: 'span 4', tablet: 'span 2' }}>
      <DocsBox size="small">Sidebar</DocsBox>
    </GridItem>
  </Grid>
);

export default GridResponsiveGridItem;
