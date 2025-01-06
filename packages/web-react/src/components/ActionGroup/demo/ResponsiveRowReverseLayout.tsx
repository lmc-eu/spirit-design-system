import React from 'react';
import { Button } from '../../Button';
import ActionGroup from '../ActionGroup';

const ResponsiveRowReverseLayout = () => {
  return (
    <ActionGroup direction={{ mobile: 'row-reverse', tablet: 'row' }}>
      <Button color="primary">Primary Action</Button>
      <Button color="secondary">Secondary Action</Button>
      <Button color="tertiary">Tertiary Action</Button>
    </ActionGroup>
  );
};

export default ResponsiveRowReverseLayout;
