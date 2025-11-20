import React from 'react';
import { SizesExtended } from '../../../constants';
import { Grid } from '../../Grid';
import IconBox from '../IconBox';
import IconBoxDemoFactory from './IconBoxDemoFactory';

const IconBoxSizes = () => (
  <Grid cols={{ mobile: 1, desktop: 5 }} alignmentY="center" alignmentX="left">
    {Object.values(SizesExtended).map((size) => (
      <IconBoxDemoFactory iconName="search" key={size} label={size} size={size} />
    ))}
    <IconBox
      iconName="search"
      size={{ mobile: SizesExtended.XSMALL, tablet: SizesExtended.XLARGE, desktop: SizesExtended.MEDIUM }}
    />
  </Grid>
);

export default IconBoxSizes;
