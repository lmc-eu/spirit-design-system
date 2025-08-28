import React from 'react';
import { DemoEmotionColors } from '../../../../docs';
import { PillColorsExtended, Pill } from '..';

const PillColors = () => {
  const pillColors = Object.values(PillColorsExtended);
  const emotionColors = Object.values(DemoEmotionColors);
  const colors = [...pillColors, ...emotionColors];

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
