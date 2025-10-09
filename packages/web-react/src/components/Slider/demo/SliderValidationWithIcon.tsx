import React, { type ChangeEvent, useState } from 'react';
import { ValidationStates } from '../../../constants';
import { DEMO_SLIDER_DEFAULT_VALUE } from '../constants';
import Slider from '../Slider';

const SliderValidationWithIcon = () => {
  const states = Object.values(ValidationStates);

  const [values, setValues] = useState<Record<string, number>>(
    states.reduce((acc, state) => ({ ...acc, [state]: DEMO_SLIDER_DEFAULT_VALUE }), {}),
  );

  const handleChange = (state: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [state]: Number(event.target.value),
    }));
  };

  return (
    <>
      {states.map((state) => (
        <Slider
          id={`select-${state}-validation-icon`}
          label="Slider"
          value={values[state]}
          onChange={handleChange(state)}
          validationState={state}
          validationText={`This is ${state} validation text. Long validation text to show how it wraps.`}
          hasValidationIcon
          key={`select-${state}-validation-icon`}
        />
      ))}
    </>
  );
};

export default SliderValidationWithIcon;
