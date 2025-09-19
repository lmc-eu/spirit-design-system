import React, { type ChangeEvent, useState } from 'react';
import { DEMO_SLIDER_DEFAULT_VALUE } from '../constants';
import Slider from '../Slider';

const SliderHelperText = () => {
  const [value, setValue] = useState(DEMO_SLIDER_DEFAULT_VALUE);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <Slider id="slider-helper-text" label="Slider" value={value} onChange={handleChange} helperText="Helper text" />
  );
};

export default SliderHelperText;
