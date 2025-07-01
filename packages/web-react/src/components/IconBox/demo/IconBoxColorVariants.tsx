import React from 'react';
import { BackgroundColors } from '../../../constants';
import { getAccentBackgroundColors, getEmotionBackgroundColors } from '../../../utils/colorObjectGenerators';
import { collectDefinedColorValues } from '../../Box/demo/complementaryColorHelper';
import { Grid } from '../../Grid';
import IconBoxColorDemoFactory from './IconBoxColorDemoFactory';

const accentColorsObject = getAccentBackgroundColors();
const emotionColorsObject = getEmotionBackgroundColors();

const IconBoxColorVariants = () => {
  const accentBackgroundColors = collectDefinedColorValues(accentColorsObject);
  const emotionBackgroundColors = collectDefinedColorValues(emotionColorsObject);

  return (
    <Grid cols={{ desktop: 3, tablet: 1, mobile: 1 }} gap="space-600">
      <IconBoxColorDemoFactory label="Background colors" colorList={Object.values(BackgroundColors)} />
      <IconBoxColorDemoFactory label="Accent colors" colorList={accentBackgroundColors} />
      <IconBoxColorDemoFactory label="Emotions colors" colorList={emotionBackgroundColors} />
    </Grid>
  );
};

export default IconBoxColorVariants;
