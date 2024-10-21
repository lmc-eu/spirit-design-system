import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Flex from '../Flex';

const FlexResponsiveCustomHorizontalSpacing = () => (
  <Flex spacingX={{ mobile: 'space-800', tablet: 'space-1000', desktop: 'space-1200' }}>
    <DocsBox size="small">Item 1</DocsBox>
    <DocsBox size="small">Item 2</DocsBox>
    <DocsBox size="small">Item 3</DocsBox>
  </Flex>
);

export default FlexResponsiveCustomHorizontalSpacing;
