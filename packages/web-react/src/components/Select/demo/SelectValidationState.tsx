import React from 'react';
import Select from '../Select';
import ChildrenNode from './ChildrenNode';

const SelectValidationState = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 1rem' }}>
    <Select
      id="select-success"
      label="Validation success"
      name="select-success"
      validationText="Success message"
      validationState="success"
      isRequired
    >
      <ChildrenNode isDisabledPlaceholder />
    </Select>
    <Select
      id="select-warning"
      label="Validation warning"
      validationText="Warning message"
      name="select-warning"
      validationState="warning"
      isRequired
    >
      <ChildrenNode isDisabledPlaceholder />
    </Select>
    <Select
      id="select-danger"
      label="Validation danger"
      validationText={['Danger message', 'Second Danger message']}
      name="select-danger"
      validationState="danger"
      isRequired
    >
      <ChildrenNode isDisabledPlaceholder />
    </Select>
  </div>
);

export default SelectValidationState;
