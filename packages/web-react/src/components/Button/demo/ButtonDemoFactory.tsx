import React from 'react';
import DocsSection from '../../../../docs/DocsSections';
import { ActionColors, EmotionColors, Sizes } from '../../../constants';
import { ButtonBaseProps } from '../../../types';
import { Icon } from '../../Icon';
import { Button } from '../Button';

const ButtonDemoFactory = ({ ...props }: ButtonBaseProps) => {
  const sizes = Object.values(Sizes);
  const actionColors = Object.values(ActionColors);
  const emotionColors = Object.values(EmotionColors);
  const colors = [...actionColors, ...emotionColors];

  return (
    <>
      {sizes.map((size) => (
        <DocsSection key={size} title={`Size ${size}`}>
          {colors.map((color) => (
            <div key={color} className={`${color === 'inverted' ? 'docs-Box ' : ''}`}>
              <div>
                <Button size={size} color={color} elementType="a" {...props}>
                  {`Button ${color}`}
                </Button>{' '}
                <Button size={size} color={color} {...props}>
                  <Icon name="hamburger" marginRight="space-400" />
                  Menu
                </Button>{' '}
                <Button size={size} color={color} isSquare {...props}>
                  <Icon name="hamburger" />
                </Button>
              </div>
            </div>
          ))}
        </DocsSection>
      ))}
    </>
  );
};

export default ButtonDemoFactory;
