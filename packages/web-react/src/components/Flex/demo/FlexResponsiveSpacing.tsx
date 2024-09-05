import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Flex from '../Flex';

const FlexResponsiveSpacing = () => (
  <Flex spacing={{ mobile: 'space-1000', tablet: 'space-1200', desktop: 'space-1600' }}>
    <DocsBox size="small">Item 1</DocsBox>
    <DocsBox size="small">Item 2</DocsBox>
    <DocsBox size="small">Item 3</DocsBox>
  </Flex>
);

export default FlexResponsiveSpacing;
