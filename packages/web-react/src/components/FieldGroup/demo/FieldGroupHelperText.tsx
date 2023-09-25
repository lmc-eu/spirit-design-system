import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import FieldGroup from '../FieldGroup';

const FieldGroupHelperText = () => (
  <FieldGroup label="Label" id="FieldGroupHelperText" helperText="Helper text">
    <DocsBox>Item</DocsBox>
    <DocsBox>Item</DocsBox>
    <DocsBox>Item</DocsBox>
  </FieldGroup>
);

export default FieldGroupHelperText;
