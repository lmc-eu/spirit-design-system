import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Flex from '../Flex';

const FlexCustomSpacing = () => (
  <Flex spacing="space-1600">
    <DocsBox size="small">Item 1</DocsBox>
    <DocsBox size="small">Item 2</DocsBox>
    <DocsBox size="small">Item 3</DocsBox>
  </Flex>
);

export default FlexCustomSpacing;
