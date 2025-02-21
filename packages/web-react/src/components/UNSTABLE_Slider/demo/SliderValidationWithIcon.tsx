import React, { ChangeEvent, useState } from 'react';
import { ValidationStates } from '../../../constants';
import { DEMO_SLIDER_DEFAULT_VALUE } from '../constants';
import UNSTABLE_Slider from '../UNSTABLE_Slider';

const SliderValidationWithIcon = () => {
  const states = Object.values(ValidationStates);
  const [valueDanger, setValueDanger] = useState(DEMO_SLIDER_DEFAULT_VALUE);

  const handleChangeDanger = (event: ChangeEvent<HTMLInputElement>) => {
    setValueDanger(Number(event.target.value));
  };

  return (
    <>
      {states.map((state) => (
        <UNSTABLE_Slider
          id={`select-${state}-validation-icon`}
          label="Slider"
          value={valueDanger}
          onChange={handleChangeDanger}
          validationState={state}
          validationText={`This is ${state} validation text with icon. Long validation text to show how it wraps.`}
          hasValidationIcon
          key={`select-${state}-validation-icon`}
        />
      ))}
    </>
  );
};

export default SliderValidationWithIcon;
