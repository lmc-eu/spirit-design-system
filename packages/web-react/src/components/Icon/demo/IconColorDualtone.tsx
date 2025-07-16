import React from 'react';
import { Grid } from '../../Grid';
import { accentColors, emotionColors, textColors } from '../utils';
import IconColorDemoFactory from './IconColorDemoFactory';

const IconColorDualtone = () => {
  const iconName = 'folder-dualtone';

  return (
    <Grid cols={{ desktop: 3, tablet: 1, mobile: 1 }}>
      <IconColorDemoFactory label="Text Colors" iconName={iconName} colorList={textColors} />
      <IconColorDemoFactory label="Accent Colors" iconName={iconName} colorList={accentColors} />
      <IconColorDemoFactory label="Emotion Colors" iconName={iconName} colorList={emotionColors} />
    </Grid>
  );
};

export default IconColorDualtone;
