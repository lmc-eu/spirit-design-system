import React from 'react';
import Select from '../Select';
import ChildrenNode from './ChildrenNode';

const SelectPlaceholder = () => (
  <>
    <Select id="selectPlaceholder" name="selectPlaceholder" label="Label">
      <ChildrenNode showPlaceholder />
    </Select>
    <Select id="selectPlaceholder" name="selectPlaceholder" label="Label" isRequired>
      <ChildrenNode showPlaceholder isDisabledPlaceholder />
    </Select>
  </>
);

export default SelectPlaceholder;
