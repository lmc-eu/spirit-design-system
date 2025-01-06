import React from 'react';
import { Button } from '../../Button';
import ActionGroup from '../ActionGroup';

const RowReverseLayout = () => {
  return (
    <ActionGroup direction="row-reverse">
      <Button color="primary">Primary Action</Button>
      <Button color="secondary">Secondary Action</Button>
      <Button color="tertiary">Tertiary Action</Button>
    </ActionGroup>
  );
};

export default RowReverseLayout;
