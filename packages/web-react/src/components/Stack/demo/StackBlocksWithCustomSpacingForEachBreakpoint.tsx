import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Stack from '../Stack';

const StackBlocksWithCustomSpacingForEachBreakpoint = () => (
  <Stack elementType="ul" hasSpacing spacing={{ mobile: 'space-100', tablet: 'space-1000', desktop: 'space-1200' }}>
    {[1, 2, 3].map((i) => (
      <li key={`stack-custom-spacing-breakpoints-${i}`}>
        <DocsBox>Block {i}</DocsBox>
      </li>
    ))}
  </Stack>
);

export default StackBlocksWithCustomSpacingForEachBreakpoint;
