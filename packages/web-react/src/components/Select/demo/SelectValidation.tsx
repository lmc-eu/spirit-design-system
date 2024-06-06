import React from 'react';
import Select from '../Select';
import ChildrenNode from './ChildrenNode';

const SelectValidation = () => (
  <>
    <Select id="select-success" label="Label" name="selectSuccess" validationState="success">
      <ChildrenNode />
    </Select>
    <Select
      id="select-warning"
      label="Label"
      validationText="Validation text"
      name="selectWarning"
      validationState="warning"
    >
      <ChildrenNode />
    </Select>
    <Select
      id="select-danger"
      label="Label"
      validationText={['First validation text', 'Second validation text']}
      name="selectDanger"
      validationState="danger"
    >
      <ChildrenNode />
    </Select>
  </>
);

export default SelectValidation;
