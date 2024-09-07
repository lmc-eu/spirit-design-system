import React from 'react';
import { EmotionColors } from '../../../constants';
import Pill from '../Pill';

const PillColors = () => {
  const emotionColors = Object.values(EmotionColors);
  const colors = ['selected', 'neutral', ...emotionColors];

  return (
    <>
      {colors.map((color) => (
        <Pill key={color} color={color}>
          3
        </Pill>
      ))}
    </>
  );
};

export default PillColors;
