import React from 'react';
import { SpiritCheckboxFieldProps } from '../../types';
import { filterProps } from '../../utils/filterProps';
import { useCheckboxFieldStyleProps } from './useCheckboxFieldStyleProps';

export const CheckboxField = (props: SpiritCheckboxFieldProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useCheckboxFieldStyleProps(props);
  const { id, label, message, value, isDisabled, isRequired, isChecked, ...restProps } = modifiedProps;

  return (
    <label htmlFor={id} className={classProps.root}>
      <input
        {...filterProps(restProps)}
        type="checkbox"
        id={id}
        className={classProps.input}
        disabled={isDisabled}
        required={isRequired}
        checked={isChecked}
        value={value}
      />
      <span className={classProps.text}>
        <span className={classProps.label}>{label}</span>
        {message && <span className={classProps.message}>{message}</span>}
      </span>
    </label>
  );
};

export default CheckboxField;
