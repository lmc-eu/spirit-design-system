import React from 'react';
import { TextColors } from '../../../constants';
import Text from '../Text';

const TextColor = () => (
  <>
    {Object.values(TextColors).map((textColor) => (
      <Text key={textColor} textColor={textColor}>
        Text {textColor}
      </Text>
    ))}
  </>
);

export default TextColor;
