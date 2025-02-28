import React from 'react';
import { TextAlignments } from '../../../constants';
import Heading from '../Heading';

const HeadingAlignment = () => (
  <>
    <Heading elementType="h2">Heading</Heading>
    <Heading elementType="h2" textAlignment={TextAlignments.CENTER}>
      Heading
    </Heading>
    <Heading elementType="h2" textAlignment={TextAlignments.RIGHT}>
      Heading
    </Heading>
  </>
);

export default HeadingAlignment;
