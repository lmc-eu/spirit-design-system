import React from 'react';
import Select from '../Select';
import ChildrenNode from '../stories/ChildrenNode';

const SelectDisabled = () => (
  <Select id="selectDisabled" name="selectDisabled" label="Label" isDisabled>
    <ChildrenNode />
  </Select>
);

export default SelectDisabled;
