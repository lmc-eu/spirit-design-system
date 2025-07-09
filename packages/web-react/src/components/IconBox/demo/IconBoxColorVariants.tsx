import React from 'react';
import { BackgroundColors } from '../../../constants';
import { getAccentBackgroundColors, getEmotionBackgroundColors } from '../../../utils';
import { Grid } from '../../Grid';
import IconBoxColorDemoFactory from './IconBoxColorDemoFactory';

const accentColorsObject = getAccentBackgroundColors();
const emotionColorsObject = getEmotionBackgroundColors();

const IconBoxColorVariants = () => (
  <Grid cols={{ desktop: 3, tablet: 1, mobile: 1 }} gap="space-600">
    <IconBoxColorDemoFactory label="Background colors" colorList={Object.values(BackgroundColors)} />
    <IconBoxColorDemoFactory label="Accent colors" colorList={Object.values(accentColorsObject)} />
    <IconBoxColorDemoFactory label="Emotions colors" colorList={Object.values(emotionColorsObject)} />
  </Grid>
);

export default IconBoxColorVariants;
