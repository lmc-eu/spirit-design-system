import React from 'react';
import { getAccentTextColors, getEmotionTextColors } from '../../../utils/colorObjectGenerators';
import Box from '../Box';

const accentColorsObject = getAccentTextColors();
const emotionColorsObject = getEmotionTextColors();

const BoxWithBackgroundColor = () => (
  <>
    <p>For demo purposes, the boxes have custom padding.</p>
    <Box padding="space-800">Primary Background</Box>
    <Box padding="space-800" backgroundColor="secondary">
      Secondary Background
    </Box>
    <Box padding="space-800" backgroundColor="tertiary">
      Tertiary Background
    </Box>
    {Object.values([...Object.values(accentColorsObject), ...Object.values(emotionColorsObject)]).map(
      (backgroundColor) => (
        <Box padding="space-800" backgroundColor={backgroundColor}>
          Background with {backgroundColor} color
        </Box>
      ),
    )}
  </>
);

export default BoxWithBackgroundColor;
