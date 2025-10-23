import React from 'react';
import DocsStack from '../../../../docs/DocsStack';
import { BackgroundColors, EmotionColors, NeutralColors } from '../../../constants';
import { getAccentColorNames } from '../../../utils';
import { Grid } from '../../Grid';
import ControlButtonDemoFactory from './ControlButtonDemoFactory';

const basicColors = Object.values(BackgroundColors);
const neutralColors = Object.values(NeutralColors);
const emotionColors = Object.values(EmotionColors);
const accentColors = getAccentColorNames();

const ControlButtonIcon = () => (
  <Grid cols={{ mobile: 1, desktop: 3 }} alignmentY="top">
    <DocsStack stackAlignment="stretch">
      <h3>On Background Colors</h3>

      {basicColors.map((color) => (
        <ControlButtonDemoFactory key={color} color={color} colorType="basic" />
      ))}
      {neutralColors.map((color) => (
        <ControlButtonDemoFactory key={color} color={color} colorType="neutral" />
      ))}
    </DocsStack>

    <DocsStack stackAlignment="stretch">
      <h3>On Emotion Colors</h3>

      {emotionColors.map((color) => (
        <ControlButtonDemoFactory key={color} color={color} colorType="emotion" />
      ))}
    </DocsStack>

    <DocsStack stackAlignment="stretch">
      <h3>On Accent Colors</h3>

      {accentColors.map((color) => (
        <ControlButtonDemoFactory key={color} color={color} colorType="accent" />
      ))}
    </DocsStack>
  </Grid>
);

export default ControlButtonIcon;
