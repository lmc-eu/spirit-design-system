import React from 'react';
import { Button } from '../../Button';
import ActionGroup from '../ActionGroup';

const ResponsiveLayout = () => {
  return (
    <ActionGroup direction={{ mobile: 'column', tablet: 'row' }}>
      <Button color="primary">Primary Action</Button>
      <Button color="secondary">Secondary Action</Button>
      <Button color="tertiary">Tertiary Action</Button>
    </ActionGroup>
  );
};

export default ResponsiveLayout;
