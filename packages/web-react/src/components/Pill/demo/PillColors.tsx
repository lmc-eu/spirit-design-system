import React from 'react';
import { ActionColors, EmotionColors } from '../../../constants';
import Pill from '../Pill';

const PillColors = () => {
  const actionColors = Object.values(ActionColors);
  const emotionColors = Object.values(EmotionColors);
  const colors = [...actionColors, 'selected', 'unselected', ...emotionColors];

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
