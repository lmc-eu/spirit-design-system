import React from 'react';
import { Grid } from '../../Grid';
import Select from '../Select';
import ChildrenNode from './ChildrenNode';

const SelectSizes = () => (
  <Grid cols={{ mobile: 1, desktop: 3 }}>
    <Select id="select-simple-small" name="selectSizesSmall" label="Small" size="small" helperText="Helper text">
      <ChildrenNode />
    </Select>
    <Select
      id="select-simple-medium"
      name="selectSizesMedium"
      label="Medium (default)"
      size="medium"
      helperText="Helper text"
    >
      <ChildrenNode />
    </Select>
    <Select id="select-simple-large" name="selectSizesLarge" label="Large" size="large" helperText="Helper text">
      <ChildrenNode />
    </Select>
  </Grid>
);

export default SelectSizes;
