import React from 'react';
import { Tooltip } from '../../src/components/Tooltip';

const testTooltip = () => {
  // placement should be transformed from top-left to top-start etc.
  // original: <Tooltip placement="top-left">tooltip</Tooltip>
  return <Tooltip placement="top-left">tooltip</Tooltip>;
};

export default testTooltip;
