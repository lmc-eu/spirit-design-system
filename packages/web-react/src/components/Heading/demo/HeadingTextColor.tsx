import React from 'react';
import { TextColors } from '../../../constants';
import { getAccentTextColors, getEmotionTextColors } from '../../../utils/colorObjectGenerators';
import Heading from '../Heading';

const accentColorsObject = getAccentTextColors();
const emotionColorsObject = getEmotionTextColors();

const HeadingTextColor = () => (
  <>
    {Object.values(TextColors).map((textColor) => (
      <Heading elementType="h2" key={textColor} textColor={textColor}>
        Heading {textColor}
      </Heading>
    ))}

    {[...Object.values(accentColorsObject), ...Object.values(emotionColorsObject)].map((textColor) => {
      const bgColor = textColor.replace(/basic|subtle/, (match) => (match === 'basic' ? 'subtle' : 'basic'));

      return (
        <div className={`bg-${bgColor} p-800`} key={textColor}>
          <Heading elementType="h2" key={textColor} textColor={textColor}>
            Heading {textColor}
          </Heading>
        </div>
      );
    })}
  </>
);

export default HeadingTextColor;
