import React from 'react';
import { Button } from '../../Button';
import TextField from '../TextField';

const TextFieldInline = () => (
  <>
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', maxWidth: '320px' }}>
      <TextField
        id="textfieldInline"
        isLabelHidden
        label="Hidden Label"
        name="textfieldInline"
        placeholder="Placeholder"
        value="Filled"
      />
      <Button>Button</Button>
    </div>

    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', maxWidth: '320px' }}>
      <TextField
        id="textfieldInlineFirst"
        isLabelHidden
        label="Hidden Label"
        name="textfieldInlineFirst"
        placeholder="Placeholder"
        value="Filled"
      />
      <TextField
        id="textfieldInlinePassword"
        isLabelHidden
        label="Hidden Label"
        hasPasswordToggle
        name="textfieldInlinePassword"
        validationState="danger"
        validationText="Too short"
        placeholder="Placeholder"
        value="1234"
      />
      <Button>Button</Button>
    </div>
  </>
);

export default TextFieldInline;
