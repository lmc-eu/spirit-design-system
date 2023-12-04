import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Stack from '../Stack';

const StackBlocksWithInnerDividersAndVerticalSpacing = () => (
  <Stack elementType="ul" hasSpacing hasIntermediateDividers>
    {[1, 2, 3].map((i) => (
      <li key={`stack-dividers-spacing-${i}`}>
        <DocsBox>Block {i}</DocsBox>
      </li>
    ))}
  </Stack>
);

export default StackBlocksWithInnerDividersAndVerticalSpacing;
