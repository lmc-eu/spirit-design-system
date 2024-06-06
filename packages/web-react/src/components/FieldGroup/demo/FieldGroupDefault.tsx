import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import FieldGroup from '../FieldGroup';

const FieldGroupDefault = () => (
  <FieldGroup id="field-group-default" label="Label">
    <DocsBox>Item</DocsBox>
    <DocsBox>Item</DocsBox>
    <DocsBox>Item</DocsBox>
  </FieldGroup>
);

export default FieldGroupDefault;
