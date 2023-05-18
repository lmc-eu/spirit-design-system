import React from 'react';
import classNames from 'classnames';
import { useStyleProps, useDeprecationMessage, useValidationText } from '../../hooks';
import { SpiritTextFieldBaseProps, TextFieldBasePasswordToggleProps } from '../../types';
import { useTextFieldBaseStyleProps } from './useTextFieldBaseStyleProps';
import TextFieldBaseInput from './TextFieldBaseInput';
import withPasswordToggle from './withPasswordToggle';

const TextFieldBaseInputWithPasswordToggle = withPasswordToggle<TextFieldBasePasswordToggleProps>(TextFieldBaseInput);

export const TextFieldBase = (props: SpiritTextFieldBaseProps) => {
  const { classProps, props: modifiedProps } = useTextFieldBaseStyleProps(props);
  const { id, label, message, helperText, validationState, ...restProps } = modifiedProps;
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  useDeprecationMessage({
    method: 'property',
    trigger: validationState === 'error',
    componentName: props?.isMultiline ? 'TextArea' : 'TextField',
    propertyProps: {
      deprecatedValue: 'error',
      newValue: 'danger',
      propertyName: 'validationState',
    },
  });
  useDeprecationMessage({
    method: 'custom',
    trigger: !!(props?.message && !validationState),
    componentName: props?.isMultiline ? 'TextArea' : 'TextField',
    customText:
      '`message` prop without `validationState` prop will be unsupported in the next version. Use `helperText` instead.',
  });

  const renderValidationText = useValidationText({
    validationTextClassName: classProps.message,
    validationState,
    validationText: message,
    requireValidationState: false,
  });

  return (
    <div {...styleProps} className={classNames(classProps.root, styleProps.className)}>
      <label htmlFor={id} className={classProps.label}>
        {label}
      </label>
      <TextFieldBaseInputWithPasswordToggle id={id} {...otherProps} />
      {helperText && <div className={classProps.helperText}>{helperText}</div>}
      {renderValidationText}
    </div>
  );
};

export default TextFieldBase;
