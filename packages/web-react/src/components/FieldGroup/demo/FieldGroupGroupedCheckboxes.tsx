import React from 'react';
import { Checkbox } from '../../Checkbox';
import FieldGroup from '../FieldGroup';

const FieldGroupGroupedCheckboxes = () => (
  <FieldGroup id="field-group-grouped-checkboxes" label="Label">
    <Checkbox id="checkbox-1" label="Checkbox Label" name="checkboxDefault" isChecked />
    <Checkbox id="checkbox-2" label="Checkbox Label" name="checkboxDefault" />
  </FieldGroup>
);

export default FieldGroupGroupedCheckboxes;
