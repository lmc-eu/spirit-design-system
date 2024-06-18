import React, { ChangeEvent, useState } from 'react';
import { DEMO_SLIDER_DEFAULT_VALUE } from '../constants';
import UNSTABLE_Slider from '../UNSTABLE_Slider';

const SliderValidation = () => {
  const [valueSuccess, setValueSuccess] = useState(DEMO_SLIDER_DEFAULT_VALUE);
  const [valueWarning, setValueWarning] = useState(DEMO_SLIDER_DEFAULT_VALUE);
  const [valueDanger, setValueDanger] = useState(DEMO_SLIDER_DEFAULT_VALUE);

  const handleChangeSuccess = (event: ChangeEvent<HTMLInputElement>) => {
    setValueSuccess(Number(event.target.value));
  };
  const handleChangeWarning = (event: ChangeEvent<HTMLInputElement>) => {
    setValueWarning(Number(event.target.value));
  };
  const handleChangeDanger = (event: ChangeEvent<HTMLInputElement>) => {
    setValueDanger(Number(event.target.value));
  };

  return (
    <>
      <UNSTABLE_Slider
        id="slider-success"
        label="Slider"
        value={valueSuccess}
        onChange={handleChangeSuccess}
        validationState="success"
      />
      <UNSTABLE_Slider
        id="slider-warning"
        label="Slider"
        value={valueWarning}
        onChange={handleChangeWarning}
        validationState="warning"
        validationText="Validation text"
      />
      <UNSTABLE_Slider
        id="slider-danger"
        label="Slider"
        value={valueDanger}
        onChange={handleChangeDanger}
        validationState="danger"
        validationText={['First validation text', 'Second validation text']}
      />
    </>
  );
};

export default SliderValidation;
