import React from 'react';
import Heading from '../Heading';

const HeadingBalanced = () => (
  <div style={{ maxWidth: '650px' }}>
    <Heading elementType="h2" size="xsmall">
      This heading is not balanced. It may not have optimal line breaks and may appear uneven or awkward.
    </Heading>
    <Heading elementType="h2" isTextBalanced size="xsmall">
      This heading is balanced. It will have optimal line breaks and look more even and visually appealing.
    </Heading>
  </div>
);

export default HeadingBalanced;
