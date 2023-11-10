import React from 'react';
import { Grid } from '../../Grid';
import ButtonDemoFactory from './ButtonDemoFactory';

const ButtonDisabled = () => (
  <Grid cols={{ mobile: 1, desktop: 3 }}>
    <ButtonDemoFactory isDisabled />
  </Grid>
);

export default ButtonDisabled;
