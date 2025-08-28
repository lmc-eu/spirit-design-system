import React from 'react';
import Text from '../Text';

const TextBalanced = () => (
  <div style={{ maxWidth: '750px' }}>
    <Text>
      This text is not balanced. It will not have optimal line breaks and may look uneven or awkward in appearance.
    </Text>
    <Text isTextBalanced>
      This text is balanced. It will have optimal line breaks and look more even and visually appealing in appearance.
    </Text>
  </div>
);

export default TextBalanced;
