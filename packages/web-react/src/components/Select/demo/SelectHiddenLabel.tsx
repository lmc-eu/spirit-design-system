import React from 'react';
import Select from '../Select';
import ChildrenNode from './ChildrenNode';

const SelectHiddenLabel = () => (
  <Select id="selectHiddenLabel" name="selectHiddenLabel" label="Label" isLabelHidden>
    <ChildrenNode />
  </Select>
);

export default SelectHiddenLabel;
