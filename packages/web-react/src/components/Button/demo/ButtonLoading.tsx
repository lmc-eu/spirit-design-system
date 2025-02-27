import React from 'react';
import { Grid } from '../../Grid';
import ButtonDemoFactory from './ButtonDemoFactory';

const ButtonLoading = () => (
  <Grid cols={{ mobile: 1, desktop: 3 }} spacingY="space-1100">
    <ButtonDemoFactory isLoading />
  </Grid>
);

export default ButtonLoading;
