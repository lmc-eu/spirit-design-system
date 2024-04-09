import React from 'react';
// @ts-ignore: No declaration -- The library is not installed; we don't need to install it for fixtures.
import { Grid } from '@lmc-eu/spirit-web-react';

export const MyComponent = () => (
  <>
    <Grid cols={1} tablet={2} desktop={3}>
      Grid
    </Grid>
    <Grid desktop={3}>Grid</Grid>
    <Grid cols={1}>Grid</Grid>
  </>
);
