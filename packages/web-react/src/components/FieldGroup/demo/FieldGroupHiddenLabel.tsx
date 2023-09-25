import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import FieldGroup from '../FieldGroup';

const FieldGroupHiddenLabel = () => (
  <FieldGroup id="FieldGroupHiddenLabel" label="Label" isLabelHidden>
    <DocsBox>Item</DocsBox>
    <DocsBox>Item</DocsBox>
    <DocsBox>Item</DocsBox>
  </FieldGroup>
);

export default FieldGroupHiddenLabel;
