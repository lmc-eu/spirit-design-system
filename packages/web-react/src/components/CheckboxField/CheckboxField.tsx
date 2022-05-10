import React from 'react';
import classNames from 'classnames';
import { SpiritCheckboxFieldProps } from '../../types';
import { useStyleProps } from '../../hooks/styleProps';
import { useCheckboxFieldStyleProps } from './useCheckboxFieldStyleProps';

export const CheckboxField = (props: SpiritCheckboxFieldProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useCheckboxFieldStyleProps(props);
  const { id, label, message, value, isDisabled, isRequired, isChecked, ...restProps } = modifiedProps;
  const { styleProps } = useStyleProps(restProps);

  return (
    <div {...styleProps} className={classNames(classProps.root, styleProps.className)}>
      <input
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
