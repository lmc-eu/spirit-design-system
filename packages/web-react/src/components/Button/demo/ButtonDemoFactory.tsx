import React from 'react';
import DocsSection from '../../../../docs/DocsSections';
import { ComponentButtonColors, EmotionColors, Sizes } from '../../../constants';
import { ButtonBaseProps } from '../../../types';
import { Icon } from '../../Icon';
import Button from '../Button';

const ButtonDemoFactory = ({ ...props }: ButtonBaseProps) => {
  const sizes = Object.values(Sizes);
  const buttonColors = Object.values(ComponentButtonColors);
  const emotionColors = Object.values(EmotionColors);
  const colors = [...buttonColors, ...emotionColors];

  return (
    <>
      {sizes.map((size) => (
        <DocsSection key={size} title={`Size ${size}`} container="none">
          {colors.map((color) => (
            <div key={color}>
              <Button size={size} color={color} elementType="a" {...props}>
                {`Button ${color}`}
              </Button>{' '}
              <Button size={size} color={color} {...props}>
                <Icon name="hamburger" marginRight="space-400" />
                Menu
              </Button>{' '}
              <Button size={size} color={color} isSymmetrical {...props}>
                <Icon name="hamburger" />
              </Button>
            </div>
          ))}
        </DocsSection>
      ))}
    </>
  );
};

export default ButtonDemoFactory;
