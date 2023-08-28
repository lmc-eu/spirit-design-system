import React from 'react';
import { Grid } from '../../Grid';
import ButtonDemoFactory from './ButtonDemoFactory';

const ButtonDefault = () => (
  <Grid cols={1} tablet={2} desktop={3}>
    <ButtonDemoFactory label="Button" />
  </Grid>
);

export default ButtonDefault;
