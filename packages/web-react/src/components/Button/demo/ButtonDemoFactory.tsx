import React from 'react';
import { ActionColors, EmotionColors, Sizes } from '../../../constants';
import { ButtonBaseProps } from '../../../types';
import { Icon } from '../../Icon';
import { Button } from '../Button';

type ButtonDemoFactoryProps = {
  label: string;
} & ButtonBaseProps;

const ButtonDemoFactory = ({ label, ...restProps }: ButtonDemoFactoryProps) => {
  const sizes = Object.values(Sizes);
  const actionColors = Object.values(ActionColors);
  const emotionColors = Object.values(EmotionColors);
  const colors = [...actionColors, ...emotionColors];

  return (
    <>
      {sizes.map((size) => (
        <div key={size}>
          <h3 className="docs-Heading">Size {size}</h3>
          {colors.map((color) => (
            <div key={color} className={`${color === 'inverted' ? 'docs-Box ' : ''}my-600`}>
              <div>
                <Button size={size} color={color} elementType="a" {...restProps}>
                  {`${label} ${color}`}
                </Button>{' '}
                <Button size={size} color={color} {...restProps}>
                  <Icon name="hamburger" UNSAFE_className="mr-400" />
                  Menu
                </Button>{' '}
                <Button size={size} color={color} isSquare {...restProps}>
                  <Icon name="hamburger" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default ButtonDemoFactory;
