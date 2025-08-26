import React from 'react';
import { TextWordBreaks } from '../../../constants';
import Heading from '../Heading';

const HeadingWordBreak = () => (
  <div style={{ maxWidth: '200px' }} className="border-100 border-dashed border-basic">
    <Heading elementType="h3" size="xsmall">
      Heading with no specific word break: supercalifragilisticexpialidocious
    </Heading>
    <Heading elementType="h3" size="xsmall" textWordBreak={TextWordBreaks.ANYWHERE}>
      Heading with long word that should break anywhere: supercalifragilisticexpialidocious
    </Heading>
    <Heading elementType="h3" size="xsmall" textWordBreak={TextWordBreaks.LONG_WORDS}>
      Heading with long word that should break at long words: supercalifragilisticexpialidocious
    </Heading>
  </div>
);

export default HeadingWordBreak;
