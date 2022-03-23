import React from 'react';
import { filterProps } from '../../utils/filterProps';
import { SpiritTextFieldProps } from '../../types';
import { useTextFieldStyleProps } from './useTextFieldStyleProps';

const defaultProps = {
  type: 'text',
};

export const TextField = (props: SpiritTextFieldProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useTextFieldStyleProps(props);
  const { id, type, placeholder, disabled, required, label, message, value, ...restProps } = modifiedProps;

  return (
    <div className={classProps.root}>
      <label htmlFor={id} className={classProps.label}>
        {label}
      </label>
      <input
        {...filterProps(restProps)}
        type={type}
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

TextField.defaultProps = defaultProps;

export default TextField;
