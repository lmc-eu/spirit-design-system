import React from 'react';
import { Button } from '../../Button';
import ActionGroup from '../ActionGroup';

const ResponsiveHorizontalAlignment = () => {
  return (
    <ActionGroup alignmentX={{ mobile: 'right', tablet: 'center', desktop: 'left' }}>
      <Button color="primary">Primary Action</Button>
      <Button color="secondary">Secondary Action</Button>
      <Button color="tertiary">Tertiary Action</Button>
    </ActionGroup>
  );
};

export default ResponsiveHorizontalAlignment;
