import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Flex from '../Flex';

const FlexVerticalLayoutHorizontalAlignment = () => (
  <>
    <Flex direction="vertical" alignmentX="stretch">
      <DocsBox size="small">Item 1 with long content</DocsBox>
      <DocsBox size="small">Item 2</DocsBox>
      <DocsBox size="small">Item 3</DocsBox>
    </Flex>
    <Flex direction="vertical" alignmentX="left">
      <DocsBox size="small">Item 1 with long content</DocsBox>
      <DocsBox size="small">Item 2</DocsBox>
      <DocsBox size="small">Item 3</DocsBox>
    </Flex>
    <Flex direction="vertical" alignmentX="center">
      <DocsBox size="small">Item 1 with long content</DocsBox>
      <DocsBox size="small">Item 2</DocsBox>
      <DocsBox size="small">Item 3</DocsBox>
    </Flex>
    <Flex direction="vertical" alignmentX="right">
      <DocsBox size="small">Item 1 with long content</DocsBox>
      <DocsBox size="small">Item 2</DocsBox>
      <DocsBox size="small">Item 3</DocsBox>
    </Flex>
  </>
);

export default FlexVerticalLayoutHorizontalAlignment;
