import React from 'react';
import { Grid } from '../../Grid';
import ButtonLinkDemoFactory from './ButtonLinkDemoFactory';

const ButtonLinkDisabled = () => (
  <Grid cols={1} desktop={3}>
    <ButtonLinkDemoFactory isDisabled />
  </Grid>
);

export default ButtonLinkDisabled;
