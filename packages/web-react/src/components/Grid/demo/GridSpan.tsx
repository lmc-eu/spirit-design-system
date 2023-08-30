import React from 'react';
import Grid from '../Grid';
import GridSpan from '../GridSpan';
import DocsBox from '../../../../docs/DocsBox';

const GridSpanDemo = () => (
  <Grid>
    <GridSpan over={2}>
      <DocsBox size="small">2</DocsBox>
    </GridSpan>
    <GridSpan over={4}>
      <DocsBox size="small">4</DocsBox>
    </GridSpan>
    <GridSpan over={6}>
      <DocsBox size="small">6</DocsBox>
    </GridSpan>
    <GridSpan over={8}>
      <DocsBox size="small">8</DocsBox>
    </GridSpan>
    <GridSpan over={10}>
      <DocsBox size="small">10</DocsBox>
    </GridSpan>
    <GridSpan over={12}>
      <DocsBox size="small">12</DocsBox>
    </GridSpan>
  </Grid>
);

export default GridSpanDemo;
