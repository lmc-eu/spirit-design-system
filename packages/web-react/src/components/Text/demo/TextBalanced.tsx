import React from 'react';
import Text from '../Text';

const TextBalanced = () => (
  <div style={{ maxWidth: '750px' }}>
    <Text>This text is not balanced. It may not have optimal line breaks and may appear uneven or awkward.</Text>
    <Text isTextBalanced>
      This text is balanced. It will have optimal line breaks and look more even and visually appealing.
    </Text>
  </div>
);

export default TextBalanced;
