import React from 'react';
import { Button } from '../../Button';
import TextField from '../TextField';

const TextFieldInline = () => (
  <>
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', maxWidth: '320px' }}>
      <TextField
        id="textfield-inline"
        isLabelHidden
        label="Hidden Label"
        name="textfieldInline"
        placeholder="Placeholder"
        defaultValue="Filled"
      />
      <Button>Button</Button>
    </div>

    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', maxWidth: '320px' }}>
      <TextField
        id="textfield-inline-first"
        isLabelHidden
        label="Hidden Label"
        name="textfieldInlineFirst"
        placeholder="Placeholder"
        defaultValue="Filled"
      />
      <TextField
        hasPasswordToggle
        id="textfield-inline-password"
        isLabelHidden
        label="Hidden Label"
        name="textfieldInlinePassword"
        placeholder="Placeholder"
        validationState="danger"
        validationText="Too short"
        defaultValue="1234"
      />
      <Button>Button</Button>
    </div>
  </>
);

export default TextFieldInline;
