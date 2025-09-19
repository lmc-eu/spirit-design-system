import React, { type ChangeEvent, useState } from 'react';
import { DEMO_SLIDER_DEFAULT_VALUE } from '../constants';
import Slider from '../Slider';

const SliderDisabled = () => {
  const [value, setValue] = useState(DEMO_SLIDER_DEFAULT_VALUE);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return <Slider id="slider-required" label="Slider" value={value} onChange={handleChange} isDisabled />;
};

export default SliderDisabled;
