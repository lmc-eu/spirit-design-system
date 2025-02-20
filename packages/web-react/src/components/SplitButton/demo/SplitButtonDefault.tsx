import React from 'react';
import { Grid } from '../../Grid';
import SplitButtonDemoFactory from './SplitButtonFactory';

const SplitButtonDefault = () => (
  <Grid cols={{ mobile: 1, desktop: 3 }} spacingY="space-1100">
    <SplitButtonDemoFactory color="primary" />
    <SplitButtonDemoFactory color="secondary" />
    <SplitButtonDemoFactory color="tertiary" />
  </Grid>
);

export default SplitButtonDefault;
