import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import FieldGroup from '../FieldGroup';

const FieldGroupValidationState = () => (
  <>
    <FieldGroup
      id="FieldGroupValidationSuccess"
      label="Label"
      validationState="success"
      validationText="Validation text"
    >
      <DocsBox>Item</DocsBox>
      <DocsBox>Item</DocsBox>
      <DocsBox>Item</DocsBox>
    </FieldGroup>
    <FieldGroup
      id="FieldGroupValidationWarning"
      label="Label"
      validationState="warning"
      validationText="Validation text"
    >
      <DocsBox>Item</DocsBox>
      <DocsBox>Item</DocsBox>
      <DocsBox>Item</DocsBox>
    </FieldGroup>
    <FieldGroup
      id="FieldGroupValidationDanger"
      label="Label"
      validationState="danger"
      validationText={['First validation text', 'Second validation text']}
    >
      <DocsBox>Item</DocsBox>
      <DocsBox>Item</DocsBox>
      <DocsBox>Item</DocsBox>
    </FieldGroup>
  </>
);

export default FieldGroupValidationState;
