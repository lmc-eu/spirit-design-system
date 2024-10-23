import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Grid from '../Grid';
import GridItem from '../GridItem';

const GridNestedGridItem = () => (
  <Grid>
    <GridItem columnStart={1} columnEnd={{ mobile: 9, tablet: 10 }}>
      <div className="bg-secondary py-500">
        <Grid>
          <GridItem columnStart={1} columnEnd="span 4">
            <DocsBox size="small">First Nested Content</DocsBox>
          </GridItem>
          <GridItem columnStart={6} columnEnd="span 5">
            <DocsBox size="small">Second Nested Content</DocsBox>
          </GridItem>
        </Grid>
      </div>
    </GridItem>
    <GridItem columnStart={{ mobile: 9, tablet: 10 }} columnEnd={{ mobile: 'span 4', tablet: 'span 3' }}>
      <DocsBox size="small">Sidebar</DocsBox>
    </GridItem>
  </Grid>
);

export default GridNestedGridItem;
