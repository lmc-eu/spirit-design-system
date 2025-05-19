import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
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

    {Object.values([...Object.values(accentColorsObject), ...Object.values(emotionColorsObject)]).map((textColor) => (
      <DocsBox key={textColor}>
        <Heading elementType="h2" textColor={textColor}>
          Heading {textColor}
        </Heading>
      </DocsBox>
    ))}
  </>
);

export default HeadingTextColor;
