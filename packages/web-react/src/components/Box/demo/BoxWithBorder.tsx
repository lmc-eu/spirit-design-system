import React from 'react';
import { getAccentTextColors, getEmotionTextColors } from '../../../utils/colorObjectGenerators';
import Box from '../Box';

const accentColorsObject = getAccentTextColors();
const emotionColorsObject = getEmotionTextColors();

const BoxWithBorder = () => (
  <>
    <p>For demo purposes, the boxes have custom padding.</p>
    <Box padding="space-800" borderWidth="100">
      With solid border style
    </Box>
    <Box padding="space-800" borderWidth="100" borderStyle="dotted">
      With dotted border style
    </Box>
    <Box padding="space-800" borderWidth="100" borderStyle="dashed">
      With dashed border style
    </Box>
    <Box padding="space-800" borderWidth="200">
      With thicker border
    </Box>
    {Object.values([...Object.values(accentColorsObject), ...Object.values(emotionColorsObject)]).map((borderColor) => (
      <Box padding="space-800" borderColor={borderColor} borderWidth="100">
        With {borderColor} border color
      </Box>
    ))}
  </>
);

export default BoxWithBorder;
