import React from 'react';
import { SpiritTextFieldProps } from '../../types';
import { useTextFieldStyleProps } from './useTextFieldStyleProps';

export const TextField = (props: SpiritTextFieldProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useTextFieldStyleProps(props);
  const { id, placeholder, disabled, required, label, message, value, ...restProps } = modifiedProps;

  return (
    <div className={classProps.root}>
      <label htmlFor={id} className={classProps.label}>
        {label}
      </label>
      <input
        {...restProps}
        type="text"
        id={id}
        className={classProps.input}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        value={value}
      />
      {message && <div className={classProps.message}>{message}</div>}
    </div>
  );
};

export default TextField;
