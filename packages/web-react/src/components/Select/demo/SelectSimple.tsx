import React from 'react';
import Select from '../Select';
import ChildrenNode from './ChildrenNode';

const SelectSimple = () => (
  <Select id="select-simple" name="selectSimple" label="Label">
    <ChildrenNode />
  </Select>
);

export default SelectSimple;
