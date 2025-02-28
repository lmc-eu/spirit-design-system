import React from 'react';
import { Grid } from '../../Grid';
import SplitButtonDemoFactory from './SplitButtonFactory';

const SplitButtonDisabled = () => (
  <Grid cols={{ mobile: 1, desktop: 3 }} spacingY="space-1100">
    <SplitButtonDemoFactory color="primary" isDisabled showColorInTitle={false} />
  </Grid>
);

export default SplitButtonDisabled;
