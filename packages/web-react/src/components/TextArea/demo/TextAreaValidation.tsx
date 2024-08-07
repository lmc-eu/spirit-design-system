import React from 'react';
import TextArea from '../TextArea';

const TextAreaValidation = () => (
  <>
    <TextArea
      id="textarea-success"
      label="Label"
      name="textareaSuccess"
      placeholder="Placeholder"
      validationState="success"
      value="Filled"
    />

    <TextArea
      id="textarea-warning"
      label="Label"
      validationText="Validation text"
      name="textareaWarning"
      placeholder="Placeholder"
      validationState="warning"
      value="Filled"
    />

    <TextArea
      id="textarea-danger"
      label="Label"
      validationText={['Validation text', 'Second validation text']}
      name="textareaDanger"
      placeholder="Placeholder"
      validationState="danger"
      value="Filled"
    />

    <TextArea
      id="textarea-danger-helper"
      isRequired
      label="Label"
      helperText="This is helper text"
      validationText="Danger validation text"
      validationState="danger"
      name="textareaDangerHelper"
      placeholder="Placeholder"
      value="Filled"
    />
  </>
);

export default TextAreaValidation;
