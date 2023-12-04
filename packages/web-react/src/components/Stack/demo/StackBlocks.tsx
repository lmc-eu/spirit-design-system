import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Stack from '../Stack';

const StackBlocks = () => (
  <Stack elementType="ul">
    {[1, 2, 3].map((i) => (
      <li key={`stack-default-${i}`}>
        <DocsBox>Block {i}</DocsBox>
      </li>
    ))}
  </Stack>
);

export default StackBlocks;
