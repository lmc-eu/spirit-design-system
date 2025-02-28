import React from 'react';
import { TextAlignments } from '../../../constants';
import Text from '../Text';

const TextAlignment = () => (
  <>
    <Text>Text left</Text>
    <Text textAlignment={TextAlignments.CENTER}>Text center</Text>
    <Text textAlignment={TextAlignments.RIGHT}>Text right</Text>
  </>
);

export default TextAlignment;
