import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Stack from '../Stack';

const StackBlocksWithCustomSpacingAndDividers = () => (
  <Stack elementType="ul" hasSpacing hasStartDivider hasEndDivider hasIntermediateDividers spacing="space-800">
    {[1, 2, 3].map((i) => (
      <li key={`stack-custom-spacing-dividers-${i}`}>
        <DocsBox>Block {i}</DocsBox>
      </li>
    ))}
  </Stack>
);

export default StackBlocksWithCustomSpacingAndDividers;
