import React, { ChangeEvent, useState } from 'react';
import { DEMO_SLIDER_DEFAULT_VALUE } from '../constants';
import Slider from '../Slider';

const SliderFluid = () => {
  const [value, setValue] = useState(DEMO_SLIDER_DEFAULT_VALUE);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return <Slider id="slider-fluid" label="Slider" value={value} onChange={handleChange} isFluid />;
};

export default SliderFluid;
