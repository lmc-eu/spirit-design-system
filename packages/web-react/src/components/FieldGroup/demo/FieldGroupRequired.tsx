import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import FieldGroup from '../FieldGroup';

const FieldGroupRequired = () => {
  return (
    <FieldGroup id="FieldGroupRequired" label="Label" isRequired>
      <DocsBox>Item</DocsBox>
      <DocsBox>Item</DocsBox>
      <DocsBox>Item</DocsBox>
    </FieldGroup>
  );
};

export default FieldGroupRequired;
