import React from 'react';
import { TextHyphens } from '../../../constants';
import Text from '../Text';

const TextWordBreak = () => (
  <div style={{ maxWidth: '200px' }}>
    <Text>Default text with no specific hyphenation</Text>
    <Text textHyphens={TextHyphens.NONE}>Text with no hyphens: supercalifragilisticexpialidocious</Text>
    <Text textHyphens={TextHyphens.MANUAL}>Text with manual hyphens: super&shy;califragilisticexpialidocious</Text>
  </div>
);

export default TextWordBreak;
