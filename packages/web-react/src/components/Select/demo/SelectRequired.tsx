import React from 'react';
import Select from '../Select';
import ChildrenNode from './ChildrenNode';

const SelectRequired = () => (
  <Select id="select-required" name="selectRequired" label="Label" isRequired>
    <ChildrenNode showPlaceholder />
  </Select>
);

export default SelectRequired;
