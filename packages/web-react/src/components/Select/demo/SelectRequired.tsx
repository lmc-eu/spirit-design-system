import React from 'react';
import Select from '../Select';
import ChildrenNode from './ChildrenNode';

const SelectRequired = () => (
  <Select id="selectRequired" name="selectRequired" label="Label" isRequired>
    <ChildrenNode showPlaceholder />
  </Select>
);

export default SelectRequired;
