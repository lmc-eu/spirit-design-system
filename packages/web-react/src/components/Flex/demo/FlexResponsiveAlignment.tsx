import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Flex from '../Flex';

const FlexResponsiveAlignment = () => (
  <>
    <Flex
      alignmentX={{ mobile: 'stretch', tablet: 'space-between' }}
      alignmentY={{ mobile: 'stretch', tablet: 'baseline' }}
    >
      <DocsBox size="small">Item 1</DocsBox>
      <DocsBox size="small">
        Item 2<br />
        is taller
      </DocsBox>
      <DocsBox size="small">Item 3</DocsBox>
    </Flex>
    <Flex direction="vertical" alignmentX={{ mobile: 'left', tablet: 'center', desktop: 'right' }}>
      <DocsBox size="small">Item 1 is longer</DocsBox>
      <DocsBox size="small">Item 2</DocsBox>
      <DocsBox size="small">Item 3</DocsBox>
    </Flex>
  </>
);

export default FlexResponsiveAlignment;
