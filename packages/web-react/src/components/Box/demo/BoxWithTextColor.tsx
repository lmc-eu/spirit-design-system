import React from 'react';
import { TextColors } from '../../../constants';
import { getAccentTextColors, getEmotionTextColors } from '../../../utils/colorObjectGenerators';
import Box from '../Box';

const accentColorsObject = getAccentTextColors();
const emotionColorsObject = getEmotionTextColors();

const BoxWithTextColor = () => (
  <>
    <p>For demo purposes, the boxes have custom padding and background color.</p>
    {Object.values([
      ...Object.values(TextColors),
      ...Object.values(accentColorsObject),
      ...Object.values(emotionColorsObject),
    ]).map((textColor) => (
      <Box padding="space-600" textColor={textColor} backgroundColor="secondary">
        With {textColor} text color
      </Box>
    ))}
  </>
);

export default BoxWithTextColor;
