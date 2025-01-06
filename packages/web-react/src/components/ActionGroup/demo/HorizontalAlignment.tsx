import React from 'react';
import { Button } from '../../Button';
import ActionGroup from '../ActionGroup';

const HorizontalAlignment = () => {
  return (
    <>
      <ActionGroup alignmentX="left">
        <Button color="primary">Primary Action</Button>
        <Button color="secondary">Secondary Action</Button>
        <Button color="tertiary">Tertiary Action</Button>
      </ActionGroup>
      <ActionGroup alignmentX="center">
        <Button color="primary">Primary Action</Button>
        <Button color="secondary">Secondary Action</Button>
        <Button color="tertiary">Tertiary Action</Button>
      </ActionGroup>
      <ActionGroup alignmentX="right">
        <Button color="primary">Primary Action</Button>
        <Button color="secondary">Secondary Action</Button>
        <Button color="tertiary">Tertiary Action</Button>
      </ActionGroup>
    </>
  );
};

export default HorizontalAlignment;
