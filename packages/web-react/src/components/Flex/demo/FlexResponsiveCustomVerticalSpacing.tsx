import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Flex from '../Flex';

const FlexResponsiveCustomVerticalSpacing = () => (
  <Flex isWrapping spacingY={{ mobile: 'space-800', tablet: 'space-1000', desktop: 'space-1200' }}>
    {[...Array(15)].map((_, index) => (
      <DocsBox key={`item-${index + 1}`} size="small">
        Item {index + 1}
      </DocsBox>
    ))}
  </Flex>
);

export default FlexResponsiveCustomVerticalSpacing;
