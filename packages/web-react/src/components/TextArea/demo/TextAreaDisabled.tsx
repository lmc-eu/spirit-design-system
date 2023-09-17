import React from 'react';
import TextArea from '../TextArea';

const TextAreaDisabled = () => (
  <>
    <TextArea id="textareaDisabled" label="Label" name="textareaDisabled" placeholder="Placeholder" isDisabled />

    <TextArea
      id="textareaDisabledFilled"
      label="Label"
      name="textareaDisabledFilled"
      placeholder="Placeholder"
      value="Filled"
      isDisabled
      isRequired
    />
  </>
);

export default TextAreaDisabled;
