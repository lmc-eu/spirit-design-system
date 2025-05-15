import React from 'react';
import DocsSection from '../../../../docs/DocsSection';
import { ComponentButtonColors, EmotionColors, Sizes } from '../../../constants';
import { Grid } from '../../Grid';
import { Icon } from '../../Icon';
import Button from '../Button';

const ButtonFluid = () => {
  const sizes = Object.values(Sizes);
  const buttonColors = Object.values(ComponentButtonColors);
  const emotionColors = Object.values(EmotionColors);
  const colors = [...buttonColors, ...emotionColors];

  return (
    <Grid cols={{ mobile: 1, desktop: 3 }} spacingY="space-1100">
      {sizes.map((size) => (
        <DocsSection key={size} title={`Size ${size}`} container="none" hasPadding={false}>
          {colors.map((color) => (
            <Grid key={color} cols={1} spacing="space-400">
              <Button elementType="a" href="#" size={size} color={color}>
                {`Button ${color}`}
              </Button>{' '}
              <Button size={size} color={color}>
                <Icon name="hamburger" marginRight="space-400" />
                Menu
              </Button>
            </Grid>
          ))}
        </DocsSection>
      ))}
    </Grid>
  );
};

export default ButtonFluid;
