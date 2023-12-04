import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Stack from '../Stack';

const StackBlocksWithCustomSpacing = () => (
  <Stack elementType="ul" hasSpacing spacing="space-1200">
    {[1, 2, 3].map((i) => (
      <li key={`stack-custom-spacing-${i}`}>
        <DocsBox>Block {i}</DocsBox>
      </li>
    ))}
  </Stack>
);

export default StackBlocksWithCustomSpacing;
