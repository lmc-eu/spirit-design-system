import React from 'react';
import TextArea from '../TextArea';

const TextAreaDefault = () => (
  <>
    <TextArea id="textareaDefault" label="Label" name="textareaDefault" placeholder="Placeholder" />

    <TextArea id="textareaFilled" label="Label" name="textareaFilled" placeholder="Placeholder" value="Filled" />
  </>
);

export default TextAreaDefault;
