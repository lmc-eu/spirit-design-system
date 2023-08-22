import React from 'react';
import Select from '../Select';
import ChildrenNode from './ChildrenNode';

const SelectFluid = () => (
  <Select id="selectFluid" name="selectFluid" label="Label" isFluid>
    <ChildrenNode />
  </Select>
);

export default SelectFluid;
