import React from 'react';
import { Grid } from '../../Grid';
import { IconBoxShapes as Shapes } from '../constants';
import IconBoxDemoFactory from './IconBoxDemoFactory';

const IconBoxShapes = () => (
  <Grid cols={{ mobile: 1, desktop: 5 }} alignmentY="center" alignmentX="left">
    {Object.values(Shapes).map((shape) => (
      <IconBoxDemoFactory iconName="search" key={shape} label={shape} shape={shape} />
    ))}
  </Grid>
);

export default IconBoxShapes;
