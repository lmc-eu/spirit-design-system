import React, { useState } from 'react';
import Checkbox from '../Checkbox';

const CheckboxDefault = () => {
  const [isCheckedDefault, setIsCheckedDefault] = useState(false);
  const [isCheckedDefaultChecked, setIsCheckedDefaultChecked] = useState(true);

  return (
    <>
      <Checkbox
        id="checkbox-default"
        name="checkboxDefault"
        label="Checkbox Label"
        isChecked={isCheckedDefault}
        onChange={() => setIsCheckedDefault(!isCheckedDefault)}
      />
      <Checkbox
        id="checkbox-default-checked"
        name="checkboxDefaultChecked"
        label="Checkbox Label"
        isChecked={isCheckedDefaultChecked}
        onChange={() => setIsCheckedDefaultChecked(!isCheckedDefaultChecked)}
      />
    </>
  );
};

export default CheckboxDefault;
