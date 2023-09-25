import React from 'react';
import Grid from '../Grid';
import GridItemFactory from './GridItemFactory';

const GridEqual = () => (
  <>
    <Grid cols={12}>
      <GridItemFactory items={12} label="1/12" />
    </Grid>
    <Grid cols={6}>
      <GridItemFactory items={6} label="1/6" />
    </Grid>
    <Grid cols={5}>
      <GridItemFactory items={5} label="1/5" />
    </Grid>
    <Grid cols={4}>
      <GridItemFactory items={4} label="1/4" />
    </Grid>
    <Grid cols={3}>
      <GridItemFactory items={3} label="1/3" />
    </Grid>
    <Grid cols={2}>
      <GridItemFactory items={2} label="1/2" />
    </Grid>
    <Grid cols={1}>
      <GridItemFactory items={1} label="1" />
    </Grid>
  </>
);

export default GridEqual;
