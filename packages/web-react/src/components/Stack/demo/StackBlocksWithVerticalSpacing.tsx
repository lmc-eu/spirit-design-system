import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Stack from '../Stack';

const StackBlocksWithVerticalSpacing = () => (
  <Stack elementType="ul" hasSpacing>
    {[1, 2, 3].map((i) => (
      <li key={i}>
        <DocsBox>Block {i}</DocsBox>
      </li>
    ))}
  </Stack>
);

export default StackBlocksWithVerticalSpacing;
