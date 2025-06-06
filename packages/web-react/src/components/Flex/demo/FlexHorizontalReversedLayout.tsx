import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Flex from '../Flex';

const FlexHorizontalReversedLayout = () => (
  <Flex direction="horizontal-reversed">
    <DocsBox size="small">Item 1</DocsBox>
    <DocsBox size="small">Item 2</DocsBox>
    <DocsBox size="small">Item 3</DocsBox>
  </Flex>
);

export default FlexHorizontalReversedLayout;
