import React, { useEffect, useRef } from 'react';
import Checkbox from '../Checkbox';

const CheckboxIndeterminate = () => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    checkboxRef.current && (checkboxRef.current.indeterminate = true);
  }, [checkboxRef]);

  return (
    <Checkbox
      id="checkbox-indeterminate"
      name="checkboxIndeterminate"
      label="Checkbox Label"
      ref={checkboxRef}
      onChange={() => {}}
    />
  );
};

export default CheckboxIndeterminate;
