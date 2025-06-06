import React from 'react';
import { TextColors } from '../../../constants';
import { getAccentTextColors, getEmotionTextColors } from '../../../utils/colorObjectGenerators';
import Text from '../Text';

const accentColorsObject = getAccentTextColors();
const emotionColorsObject = getEmotionTextColors();

const TextColor = () => (
  <>
    {Object.values(TextColors).map((textColor) => (
      <Text key={textColor} textColor={textColor}>
        Text {textColor}
      </Text>
    ))}

    {[...Object.values(accentColorsObject), ...Object.values(emotionColorsObject)].map((textColor) => {
      const bgColor = textColor.replace(/basic|subtle/, (match) => (match === 'basic' ? 'subtle' : 'basic'));

      return (
        <div className={`bg-${bgColor} p-800`} key={textColor}>
          <Text textColor={textColor}>Text {textColor}</Text>
        </div>
      );
    })}
  </>
);

export default TextColor;
