import React from 'react';
import TextArea from '../TextArea';

const TextAreaDisabled = () => (
  <>
    <TextArea id="textarea-disabled" label="Label" name="textareaDisabled" placeholder="Placeholder" isDisabled />

    <TextArea
      id="textarea-disabled-filled"
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
