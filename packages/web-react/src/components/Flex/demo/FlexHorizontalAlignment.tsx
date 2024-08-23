import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Flex from '../Flex';

const FlexHorizontalAlignment = () => (
  <>
    <Flex alignmentX="stretch">
      <DocsBox size="small">Item 1</DocsBox>
      <DocsBox size="small">Item 2</DocsBox>
      <DocsBox size="small">Item 3</DocsBox>
    </Flex>
    <Flex alignmentX="left">
      <DocsBox size="small">Item 1</DocsBox>
      <DocsBox size="small">Item 2</DocsBox>
      <DocsBox size="small">Item 3</DocsBox>
    </Flex>
    <Flex alignmentX="center">
      <DocsBox size="small">Item 1</DocsBox>
      <DocsBox size="small">Item 2</DocsBox>
      <DocsBox size="small">Item 3</DocsBox>
    </Flex>
    <Flex alignmentX="right">
      <DocsBox size="small">Item 1</DocsBox>
      <DocsBox size="small">Item 2</DocsBox>
      <DocsBox size="small">Item 3</DocsBox>
    </Flex>
    <Flex alignmentX="space-between">
      <DocsBox size="small">Item 1</DocsBox>
      <DocsBox size="small">Item 2</DocsBox>
      <DocsBox size="small">Item 3</DocsBox>
    </Flex>
  </>
);

export default FlexHorizontalAlignment;
