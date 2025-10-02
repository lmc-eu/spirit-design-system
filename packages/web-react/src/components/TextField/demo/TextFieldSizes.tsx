import React from 'react';
import { Grid } from '../../Grid';
import TextField from '../TextField';

const TextFieldSizes = () => (
  <Grid cols={{ mobile: 1, desktop: 3 }}>
    <TextField
      helperText="Helper text"
      id="text-field-size-small"
      label="Small"
      name="textFieldSizeSmall"
      placeholder="Placeholder"
      size="small"
    />
    <TextField
      helperText="Helper text"
      id="text-field-size-medium"
      label="Medium (default)"
      name="textFieldSizeMedium"
      placeholder="Placeholder"
    />
    <TextField
      helperText="Helper text"
      id="text-field-size-large"
      label="Large"
      name="textFieldSizeLarge"
      placeholder="Placeholder"
      size="large"
    />

    <TextField
      hasPasswordToggle
      helperText="Helper text"
      id="text-field-password-size-small"
      label="Small"
      name="textFieldPasswordSizeSmall"
      onChange={(e) => console.log(`Value: ${(e.target as HTMLInputElement).value}`)}
      size="small"
      value="password"
    />
    <TextField
      hasPasswordToggle
      helperText="Helper text"
      id="text-field-password-size-medium"
      label="Medium (default)"
      name="textFieldPasswordSizeMedium"
      onChange={(e) => console.log(`Value: ${(e.target as HTMLInputElement).value}`)}
      value="password"
    />
    <TextField
      hasPasswordToggle
      helperText="Helper text"
      id="text-field-password-size-large"
      label="Large"
      name="textFieldPasswordSizeLarge"
      onChange={(e) => console.log(`Value: ${(e.target as HTMLInputElement).value}`)}
      size="large"
      value="password"
    />
  </Grid>
);

export default TextFieldSizes;
