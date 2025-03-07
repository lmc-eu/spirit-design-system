import React, { ChangeEvent, useState } from 'react';
import { DEMO_SLIDER_DEFAULT_VALUE } from '../constants';
import Slider from '../Slider';

const SliderValidation = () => {
  const [valueSuccess, setValueSuccess] = useState(DEMO_SLIDER_DEFAULT_VALUE);
  const [valueWarning, setValueWarning] = useState(DEMO_SLIDER_DEFAULT_VALUE);
  const [valueDanger, setValueDanger] = useState(DEMO_SLIDER_DEFAULT_VALUE);
  const [valueDangerWithHelperText, setValueDangerWithHelperText] = useState(DEMO_SLIDER_DEFAULT_VALUE);

  const handleChangeSuccess = (event: ChangeEvent<HTMLInputElement>) => {
    setValueSuccess(Number(event.target.value));
  };
  const handleChangeWarning = (event: ChangeEvent<HTMLInputElement>) => {
    setValueWarning(Number(event.target.value));
  };
  const handleChangeDanger = (event: ChangeEvent<HTMLInputElement>) => {
    setValueDanger(Number(event.target.value));
  };

  const handleChangeDangerWithHelperText = (event: ChangeEvent<HTMLInputElement>) => {
    setValueDangerWithHelperText(Number(event.target.value));
  };

  return (
    <>
      <Slider
        id="slider-success"
        label="Slider"
        value={valueSuccess}
        onChange={handleChangeSuccess}
        validationState="success"
      />
      <Slider
        id="slider-warning"
        label="Slider"
        value={valueWarning}
        onChange={handleChangeWarning}
        validationState="warning"
        validationText="Validation text"
      />
      <Slider
        id="slider-danger"
        label="Slider"
        value={valueDanger}
        onChange={handleChangeDanger}
        validationState="danger"
        validationText={['First validation text', 'Second validation text']}
      />
      <Slider
        id="slider-danger-with-helper-text"
        label="Slider"
        value={valueDangerWithHelperText}
        onChange={handleChangeDangerWithHelperText}
        helperText="Helper text"
        validationState="danger"
        validationText="Validation text"
      />
    </>
  );
};

export default SliderValidation;
