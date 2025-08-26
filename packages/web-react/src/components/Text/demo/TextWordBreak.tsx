import React from 'react';
import { TextWordBreaks } from '../../../constants';
import Text from '../Text';

const TextWordBreak = () => (
  <div style={{ maxWidth: '200px' }} className="border-100 border-dashed border-basic">
    <Text>Text with no specific word break: supercalifragilisticexpialidocious</Text>
    <Text textWordBreak={TextWordBreaks.ANYWHERE}>
      Text with long word that should break anywhere: supercalifragilisticexpialidocious
    </Text>
    <Text textWordBreak={TextWordBreaks.LONG_WORDS}>
      Text with long word that should break at long words: supercalifragilisticexpialidocious
    </Text>
  </div>
);

export default TextWordBreak;
