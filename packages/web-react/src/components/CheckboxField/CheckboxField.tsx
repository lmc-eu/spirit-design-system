import React from 'react';
import { SpiritCheckboxFieldProps } from '../../types';
import { filterProps } from '../../utils/filterProps';
import { useCheckboxFieldStyleProps } from './useCheckboxFieldStyleProps';

export const CheckboxField = (props: SpiritCheckboxFieldProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useCheckboxFieldStyleProps(props);
  const { id, label, message, value, isDisabled, isRequired, isChecked, ...restProps } = modifiedProps;

  return (
    <div className={classProps.root}>
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
        <label htmlFor={id} className={classProps.label}>
          {label}
        </label>
        {message && <span className={classProps.message}>{message}</span>}
      </span>
    </div>
  );
};

export default CheckboxField;
