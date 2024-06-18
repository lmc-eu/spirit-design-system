import React, { ChangeEvent, useState } from 'react';
import { DEMO_SLIDER_DEFAULT_VALUE } from '../constants';
import UNSTABLE_Slider from '../UNSTABLE_Slider';

const SliderHiddenLabel = () => {
  const [value, setValue] = useState(DEMO_SLIDER_DEFAULT_VALUE);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <UNSTABLE_Slider id="slider-hidden-label" label="Slider" value={value} onChange={handleChange} isLabelHidden />
  );
};

export default SliderHiddenLabel;
