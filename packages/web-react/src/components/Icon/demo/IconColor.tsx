import React from 'react';
import { Grid } from '../../Grid';
import { accentColors, emotionColors, textColors } from '../utils';
import IconColorDemoFactory from './IconColorDemoFactory';

const IconColor = () => {
  const iconName = 'file';

  return (
    <Grid cols={{ desktop: 3, mobile: 1 }}>
      <IconColorDemoFactory label="Text Colors" iconName={iconName} colorList={textColors} />
      <IconColorDemoFactory label="Accent Colors" iconName={iconName} colorList={accentColors} />
      <IconColorDemoFactory label="Emotion Colors" iconName={iconName} colorList={emotionColors} />
    </Grid>
  );
};

export default IconColor;
