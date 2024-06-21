import { ChangeEvent, useState } from 'react';

export interface UseSliderReturn {
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

// TODO: If in the future there is no need to expand this hook, we can refactor it and make it a general hook.
// @see: https://designcode.io/react-hooks-handbook-useinput-hook

export const useSlider = (propsValue: number): UseSliderReturn => {
  const [value, setValue] = useState(propsValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return {
    value,
    onChange: handleChange,
  };
};
