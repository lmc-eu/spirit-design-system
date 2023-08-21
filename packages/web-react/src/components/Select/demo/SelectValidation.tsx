import React from 'react';
import Select from '../Select';
import ChildrenNode from '../stories/ChildrenNode';

const SelectValidation = () => (
  <>
    <Select id="selectSuccess" label="Label" name="selectSuccess" validationState="success">
      <ChildrenNode />
    </Select>
    <Select
      id="selectWarning"
      label="Label"
      validationText="Validation text"
      name="selectWarning"
      validationState="warning"
    >
      <ChildrenNode />
    </Select>
    <Select
      id="selectDanger"
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
