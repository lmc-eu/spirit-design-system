import React from 'react';
import Select from '../Select';
import ChildrenNode from './ChildrenNode';

const SelectHelperText = () => (
  <Select id="select-helper-text" name="selectHelperText" label="Label" helperText="Helper text">
    <ChildrenNode />
  </Select>
);

export default SelectHelperText;
