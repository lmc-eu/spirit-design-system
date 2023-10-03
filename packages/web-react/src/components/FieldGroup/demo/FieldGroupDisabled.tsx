import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import FieldGroup from '../FieldGroup';

const FieldGroupDisabled = () => (
  <FieldGroup id="FieldGroupDisabled" label="Label" isDisabled>
    <DocsBox>Item</DocsBox>
    <DocsBox>Item</DocsBox>
    <DocsBox>Item</DocsBox>
  </FieldGroup>
);

export default FieldGroupDisabled;
