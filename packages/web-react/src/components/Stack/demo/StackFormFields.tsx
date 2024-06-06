import React from 'react';
import { TextField } from '../../TextField';
import Stack from '../Stack';

const StackFormFields = () => (
  <Stack hasSpacing>
    <TextField id="textfield-stack-1" label="Label" name="textfieldStack1" placeholder="Placeholder" isRequired />
    <TextField id="textfield-stack-2" label="Label" name="textfieldStack2" placeholder="Placeholder" isRequired />
  </Stack>
);

export default StackFormFields;
