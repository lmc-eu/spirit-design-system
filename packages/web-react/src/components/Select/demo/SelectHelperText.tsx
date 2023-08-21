import React from 'react';
import Select from '../Select';
import ChildrenNode from '../stories/ChildrenNode';

const SelectHelperText = () => (
  <Select id="selectHelperText" name="selectHelperText" label="Label" helperText="Helper text">
    <ChildrenNode />
  </Select>
);

export default SelectHelperText;
