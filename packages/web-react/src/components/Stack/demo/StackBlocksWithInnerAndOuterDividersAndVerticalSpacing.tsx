import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Stack from '../Stack';

const StackBlocksWithInnerAndOuterDividersAndVerticalSpacing = () => (
  <Stack elementType="ul" hasSpacing hasIntermediateDividers hasStartDivider hasEndDivider>
    {[1, 2, 3].map((i) => (
      <li key={`stack-dividers-${i}`}>
        <DocsBox>Block {i}</DocsBox>
      </li>
    ))}
  </Stack>
);

export default StackBlocksWithInnerAndOuterDividersAndVerticalSpacing;
