import React from 'react';
import Heading from '../Heading';

const HeadingBalanced = () => (
  <div style={{ maxWidth: '750px' }}>
    <Heading elementType="h2" size="xsmall">
      This text is not balanced. It will not have optimal line breaks and may look uneven or awkward in appearance.
    </Heading>
    <Heading elementType="h2" isTextBalanced size="xsmall">
      This text is balanced. It will have optimal line breaks and look more even and visually appealing in appearance.
    </Heading>
  </div>
);

export default HeadingBalanced;
