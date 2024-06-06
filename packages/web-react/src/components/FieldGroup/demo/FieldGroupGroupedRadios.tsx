import React from 'react';
import { Radio } from '../../Radio';
import FieldGroup from '../FieldGroup';

const FieldGroupGroupedRadios = () => (
  <FieldGroup id="field-group-grouped-radios" label="Label">
    <Radio id="radio-1" label="Radio Label" name="radioDefault" isChecked />
    <Radio id="radio-2" label="Radio Label" name="radioDefault" />
  </FieldGroup>
);

export default FieldGroupGroupedRadios;
