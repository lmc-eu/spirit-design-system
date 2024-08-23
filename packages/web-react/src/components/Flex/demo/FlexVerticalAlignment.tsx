import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Flex from '../Flex';

const FlexVerticalAlignment = () => (
  <>
    <Flex alignmentY="stretch">
      <DocsBox size="small">Item 1</DocsBox>
      <DocsBox size="small">
        Item 2<br />
        is taller
      </DocsBox>
      <DocsBox size="small">Item 3</DocsBox>
    </Flex>
    <Flex alignmentY="top">
      <DocsBox size="small">Item 1</DocsBox>
      <DocsBox size="small">
        Item 2<br />
        is taller
      </DocsBox>
      <DocsBox size="small">Item 3</DocsBox>
    </Flex>
    <Flex alignmentY="center">
      <DocsBox size="small">Item 1</DocsBox>
      <DocsBox size="small">
        Item 2<br />
        is taller
      </DocsBox>
      <DocsBox size="small">Item 3</DocsBox>
    </Flex>
    <Flex alignmentY="bottom">
      <DocsBox size="small">Item 1</DocsBox>
      <DocsBox size="small">
        Item 2<br />
        is taller
      </DocsBox>
      <DocsBox size="small">Item 3</DocsBox>
    </Flex>
    <Flex alignmentY="baseline">
      <DocsBox size="small">Item 1</DocsBox>
      <DocsBox size="small">
        Item 2<br />
        is taller
      </DocsBox>
      <DocsBox UNSAFE_className="typography-heading-small-text">Item 3 has bigger font size</DocsBox>
    </Flex>
  </>
);

export default FlexVerticalAlignment;
