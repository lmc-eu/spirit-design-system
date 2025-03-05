import React from 'react';
import { AlignmentX } from '../../../constants';
import Text from '../Text';

const TextAlignment = () => (
  <>
    <Text>Text left</Text>
    <Text textAlignment={AlignmentX.CENTER}>Text center</Text>
    <Text textAlignment={AlignmentX.RIGHT}>Text right</Text>
  </>
);

export default TextAlignment;
