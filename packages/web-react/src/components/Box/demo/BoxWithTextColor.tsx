import { accentColors, emotionColors } from '@lmc-eu/spirit-design-tokens';
import React from 'react';
import { BackgroundColors, TextColors } from '../../../constants';
import { type BoxBackgroundColorsType, type TextNeutralColorsType } from '../../../types';
import { getAccentTextColors, getEmotionTextColors } from '../../../utils';
import { Grid } from '../../Grid';
import BoxColorDemoFactory from './BoxColorDemoFactory';
import { collectDefinedColorValues, getComplementaryColor } from './complementaryColorHelper';

const accentColorsObject = getAccentTextColors();
const emotionColorsObject = getEmotionTextColors();
const neutralTextColors: TextNeutralColorsType[] = ['neutral-basic', 'neutral-subtle'];

const getComplementaryBackgroundColor = (textColor: string): BoxBackgroundColorsType =>
  getComplementaryColor({
    sourceColor: textColor,
    groups: [...Object.values(accentColors), ...Object.values(emotionColors)],
    fromPrefix: 'content',
    toPrefix: 'background',
    fallback: BackgroundColors.SECONDARY,
  }) as BoxBackgroundColorsType;

const BoxWithTextColor = () => {
  const accentTextColors = collectDefinedColorValues(accentColorsObject);
  const emotionTextColors = collectDefinedColorValues(emotionColorsObject);
  const textColors = [...Object.values(TextColors), ...neutralTextColors];

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
