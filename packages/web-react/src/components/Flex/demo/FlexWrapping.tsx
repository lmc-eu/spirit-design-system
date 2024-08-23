import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Flex from '../Flex';

const FlexWrapping = () => (
  <Flex isWrapping>
    {[...Array(15)].map((_, index) => (
      <DocsBox key={`item-${index + 1}`} size="small">
        Item {index + 1}
      </DocsBox>
    ))}
  </Flex>
);

export default FlexWrapping;
