import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Stack from '../Stack';

const StackBlocksWithInnerDividersWithoutVerticalSpacing = () => (
  <Stack elementType="ul" hasIntermediateDividers>
    {[1, 2, 3].map((i) => (
      <li key={i}>
        <DocsBox>Block {i}</DocsBox>
      </li>
    ))}
  </Stack>
);

export default StackBlocksWithInnerDividersWithoutVerticalSpacing;
