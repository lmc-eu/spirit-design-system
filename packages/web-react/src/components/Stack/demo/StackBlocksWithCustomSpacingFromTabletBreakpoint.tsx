import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Stack from '../Stack';

const StackBlocksWithCustomSpacingFromTabletBreakpoint = () => (
  <Stack elementType="ul" hasSpacing spacing={{ tablet: 'space-1200' }}>
    {[1, 2, 3].map((i) => (
      <li key={`stack-custom-spacing-tablet-${i}`}>
        <DocsBox>Block {i}</DocsBox>
      </li>
    ))}
  </Stack>
);

export default StackBlocksWithCustomSpacingFromTabletBreakpoint;
