import React from 'react';
import TextArea from '../TextArea';

const TextAreaHiddenLabel = () => (
  <TextArea
    id="textarea-hidden-label"
    label="Label"
    name="textareaHiddenLabel"
    placeholder="Placeholder"
    isLabelHidden
  />
);

export default TextAreaHiddenLabel;
