import React from 'react';
import Select from '../Select';
import ChildrenNode from './ChildrenNode';

const SelectDisabled = () => (
  <Select id="select-disabled" name="selectDisabled" label="Label" isDisabled>
    <ChildrenNode />
  </Select>
);

export default SelectDisabled;
