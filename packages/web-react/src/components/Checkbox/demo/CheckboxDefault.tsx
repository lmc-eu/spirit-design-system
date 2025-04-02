import React, { useState } from 'react';
import Checkbox from '../Checkbox';

const CheckboxDefault = () => {
  const [isFirstCheckboxChecked, setFirstCheckboxChecked] = useState(false);
  const [isSecondCheckboxChecked, setSecondCheckboxChecked] = useState(true);

  return (
    <>
      <Checkbox
        id="checkbox-default"
        name="checkboxDefault"
        label="Checkbox Label"
        isChecked={isFirstCheckboxChecked}
        onChange={() => setFirstCheckboxChecked(!isFirstCheckboxChecked)}
      />
      <Checkbox
        id="checkbox-default-checked"
        name="checkboxDefaultChecked"
        label="Checkbox Label"
        isChecked={isSecondCheckboxChecked}
        onChange={() => setSecondCheckboxChecked(!isSecondCheckboxChecked)}
      />
    </>
  );
};

export default CheckboxDefault;
