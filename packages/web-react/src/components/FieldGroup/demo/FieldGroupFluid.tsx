import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import FieldGroup from '../FieldGroup';

const FieldGroupFluid = () => (
  <FieldGroup id="FieldGroupFluid" label="Label" isFluid>
    <DocsBox>Item</DocsBox>
    <DocsBox>Item</DocsBox>
    <DocsBox>Item</DocsBox>
  </FieldGroup>
);

export default FieldGroupFluid;
