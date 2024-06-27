import React, { ChangeEvent, useState } from 'react';
import { DEMO_SLIDER_DEFAULT_VALUE, DEMO_SLIDER_STEPS_VALUE } from '../constants';
import UNSTABLE_Slider from '../UNSTABLE_Slider';

const SliderDefault = () => {
  const [defaultValue, setDefaultValue] = useState(DEMO_SLIDER_DEFAULT_VALUE);
  const [stepsValue, setStepsValue] = useState(DEMO_SLIDER_STEPS_VALUE);

  const handleDefaultChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDefaultValue(Number(event.target.value));
  };

  const handleStepsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStepsValue(Number(event.target.value));
  };

  return (
    <>
      <UNSTABLE_Slider id="slider-default" label="Slider" value={defaultValue} onChange={handleDefaultChange} />
      <UNSTABLE_Slider
        id="slider-steps"
        label="Custom steps"
        min={3}
        max={12}
        value={stepsValue}
        onChange={handleStepsChange}
      />
    </>
  );
};

export default SliderDefault;
