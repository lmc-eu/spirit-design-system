import React from 'react';
import { Button } from '../../Button';
import TextArea from '../TextArea';

const TextAreaInline = () => (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
    <TextArea
      id="textarea-inline"
      isLabelHidden
      label="Hidden Label"
      name="textareaInline"
      placeholder="Placeholder"
      value="Filled"
    />
    <Button>Button</Button>
  </div>
);

export default TextAreaInline;
