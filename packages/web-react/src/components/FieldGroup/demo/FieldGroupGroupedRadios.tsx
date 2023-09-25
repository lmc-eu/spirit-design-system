import React from 'react';
import { Radio } from '../../Radio';
import FieldGroup from '../FieldGroup';

const FieldGroupGroupedRadios = () => (
  <FieldGroup id="FieldGroupGroupedRadios" label="Label">
    <Radio id="radio1" label="Radio Label" name="radioDefault" isChecked />
    <Radio id="radio2" label="Radio Label" name="radioDefault" />
  </FieldGroup>
);

export default FieldGroupGroupedRadios;
