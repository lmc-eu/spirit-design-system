import React from 'react';
import Text from '../Text';

const TextBalanced = () => (
  <div style={{ maxWidth: '550px' }}>
    <Text>This text is not balanced. It may not have optimal line breaks and may appear uneven or awkward.</Text>
    <Text isTextBalanced>This text is balanced. It will minimize orphans and improves overall readability.</Text>
  </div>
);

export default TextBalanced;
