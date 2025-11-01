import { accentColors, emotionColors } from '@lmc-eu/spirit-design-tokens';
import React from 'react';
import { BackgroundColors, TextColors } from '../../../constants';
import { type BackgroundNeutralColorsType } from '../../../types';
import { getAccentBackgroundColors, getEmotionBackgroundColors } from '../../../utils';
import { Grid } from '../../Grid';
import BoxColorDemoFactory, { type BoxTextColorsType } from './BoxColorDemoFactory';
import { collectDefinedColorValues, getComplementaryColor } from './complementaryColorHelper';

const accentColorsObject = getAccentBackgroundColors();
const emotionColorsObject = getEmotionBackgroundColors();
const neutralBackgroundColors: BackgroundNeutralColorsType[] = ['neutral-basic', 'neutral-subtle'];

const getComplementaryTextColor = (backgroundColor: string): BoxTextColorsType =>
  getComplementaryColor({
    sourceColor: backgroundColor,
    groups: [...Object.values(accentColors), ...Object.values(emotionColors)],
    fromPrefix: 'background',
    toPrefix: 'content',
    fallback: TextColors.PRIMARY,
  }) as BoxTextColorsType;

const BoxWithBackgroundColor = () => {
  const accentBackgroundColors = collectDefinedColorValues(accentColorsObject);
  const backgroundColors = [...Object.values(BackgroundColors), ...neutralBackgroundColors];
  const emotionBackgroundColors = collectDefinedColorValues(emotionColorsObject);

  return (
    <>
      <p>For demo purposes, the boxes have custom padding.</p>
      <Grid cols={{ desktop: 3, tablet: 1, mobile: 1 }} gap="space-600">
        <BoxColorDemoFactory
          label="Background colors"
          demoType="background"
          colorList={backgroundColors}
          getComplementaryColor={getComplementaryTextColor}
        />
        <BoxColorDemoFactory
          label="Accent colors"
          demoType="background"
          colorList={accentBackgroundColors}
          getComplementaryColor={getComplementaryTextColor}
        />
        <BoxColorDemoFactory
          label="Emotion colors"
          demoType="background"
          colorList={emotionBackgroundColors}
          getComplementaryColor={getComplementaryTextColor}
        />
      </Grid>
    </>
  );
};

export default BoxWithBackgroundColor;
