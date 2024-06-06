import React from 'react';
import TextArea from '../TextArea';

const TextAreaDefault = () => (
  <>
    <TextArea id="textarea-default" label="Label" name="textareaDefault" placeholder="Placeholder" />

    <TextArea id="textarea-filled" label="Label" name="textareaFilled" placeholder="Placeholder" value="Filled" />
  </>
);

export default TextAreaDefault;
