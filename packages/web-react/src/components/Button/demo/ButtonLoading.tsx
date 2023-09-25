import React from 'react';
import { Grid } from '../../Grid';
import ButtonDemoFactory from './ButtonDemoFactory';

const ButtonLoading = () => (
  <Grid cols={1} desktop={3}>
    <ButtonDemoFactory isLoading />
  </Grid>
);

export default ButtonLoading;
