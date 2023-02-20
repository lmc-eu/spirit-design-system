import classNames from 'classnames';
import React from 'react';
import { useDeprecationMessage, useStyleProps } from '../../hooks';
import { SpiritCheckboxFieldProps } from '../../types';
import { useCheckboxFieldStyleProps } from './useCheckboxFieldStyleProps';

export const CheckboxField = (props: SpiritCheckboxFieldProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useCheckboxFieldStyleProps(props);
  const { id, label, message, value, isDisabled, isRequired, isChecked, ...restProps } = modifiedProps;
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  useDeprecationMessage({
    method: 'property',
    trigger: props?.validationState === 'error',
    componentName: 'CheckboxField',
    propertyProps: {
      deprecatedValue: 'error',
      newValue: 'danger',
      propertyName: 'validationState',
    },
  });

  return (
    <label {...styleProps} htmlFor={id} className={classNames(classProps.root, styleProps.className)}>
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
        <span className={classProps.label}>{label}</span>
        {message && <span className={classProps.message}>{message}</span>}
      </span>
    </label>
  );
};

export default CheckboxField;
