import React from 'react';
import { TextHyphens } from '../../../constants';
import Heading from '../Heading';

const HeadingWordBreak = () => (
  <div style={{ maxWidth: '200px' }} className="border-100 border-dashed border-basic">
    <Heading elementType="h2" size="xsmall">
      Heading with no specific hyphenation: supercalifragilisticexpialidocious
    </Heading>
    <Heading elementType="h2" size="xsmall" textHyphens={TextHyphens.NONE}>
      Heading with no hyphens: supercalifragilisticexpialidocious
    </Heading>
    <Heading elementType="h2" size="xsmall" textHyphens={TextHyphens.MANUAL}>
      Heading with manual hyphens: super&shy;califragilisticexpialidocious
    </Heading>
  </div>
);

export default HeadingWordBreak;
