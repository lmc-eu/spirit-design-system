import React from 'react';
import { Grid } from '../../Grid';
import { accentColors, emotionColors, textColors } from '../utils';
import IconColorDemoFactory from './IconColorDemoFactory';

const IconColor = () => {
  const iconName = 'file';

  return (
    <Grid cols={{ mobile: 1, desktop: 3 }} alignmentY="top">
      <IconColorDemoFactory label="Text Colors" iconName={iconName} colorList={textColors} />
      <IconColorDemoFactory label="Accent Colors" iconName={iconName} colorList={accentColors} />
      <IconColorDemoFactory label="Emotion Colors" iconName={iconName} colorList={emotionColors} />
    </Grid>
  );
};

export default IconColor;
