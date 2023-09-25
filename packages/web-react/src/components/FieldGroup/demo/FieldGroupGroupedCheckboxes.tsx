import React from 'react';
import { Checkbox } from '../../Checkbox';
import FieldGroup from '../FieldGroup';

const FieldGroupGroupedCheckboxes = () => (
  <FieldGroup id="FieldGroupGroupedCheckboxes" label="Label">
    <Checkbox id="checkbox1" label="Checkbox Label" name="checkboxDefault" isChecked />
    <Checkbox id="checkbox2" label="Checkbox Label" name="checkboxDefault" />
  </FieldGroup>
);

export default FieldGroupGroupedCheckboxes;
