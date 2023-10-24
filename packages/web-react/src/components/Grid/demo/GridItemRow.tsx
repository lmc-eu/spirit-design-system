import React from 'react';
import Grid from '../Grid';
import GridItem from '../GridItem';
import DocsBox from '../../../../docs/DocsBox';

const GridItemRow = () => (
  <Grid>
    <GridItem columnStart={1} columnEnd={8}>
      <DocsBox size="small">Content</DocsBox>
    </GridItem>
    <GridItem columnStart={9} columnEnd="span 4" rowStart={{ desktop: 2 }}>
      <DocsBox size="small">Sidebar</DocsBox>
    </GridItem>
  </Grid>
);

export default GridItemRow;
