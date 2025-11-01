import React from 'react';
import { DemoColorTypes, DemoEmotionColors, DocsStack } from '../../../../docs';
import { BackgroundColors, NeutralColors } from '../../../constants';
import { getAccentColorNames } from '../../../utils';
import { Grid } from '../../Grid';
import ControlButtonDemoFactory from './ControlButtonDemoFactory';

const basicColors = Object.values(BackgroundColors);
const neutralColors = Object.values(NeutralColors);
const emotionColors = Object.values(DemoEmotionColors);
const accentColors = getAccentColorNames();

const ControlButtonIcon = () => (
  <Grid cols={{ mobile: 1, desktop: 3 }} alignmentY="top">
    <DocsStack stackAlignment="stretch">
      <h3>On Background Colors</h3>

      {basicColors.map((color) => (
        <ControlButtonDemoFactory key={color} color={color} colorType={DemoColorTypes.BASIC} />
      ))}
      {neutralColors.map((color) => (
        <ControlButtonDemoFactory key={color} color={color} colorType={DemoColorTypes.NEUTRAL} />
      ))}
    </DocsStack>

    <DocsStack stackAlignment="stretch">
      <h3>On Emotion Colors</h3>

      {emotionColors.map((color) => (
        <ControlButtonDemoFactory key={color} color={color} colorType={DemoColorTypes.EMOTION} />
      ))}
    </DocsStack>

    <DocsStack stackAlignment="stretch">
      <h3>On Accent Colors</h3>

      {accentColors.map((color) => (
        <ControlButtonDemoFactory key={color} color={color} colorType={DemoColorTypes.ACCENT} />
      ))}
    </DocsStack>
  </Grid>
);

export default ControlButtonIcon;
