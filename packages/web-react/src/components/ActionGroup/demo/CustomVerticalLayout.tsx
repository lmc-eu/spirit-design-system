import React from 'react';
import { Button } from '../../Button';
import ActionGroup from '../ActionGroup';

const CustomVerticalSpacing = () => {
  return (
    <ActionGroup direction="column" spacingY="space-1200">
      <Button color="primary">Primary Action</Button>
      <Button color="secondary">Secondary Action</Button>
      <Button color="tertiary">Tertiary Action</Button>
    </ActionGroup>
  );
};

export default CustomVerticalSpacing;
