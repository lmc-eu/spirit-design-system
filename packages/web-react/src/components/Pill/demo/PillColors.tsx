import React from 'react';
import { DemoEmotionColors } from '../../../../docs';
import { BasicPillColors, Pill } from '..';

const PillColors = () => {
  const pillColors = Object.values(BasicPillColors);
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
