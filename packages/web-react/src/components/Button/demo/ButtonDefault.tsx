import React from 'react';
import { Grid } from '../../Grid';
import ButtonDemoFactory from './ButtonDemoFactory';

const ButtonDefault = () => (
  <Grid cols={1} desktop={3}>
    <ButtonDemoFactory />
  </Grid>
);

export default ButtonDefault;
