import React from 'react';
import { Button } from '../../Button';
import ActionGroup from '../ActionGroup';

const ColumnLayout = () => {
  return (
    <ActionGroup direction="column">
      <Button color="primary">Primary Action</Button>
      <Button color="secondary">Secondary Action</Button>
      <Button color="tertiary">Tertiary Action</Button>
    </ActionGroup>
  );
};

export default ColumnLayout;
