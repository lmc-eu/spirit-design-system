import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks/styleProps';
import { SpiritCheckboxFieldProps } from '../../types';
import { useCheckboxFieldStyleProps } from './useCheckboxFieldStyleProps';

export const CheckboxField = (props: SpiritCheckboxFieldProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useCheckboxFieldStyleProps(props);
  const { id, label, message, value, isDisabled, isRequired, isChecked, ...restProps } = modifiedProps;
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <div {...styleProps} className={classNames(classProps.root, styleProps.className)}>
      <input
        {...otherProps}
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
