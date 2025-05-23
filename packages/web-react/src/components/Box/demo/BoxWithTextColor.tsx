import { accentColors, emotionColors } from '@lmc-eu/spirit-design-tokens';
import React from 'react';
import { BackgroundColors, TextColors } from '../../../constants';
import { BoxBackgroundColorsType } from '../../../types';
import { getAccentTextColors, getEmotionTextColors } from '../../../utils/colorObjectGenerators';
import { Grid } from '../../Grid';
import BoxColorDemoFactory from './BoxColorDemoFactory';
import { collectDefinedColorValues, getComplementaryColor } from './complementaryColorHelper';

const accentColorsObject = getAccentTextColors();
const emotionColorsObject = getEmotionTextColors();

const getComplementaryBackgroundColor = (textColor: string): BoxBackgroundColorsType =>
  getComplementaryColor({
    sourceColor: textColor,
    groups: [...Object.values(accentColors), ...Object.values(emotionColors)],
    fromPrefix: 'content',
    toPrefix: 'background',
    fallback: BackgroundColors.SECONDARY,
  }) as BoxBackgroundColorsType;

const BoxWithTextColor = () => {
  const textColors = Object.values(TextColors);
  const accentTextColors = collectDefinedColorValues(accentColorsObject);
  const emotionTextColors = collectDefinedColorValues(emotionColorsObject);

  return (
    <>
      <p>For demo purposes, the boxes have custom padding.</p>
      <Grid cols={{ mobile: 1, tablet: 1, desktop: 3 }} gap="space-600">
        <BoxColorDemoFactory
          label="Text colors"
          demoType="text"
          colorList={textColors}
          getComplementaryColor={getComplementaryBackgroundColor}
        />
        <BoxColorDemoFactory
          label="Accent text colors"
          demoType="text"
          colorList={accentTextColors}
          getComplementaryColor={getComplementaryBackgroundColor}
        />
        <BoxColorDemoFactory
          label="Emotion text colors"
          demoType="text"
          colorList={emotionTextColors}
          getComplementaryColor={getComplementaryBackgroundColor}
        />
      </Grid>
    </>
  );
};

export default BoxWithTextColor;
