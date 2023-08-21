import React from 'react';
import Select from '../Select';
import ChildrenNode from '../stories/ChildrenNode';

const SelectSimple = () => (
  <Select id="selectSimple" name="selectSimple" label="Label">
    <ChildrenNode />
  </Select>
);

export default SelectSimple;
