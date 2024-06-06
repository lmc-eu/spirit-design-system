import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import FieldGroup from '../FieldGroup';

const FieldGroupHelperText = () => (
  <FieldGroup label="Label" id="field-group-helper-text" helperText="Helper text">
    <DocsBox>Item</DocsBox>
    <DocsBox>Item</DocsBox>
    <DocsBox>Item</DocsBox>
  </FieldGroup>
);

export default FieldGroupHelperText;
