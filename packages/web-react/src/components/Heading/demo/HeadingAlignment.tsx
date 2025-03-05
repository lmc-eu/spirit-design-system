import React from 'react';
import { AlignmentX } from '../../../constants';
import Heading from '../Heading';

const HeadingAlignment = () => (
  <>
    <Heading elementType="h2">Heading</Heading>
    <Heading elementType="h2" textAlignment={AlignmentX.CENTER}>
      Heading
    </Heading>
    <Heading elementType="h2" textAlignment={AlignmentX.RIGHT}>
      Heading
    </Heading>
  </>
);

export default HeadingAlignment;
