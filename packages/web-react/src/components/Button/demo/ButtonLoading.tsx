import React from 'react';
import { Grid } from '../../Grid';
import ButtonDemoFactory from './ButtonDemoFactory';

const ButtonLoading = () => (
  <Grid cols={1} tablet={2} desktop={3}>
    <ButtonDemoFactory label="Loading" isLoading />
  </Grid>
);

export default ButtonLoading;
