import React from 'react';
import { TextHyphens } from '../../../constants';
import Text from '../Text';

const TextWordBreak = () => (
  <div style={{ maxWidth: '200px' }} className="border-100 border-dashed border-basic">
    <Text>Text with no specific hyphenation: supercalifragilisticexpialidocious</Text>
    <Text textHyphens={TextHyphens.NONE}>Text with no hyphens: supercalifragilisticexpialidocious</Text>
    <Text textHyphens={TextHyphens.MANUAL}>Text with manual hyphens: super&shy;califragilisticexpialidocious</Text>
  </div>
);

export default TextWordBreak;
