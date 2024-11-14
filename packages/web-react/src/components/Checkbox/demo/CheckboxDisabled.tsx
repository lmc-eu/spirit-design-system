import React, { useEffect, useRef } from 'react';
import Checkbox from '../Checkbox';

const CheckboxDisabled = () => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    checkboxRef.current && (checkboxRef.current.indeterminate = true);
  }, [checkboxRef]);

  return (
    <>
      <Checkbox id="checkbox-disabled" name="checkboxDisabled" label="Checkbox Label" isDisabled />
      <Checkbox
        id="checkbox-disabled-helper-text"
        name="checkboxDisabledHelperText"
        label="Checkbox Label"
        isChecked
        helperText="Helper text"
        isDisabled
        isRequired
        onChange={() => {}}
      />
      <Checkbox
        id="checkbox-disabled-indeterminate"
        name="checkboxDisabledIndeterminate"
        label="Checkbox Label"
        isDisabled
        ref={checkboxRef}
        onChange={() => {}}
      />
    </>
  );
};

export default CheckboxDisabled;
