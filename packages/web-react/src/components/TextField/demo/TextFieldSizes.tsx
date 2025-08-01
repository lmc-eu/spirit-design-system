import React from 'react';
import { Grid } from '../../Grid';
import TextField from '../TextField';

const TextFieldSizes = () => (
  <Grid cols={{ mobile: 1, desktop: 3 }}>
    <TextField
      id="text-field-size-small"
      label="Small"
      name="textFieldSizeSmall"
      placeholder="Placeholder"
      size="small"
      helperText="Helper text"
    />
    <TextField
      id="text-field-size-medium"
      label="Medium (default)"
      name="textFieldSizeMedium"
      placeholder="Placeholder"
      helperText="Helper text"
    />
    <TextField
      id="text-field-size-large"
      label="Large"
      name="textFieldSizeLarge"
      placeholder="Placeholder"
      size="large"
      helperText="Helper text"
    />

    <TextField
      id="text-field-password-size-small"
      label="Small"
      name="textFieldPasswordSizeSmall"
      value="password"
      size="small"
      helperText="Helper text"
      hasPasswordToggle
    />
    <TextField
      id="text-field-password-size-medium"
      label="Medium (default)"
      name="textFieldPasswordSizeMedium"
      value="password"
      helperText="Helper text"
      hasPasswordToggle
    />
    <TextField
      id="text-field-password-size-large"
      label="Large"
      name="textFieldPasswordSizeLarge"
      value="password"
      size="large"
      helperText="Helper text"
      hasPasswordToggle
    />
  </Grid>
);

export default TextFieldSizes;
