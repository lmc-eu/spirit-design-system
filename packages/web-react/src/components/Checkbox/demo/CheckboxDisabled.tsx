import React, { useEffect, useRef } from 'react';
import Checkbox from '../Checkbox';

const CheckboxDisabled = () => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    checkboxRef.current && (checkboxRef.current.indeterminate = true);
  }, [checkboxRef]);

  return (
    <>
      <Checkbox id="checkboxDisabled" name="checkboxDisabled" label="Checkbox Label" isDisabled />
      <Checkbox
        id="checkboxDisabledHelperText"
        name="checkboxDisabledHelperText"
        label="Checkbox Label"
        isChecked
        helperText="Helper text"
        isDisabled
        isRequired
      />
      <Checkbox
        id="checkboxDisabledIndeterminate"
        name="checkboxDisabledIndeterminate"
        label="Checkbox Label"
        isDisabled
        ref={checkboxRef}
      />
    </>
  );
};

export default CheckboxDisabled;
