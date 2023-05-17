import classNames from 'classnames';
import React from 'react';
import { useDeprecationMessage, useStyleProps } from '../../hooks';
import { SpiritCheckboxFieldProps } from '../../types';
import { useValidationText } from '../Field';
import { useCheckboxFieldStyleProps } from './useCheckboxFieldStyleProps';

export const CheckboxField = (props: SpiritCheckboxFieldProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useCheckboxFieldStyleProps(props);
  const { id, label, message, helperText, validationState, value, isDisabled, isRequired, isChecked, ...restProps } =
    modifiedProps;
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  useDeprecationMessage({
    method: 'property',
    trigger: validationState === 'error',
    componentName: 'CheckboxField',
    propertyProps: {
      deprecatedValue: 'error',
      newValue: 'danger',
      propertyName: 'validationState',
    },
  });
  useDeprecationMessage({
    method: 'custom',
    trigger: !!(props?.message && !validationState),
    componentName: 'CheckboxField',
    customText:
      '`message` prop without `validationState` prop will be unsupported in the next version. Use `helperText` instead.',
  });

  const renderValidationText = useValidationText({
    validationTextClassName: classProps.message,
    validationState,
    validationText: message,
    validationElementType: 'span',
    requireValidationState: false,
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
        {helperText && <span className={classProps.helperText}>{helperText}</span>}
        {renderValidationText}
      </span>
    </label>
  );
};

export default CheckboxField;
