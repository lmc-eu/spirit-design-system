import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks/styleProps';
import { SpiritTextFieldProps } from '../../types';
import { useTextFieldStyleProps } from './useTextFieldStyleProps';

const defaultProps = {
  type: 'text',
};

export const TextField = (props: SpiritTextFieldProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useTextFieldStyleProps(props);
  const { id, type, placeholder, isDisabled, isRequired, label, message, value, ...restProps } = modifiedProps;
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <div {...styleProps} className={classNames(classProps.root, styleProps.className)}>
      <label htmlFor={id} className={classProps.label}>
        {label}
      </label>
      <input
        {...otherProps}
        type={type}
        id={id}
        className={classProps.input}
        placeholder={placeholder}
        disabled={isDisabled}
        required={isRequired}
        value={value}
      />
      {message && <div className={classProps.message}>{message}</div>}
    </div>
  );
};

TextField.defaultProps = defaultProps;

export default TextField;
