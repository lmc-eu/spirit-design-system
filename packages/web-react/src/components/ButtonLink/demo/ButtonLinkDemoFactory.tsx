import React from 'react';
import DocsSection from '../../../../docs/DocsSection';
import { ComponentButtonColors, EmotionColors, Sizes } from '../../../constants';
import { ButtonBaseProps } from '../../../types';
import { Icon } from '../../Icon';
import ButtonLink from '../ButtonLink';

const ButtonLinkDemoFactory = ({ ...props }: ButtonBaseProps) => {
  const sizes = Object.values(Sizes);
  const buttonColors = Object.values(ComponentButtonColors);
  const emotionColors = Object.values(EmotionColors);
  const colors = [...buttonColors, ...emotionColors];

  return (
    <>
      {sizes.map((size) => (
        <DocsSection key={size} title={`Size ${size}`} container="none" hasPadding={false}>
          {colors.map((color) => (
            <div key={color}>
              <ButtonLink size={size} color={color} elementType="a" {...props}>
                {`Button ${color}`}
              </ButtonLink>{' '}
              <ButtonLink size={size} color={color} {...props}>
                <Icon name="link" marginRight="space-400" />
                Menu
              </ButtonLink>{' '}
              <ButtonLink size={size} color={color} isSymmetrical {...props}>
                <Icon name="link" />
              </ButtonLink>
            </div>
          ))}
        </DocsSection>
      ))}
    </>
  );
};

export default ButtonLinkDemoFactory;
