import React from 'react';
import DocsSection from '../../../../docs/DocsSections';
import { ActionColors, EmotionColors, Sizes } from '../../../constants';
import { ButtonBaseProps } from '../../../types';
import { Icon } from '../../Icon';
import { ButtonLink } from '../ButtonLink';

const ButtonLinkDemoFactory = ({ ...props }: ButtonBaseProps) => {
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
                <ButtonLink size={size} color={color} elementType="a" {...props}>
                  {`Button ${color}`}
                </ButtonLink>{' '}
                <ButtonLink size={size} color={color} {...props}>
                  <Icon name="link" marginRight="space-400" />
                  Menu
                </ButtonLink>{' '}
                <ButtonLink size={size} color={color} isSquare {...props}>
                  <Icon name="link" />
                </ButtonLink>
              </div>
            </div>
          ))}
        </DocsSection>
      ))}
    </>
  );
};

export default ButtonLinkDemoFactory;
