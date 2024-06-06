import React from 'react';
import Stack from '../Stack';
import { TextField } from '../../TextField';

const StackFormFields = () => (
  <Stack hasSpacing>
    <TextField id="textfield-stack-1" label="Label" name="textfieldStack1" placeholder="Placeholder" isRequired />
    <TextField id="textfield-stack-2" label="Label" name="textfieldStack2" placeholder="Placeholder" isRequired />
  </Stack>
);

export default StackFormFields;
